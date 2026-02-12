import React, { createContext, useCallback, useState } from "react";

export type TableReloadContextValue = {
  reRenderKey: number;
  refreshTable: () => void;
};

export const TableReloadContext = createContext<TableReloadContextValue | null>(null);

type TableReloadProviderProps = {
  children: React.ReactNode;
};

/**
 * Provider that holds the table reload key. Wrap your app (or layout that contains tables and create forms).
 * When refreshTable() is called (e.g. after creating a project, user, or task), reRenderKey increments
 * and any table with reRenderKey in its key or effect deps will refetch.
 */
export function TableReloadProvider({ children }: TableReloadProviderProps) {
  const [reRenderKey, setReRenderKey] = useState(0);
  const refreshTable = useCallback(() => {
    setReRenderKey((k) => k + 1);
  }, []);

  const value: TableReloadContextValue = {
    reRenderKey,
    refreshTable,
  };

  return (
    <TableReloadContext.Provider value={value}>
      {children}
    </TableReloadContext.Provider>
  );
}
