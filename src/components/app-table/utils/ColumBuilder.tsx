

const buildColumns = (columnsData : any)=>{
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
      const fieldName = cell.column.id; // "project_name"
      const row = cell.row.original; // full row object

      return row[fieldName]?.value ?? "";
    },
  }));
}

export  default buildColumns;