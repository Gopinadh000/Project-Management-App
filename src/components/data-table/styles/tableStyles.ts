import { SxProps, Theme } from '@mui/material';

/**
 * Centralized styles for DataTable component
 */
export const tableStyles: SxProps<Theme> = {
  border: '1px solid',
  borderColor: 'rgba(0, 0, 0, 0.12)',
  fontSize: '14px',

  // Container
  '& .MuiDataGrid-container--top': {
    width: 'fit-content',
  },

  // Column Headers
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid',
    borderColor: 'rgba(0, 0, 0, 0.12)',
    fontSize: '14px',
    fontWeight: 600,
    minHeight: '56px !important',
    maxHeight: '56px !important',
  },

  '& .MuiDataGrid-columnHeader': {
    backgroundColor: '#f5f5f5',
    padding: '12px 16px',
  },

  '& .MuiDataGrid-columnHeaderTitle': {
    fontWeight: 600,
    fontSize: '14px',
  },

  // Icon Visibility
  '& .MuiDataGrid-iconButtonContainer': {
    visibility: 'visible !important',
    width: 'auto',
    marginLeft: '4px',
  },

  '& .MuiDataGrid-sortIcon': {
    opacity: '1 !important',
    visibility: 'visible !important',
  },

  '& .MuiDataGrid-menuIcon': {
    visibility: 'visible !important',
    opacity: '1 !important',
  },

  '& .MuiDataGrid-columnHeader .MuiDataGrid-menuIconButton': {
    opacity: '1 !important',
    visibility: 'visible !important',
  },

  // Footer
  '& .MuiDataGrid-footerContainer': {
    backgroundColor: '#f5f5f5',
    borderTop: '1px solid',
    borderColor: 'rgba(0, 0, 0, 0.12)',
    fontSize: '14px',
  },

  // Cells
  '& .MuiDataGrid-cell': {
    borderBottom: '1px solid',
    borderColor: 'rgba(0, 0, 0, 0.12)',
    fontSize: '14px',
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
  },

  // Rows
  '& .MuiDataGrid-row': {
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },
};

/**
 * Header-specific styles
 */
export const headerStyles = {
  backgroundColor: '#f5f5f5',
  fontWeight: 600,
  fontSize: '14px',
  padding: '12px 16px',
};

/**
 * Cell-specific styles
 */
export const cellStyles = {
  fontSize: '14px',
  padding: '12px 16px',
};

/**
 * Footer-specific styles
 */
export const footerStyles = {
  backgroundColor: '#f5f5f5',
  fontSize: '14px',
};

