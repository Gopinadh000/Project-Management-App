import { SxProps, Theme } from '@mui/material';

/**
 * Centralized styles for DataTable component with theme support
 */
export const tableStyles: SxProps<Theme> = {
  border: '1px solid',
  borderColor: 'var(--app-secondary-200)',
  fontSize: '14px',
  backgroundColor: 'var(--app-bg-primary)',
  color: 'var(--app-text-primary)',

  // Container
  '& .MuiDataGrid-container--top': {
    width: 'fit-content',
  },

  // Column Headers
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: 'var(--app-bg-secondary)',
    borderBottom: '1px solid',
    borderColor: 'var(--app-secondary-200)',
    fontSize: '14px',
    fontWeight: 600,
    minHeight: '56px !important',
    maxHeight: '56px !important',
    color: 'var(--app-text-primary)',
  },

  '& .MuiDataGrid-columnHeader': {
    backgroundColor: 'var(--app-bg-secondary)',
    padding: '12px 16px',
    color: 'var(--app-text-primary)',
    '&:focus': {
      outline: 'none',
    },
    '&:focus-within': {
      outline: 'none',
    },
  },

  '& .MuiDataGrid-columnHeaderTitle': {
    fontWeight: 600,
    fontSize: '14px',
    color: 'var(--app-text-primary)',
  },

  // Icon Visibility and Colors
  '& .MuiDataGrid-iconButtonContainer': {
    visibility: 'visible !important',
    width: 'auto',
    marginLeft: '4px',
  },

  '& .MuiDataGrid-sortIcon': {
    opacity: '1 !important',
    visibility: 'visible !important',
    color: 'var(--app-primary-500)',
  },

  '& .MuiDataGrid-menuIcon': {
    visibility: 'visible !important',
    opacity: '1 !important',
    color: 'var(--app-text-secondary)',
  },

  '& .MuiDataGrid-columnHeader .MuiDataGrid-menuIconButton': {
    opacity: '1 !important',
    visibility: 'visible !important',
    color: 'var(--app-text-secondary)',
    '&:hover': {
      backgroundColor: 'var(--app-primary-100)',
      color: 'var(--app-primary-500)',
    },
  },

  // Footer
  '& .MuiDataGrid-footerContainer': {
    backgroundColor: 'var(--app-bg-secondary)',
    borderTop: '1px solid',
    borderColor: 'var(--app-secondary-200)',
    fontSize: '14px',
    color: 'var(--app-text-primary)',
  },

  // Cells
  '& .MuiDataGrid-cell': {
    borderBottom: '1px solid',
    borderColor: 'var(--app-secondary-200)',
    fontSize: '14px',
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
    color: 'var(--app-text-primary)',
    '&:focus': {
      outline: 'none',
    },
    '&:focus-within': {
      outline: 'none',
    },
  },

  // Rows
  '& .MuiDataGrid-row': {
    backgroundColor: 'var(--app-bg-primary)',
    '&:hover': {
      backgroundColor: 'var(--app-primary-100)',
    },
    '&.Mui-selected': {
      backgroundColor: 'var(--app-primary-100)',
      '&:hover': {
        backgroundColor: 'var(--app-primary-100)',
      },
    },
  },

  // Checkbox
  '& .MuiCheckbox-root': {
    color: 'var(--app-text-secondary)',
    '&.Mui-checked': {
      color: 'var(--app-primary-500)',
    },
  },
};

/**
 * Header-specific styles
 */
export const headerStyles = {
  backgroundColor: 'var(--app-bg-secondary)',
  fontWeight: 600,
  fontSize: '14px',
  padding: '12px 16px',
  color: 'var(--app-text-primary)',
  borderBottom: '1px solid var(--app-secondary-200)',
};

/**
 * Cell-specific styles
 */
export const cellStyles = {
  fontSize: '14px',
  padding: '12px 16px',
  color: 'var(--app-text-primary)',
  borderBottom: '1px solid var(--app-secondary-200)',
};

/**
 * Footer-specific styles
 */
export const footerStyles = {
  backgroundColor: 'var(--app-bg-secondary)',
  fontSize: '14px',
  color: 'var(--app-text-primary)',
  borderTop: '1px solid var(--app-secondary-200)',
};

