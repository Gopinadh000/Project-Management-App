import { GridColumnHeaderParams } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import { headerStyles } from '../styles/tableStyles';

interface TableHeaderProps {
  params: GridColumnHeaderParams;
}

/**
 * Custom Table Header Component
 * Renders column headers with sorting and filtering capabilities
 */
export const TableHeader = ({ params }: TableHeaderProps) => {
  return (
    <Box sx={headerStyles}>
      <Typography variant="body2" fontWeight={600}>
        {params.colDef.headerName}
      </Typography>
    </Box>
  );
};

export default TableHeader;

