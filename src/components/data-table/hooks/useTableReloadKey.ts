import { useContext } from "react";
import { TableReloadContext } from "./tableReloadContext";

/**
 * Hook to get the current table reload key and a function to trigger a table refetch.
 * Use after create/update/delete of projects, users, or tasks so the table reloads.
 *
 * @example
 * const { reRenderKey, refreshTable } = useTableReloadKey();
 * return (
 *   <>
 *     <AppDataTable reRenderKey={reRenderKey} ... />
 *     <CreateUserForm onSuccess={refreshTable} />
 *   </>
 * );
 */
export function useTableReloadKey() {
  const ctx = useContext(TableReloadContext);
  if (ctx == null) {
    throw new Error("useTableReloadKey must be used within TableReloadProvider");
  }
  return ctx;
}
