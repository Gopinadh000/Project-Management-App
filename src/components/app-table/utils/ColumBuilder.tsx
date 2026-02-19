import { Link } from "react-router-dom";

const buildColumns = (columnsData: any) => {
  if (!columnsData) return [];

  return columnsData.map((col: any) => ({
    accessorKey: col.fieldName,
    header: col.displayName,
    size: col?.size || 200,
    minSize: col?.minSize || 80,
    maxSize: col?.maxSize || 1000,
    enableResizing: true,
    enableColumnFilter: false,

    enableSorting: !!col.sortable || false,

    Header: ({ column }: any) => {
      const isSorted = column.getIsSorted();

      return (
        <div className="flex items-center gap-1 font-semibold text-sm">
          <span>{column.columnDef.header}</span>
          {isSorted === "asc" && "↑"}
          {isSorted === "desc" && "↓"}
        </div>
      );
    },
    Cell: ({ cell }: any) => {
      const fieldName = cell.column.id;
      const row = cell.row.original;
      const cellData = row[fieldName];
      if (!cellData) return "";
      const display = cellData.displayValue ?? cellData.value ?? "";
      const badge = cellData.badge;
      const link = cellData.link;
      if (badge) {
        return (
          <span
            className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium"
            style={{
              backgroundColor: `var(--app-${badge.color}-100, #e5e7eb)`,
              color: `var(--app-${badge.color}-700, #374151)`,
            }}
          >
            {badge.text}
          </span>
        );
      }
      if (link?.url) {
        return (
          <Link
            to={link.url}
            className="text-app-primary-600 hover:underline"
            title={link.tooltip}
          >
            {display}
          </Link>
          // <a href={link.url} >
          //   {display}
          // </a>
        );
      }
      return display;
    },
  }));
};

export default buildColumns;
