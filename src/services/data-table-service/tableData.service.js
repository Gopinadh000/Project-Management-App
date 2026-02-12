/**
 * Table Data Service
 * Builds backend-driven table response (resData) in the format expected by the frontend:
 * { meta, columns, rows, pagination }
 * Handles pagination now; search, sort, filter, views can be added later.
 */

/**
 * Format a value for display (dates, datetimes)
 * @param {*} value - Raw value from DB
 * @param {string} type - Column type: 'string' | 'number' | 'date' | 'datetime'
 * @returns {{ value: string, displayValue?: string, type?: string }}
 */
function formatCellValue(value, type) {
  if (value === null || value === undefined) return { value: "" };

  const str = String(value);
  if (type === "date" && value instanceof Date) {
    const d = value;
    const day = d.getDate();
    const month = d.toLocaleString("en", { month: "short" });
    const year = d.getFullYear();
    return {
      value: value.toISOString().split("T")[0],
      displayValue: `${day} ${month} ${year}`,
      type: "date",
    };
  }
  if (type === "datetime" && value instanceof Date) {
    const d = value;
    const day = d.getDate();
    const month = d.toLocaleString("en", { month: "short" });
    const year = d.getFullYear();
    const hours = d.getHours();
    const mins = d.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const h = hours % 12 || 12;
    return {
      value: d.toISOString(),
      displayValue: `${day} ${month} ${year}, ${h}:${String(mins).padStart(2, "0")} ${ampm}`,
      type: "datetime",
    };
  }
  if (type === "date" && typeof value === "string" && /^\d{4}-\d{2}-\d{2}/.test(value)) {
    try {
      const d = new Date(value);
      if (!isNaN(d.getTime())) {
        const day = d.getDate();
        const month = d.toLocaleString("en", { month: "short" });
        const year = d.getFullYear();
        return {
          value: value.split("T")[0],
          displayValue: `${day} ${month} ${year}`,
          type: "date",
        };
      }
    } catch (_) {}
  }
  if (type === "datetime" && typeof value === "string") {
    try {
      const d = new Date(value);
      if (!isNaN(d.getTime())) {
        const day = d.getDate();
        const month = d.toLocaleString("en", { month: "short" });
        const year = d.getFullYear();
        const hours = d.getHours();
        const mins = d.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";
        const h = hours % 12 || 12;
        return {
          value: d.toISOString(),
          displayValue: `${day} ${month} ${year}, ${h}:${String(mins).padStart(2, "0")} ${ampm}`,
          type: "datetime",
        };
      }
    } catch (_) {}
  }
  return { value: str };
}

/**
 * Get badge config for a value (e.g. status, priority)
 * @param {*} value - Cell value
 * @param {Object} badgeMap - Map of value -> { text, color }
 * @returns {{ text: string, color: string } | null}
 */
function getBadge(value, badgeMap) {
  if (!badgeMap || value === null || value === undefined) return null;
  const key = String(value).toUpperCase();
  const entry = badgeMap[key] || badgeMap[String(value)];
  if (!entry) return null;
  return {
    text: entry.text ?? String(value),
    color: entry.color ?? "gray",
  };
}

/**
 * Build columns array for API response from table config
 * Uses dbFieldName as fieldName in response so row keys match.
 * @param {Array} columnsConfig - From data-tables/*.config.js
 * @returns {Array} columns in API shape
 */
export function buildColumns(columnsConfig) {
  if (!Array.isArray(columnsConfig)) return [];
  return columnsConfig.map((col, index) => ({
    id: col.id ?? index + 1,
    fieldName: col.dbFieldName ?? col.fieldName,
    displayName: col.displayName,
    type: col.type || "string",
    sortable: col.sort !== false,
    searchable: col.search !== false,
    filterable: col.filter === true,
  }));
}

/**
 * Build rows array for API response: each cell is { value, displayValue?, badge?, link?, type? }
 * @param {Array} rawRows - Rows from DB (each row has keys matching dbFieldName or from JOIN)
 * @param {Array} columnsConfig - Table column config
 * @param {Object} options - { linkTemplate?: (row) => ({ url, tooltip? }), rowIdField?: string }
 * @returns {Array} rows in API shape
 */
export function buildRows(rawRows, columnsConfig, options = {}) {
  if (!Array.isArray(rawRows) || !Array.isArray(columnsConfig)) return [];

  const { linkTemplate, rowIdField = "id" } = options;

  return rawRows.map((row) => {
    const out = {};
    columnsConfig.forEach((col) => {
      const dbFieldName = col.dbFieldName ?? col.fieldName;
      const fieldName = dbFieldName; // key in response = dbFieldName for frontend
      let value = row[dbFieldName];

      // Nested e.g. "owner.name"
      if (value === undefined && dbFieldName.includes(".")) {
        const parts = dbFieldName.split(".");
        value = row;
        for (const part of parts) {
          value = value?.[part];
          if (value === null || value === undefined) break;
        }
      }

      const cell = { ...formatCellValue(value, col.type) };

      if (col.badgeMap) {
        const badge = getBadge(value, col.badgeMap);
        if (badge) cell.badge = badge;
      }

      if (linkTemplate && col.link === true) {
        const link = linkTemplate(row);
        if (link?.url) cell.link = link;
      }

      out[fieldName] = cell;
    });
    return out;
  });
}

/**
 * Build pagination object for API response
 * @param {number} totalCount - Total number of items
 * @param {number} page - Current page (1-based)
 * @param {number} pageSize - Items per page
 * @returns {{ page: number, pageSize: number, totalItems: number, totalPages: number }}
 */
export function buildPagination(totalCount, page = 1, pageSize = 10) {
  const total = Math.max(0, Number(totalCount) || 0);
  const size = Math.max(1, Math.min(100, Number(pageSize) || 10));
  const totalPages = Math.max(1, Math.ceil(total / size));
  const currentPage = Math.max(1, Math.min(Number(page) || 1, totalPages));
  return {
    page: currentPage,
    pageSize: size,
    totalItems: total,
    totalPages,
  };
}

/**
 * Build full resData for table API response
 * @param {Object} params
 * @param {Object} params.meta - { tableId, viewId?, views?, download? }
 * @param {Array} params.columnsConfig - Column config from data-tables
 * @param {Array} params.rows - Raw rows from DB
 * @param {number} params.totalCount - Total count for pagination
 * @param {number} params.page - Current page
 * @param {number} params.pageSize - Page size
 * @param {Object} params.rowOptions - Options for buildRows (linkTemplate, rowIdField)
 * @returns {Object} resData: { meta, columns, rows, pagination }
 */
export function buildTableResData({
  meta,
  columnsConfig,
  rows,
  totalCount,
  page = 1,
  pageSize = 10,
  rowOptions = {},
}) {
  const columns = buildColumns(columnsConfig);
  const builtRows = buildRows(rows, columnsConfig, rowOptions);
  const pagination = buildPagination(totalCount, page, pageSize);

  return {
    meta: meta || { tableId: "default", viewId: "default", views: [], download: { enabled: false, formats: [] } },
    columns,
    rows: builtRows,
    pagination,
  };
}
