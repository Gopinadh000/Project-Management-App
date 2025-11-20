/**
 * Table Builder Service (Class-based)
 * Standardized service to build table data in the required format for frontend table plugin
 */

export class TableBuilder {
    /**
     * Constructor
     * @param {Array} columnsConfig - Array of column configuration objects
     * @param {Object} options - Default options for table building
     */
    constructor(columnsConfig = [], options = {}) {
        this.columnsConfig = columnsConfig;
        this.defaultOptions = {
            downloadenable: true,
            lastPageNavigation: true,
            ...options
        };
    }

    /**
     * Builds columnsData from configuration
     * @param {Array} columnsConfig - Array of column configuration objects
     * @returns {Array} Formatted columns data
     */
    buildColumnsData(columnsConfig = null) {
        const config = columnsConfig || this.columnsConfig;
        
        return config.map((col, index) => ({
            id: col.id || index + 1,
            order: col.order || index + 1,
            fieldName: col.fieldName,
            displayName: col.displayName,
            sort: col.sort !== undefined ? col.sort : true,
            search: col.search !== undefined ? col.search : true,
            filter: col.filter !== undefined ? col.filter : false,
            type: col.type || 'string'
        }));
    }

    /**
     * Extracts value from row based on dbFieldName
     * Supports nested properties (e.g., "owner.name")
     * @param {Object} row - Raw data row
     * @param {String} dbFieldName - Database field name (can be nested)
     * @returns {*} Extracted value
     */
    extractValue(row, dbFieldName) {
        if (!dbFieldName || !row) return null;

        // Handle nested properties (e.g., "owner.name")
        if (dbFieldName.includes('.')) {
            const parts = dbFieldName.split('.');
            let value = row;
            for (const part of parts) {
                value = value?.[part];
                if (value === null || value === undefined) break;
            }
            return value;
        }

        return row[dbFieldName];
    }

    /**
     * Formats a single cell value
     * @param {*} value - Raw value
     * @param {Object} row - Complete row data
     * @param {Object} columnConfig - Column configuration
     * @returns {String} Formatted value
     */
    formatCellValue(value, row, columnConfig) {
        // Apply custom formatter if provided
        if (columnConfig.formatter && typeof columnConfig.formatter === 'function') {
            value = columnConfig.formatter(value, row);
        }

        // Default to empty string if value is null/undefined
        return value !== null && value !== undefined ? String(value) : '';
    }

    /**
     * Builds rowsData from raw data
     * @param {Array} rawData - Raw data from database
     * @param {Array} columnsConfig - Column configuration (optional, uses instance config if not provided)
     * @returns {Array} Formatted rows data
     */
    buildRowsData(rawData, columnsConfig = null) {
        const config = columnsConfig || this.columnsConfig;

        return rawData.map((row) => {
            const formattedRow = {};

            config.forEach((col) => {
                const fieldName = col.fieldName;
                const dbFieldName = col.dbFieldName || fieldName;

                // Extract value from row
                let value = this.extractValue(row, dbFieldName);

                // Format the value
                const formattedValue = this.formatCellValue(value, row, col);

                // Set in formatted row
                formattedRow[fieldName] = {
                    value: formattedValue
                };
            });

            return formattedRow;
        });
    }

    /**
     * Calculates pagination information
     * @param {Number} total - Total number of items
     * @param {Number} page - Current page number
     * @param {Number} limit - Items per page
     * @returns {Object} Pagination information
     */
    static calculatePagination(total, page = 1, limit = 20) {
        return {
            totalItemsCount: total,
            pageLimitSize: parseInt(limit),
            pages: Math.ceil(total / limit)
        };
    }

    /**
     * Builds complete table data in the standardized format
     * @param {Array} rawData - Raw data from database
     * @param {Object} paginationInfo - Pagination information (totalItemsCount, pageLimitSize, pages)
     * @param {Object} options - Additional options (downloadenable, lastPageNavigation)
     * @param {Array} columnsConfig - Column configuration (optional, uses instance config if not provided)
     * @returns {Object} Formatted table data response
     */
    build(rawData = [], paginationInfo = {}, options = {}, columnsConfig = null) {
        try {
            const config = columnsConfig || this.columnsConfig;
            const mergedOptions = { ...this.defaultOptions, ...options };

            // Build columnsData
            const columnsData = this.buildColumnsData(config);

            // Build rowsData
            const rowsData = this.buildRowsData(rawData, config);

            // Calculate pages if not provided
            const totalItems = paginationInfo.totalItemsCount || rawData.length;
            const pageLimitSize = paginationInfo.pageLimitSize || 20;
            const pages = paginationInfo.pages || Math.ceil(totalItems / pageLimitSize);

            // Build response data
            const resData = {
                columnsData,
                rowsData,
                totalItemsCount: totalItems,
                pageLimitSize,
                pages,
                downloadenable: mergedOptions.downloadenable,
                lastPageNavigation: mergedOptions.lastPageNavigation
            };

            return {
                resData,
                status: true,
                statusMsg: ""
            };

        } catch (error) {
            console.error('Error building table data:', error);
            return this.getErrorResponse(error);
        }
    }

    /**
     * Returns error response structure
     * @param {Error} error - Error object
     * @returns {Object} Error response
     */
    getErrorResponse(error) {
        return {
            resData: {
                columnsData: [],
                rowsData: [],
                totalItemsCount: 0,
                pageLimitSize: 20,
                pages: 0,
                downloadenable: false,
                lastPageNavigation: false
            },
            status: false,
            statusMsg: error?.message || "Failed to build table data"
        };
    }

    /**
     * Static method to build table data (for backward compatibility and convenience)
     * @param {Array} columnsConfig - Array of column configuration objects
     * @param {Array} rawData - Raw data from database
     * @param {Object} paginationInfo - Pagination information
     * @param {Object} options - Additional options
     * @returns {Object} Formatted table data response
     */
    static buildTableData(columnsConfig, rawData, paginationInfo = {}, options = {}) {
        const builder = new TableBuilder(columnsConfig, options);
        return builder.build(rawData, paginationInfo, options, columnsConfig);
    }
}

// Export static helper for backward compatibility
export const calculatePagination = TableBuilder.calculatePagination;

// Export convenience function for backward compatibility
export const buildTableData = TableBuilder.buildTableData;
