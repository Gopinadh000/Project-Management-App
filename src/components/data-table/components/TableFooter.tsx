import { Box, Typography } from '@mui/material';
import { footerStyles } from '../styles/tableStyles';

interface TableFooterProps {
  totalItems?: number;
  currentPage?: number;
  totalPages?: number;
  selectedRows?: number;
}

/**
 * Custom Table Footer Component
 * Displays pagination info and selected row count
 */
export const TableFooter = ({
  totalItems = 0,
  currentPage = 0,
  totalPages = 0,
  selectedRows = 0,
}: TableFooterProps) => {
  return (
    <Box 
      sx={{
        ...footerStyles,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 16px',
      }}
    >
      {selectedRows > 0 && (
        <Typography variant="body2">
          {selectedRows} row(s) selected
        </Typography>
      )}
      <Typography variant="body2">
        Page {currentPage + 1} of {totalPages} | Total: {totalItems} items
      </Typography>
    </Box>
  );
};

export default TableFooter;

