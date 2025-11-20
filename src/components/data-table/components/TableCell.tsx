import { GridRenderCellParams } from '@mui/x-data-grid';
import { Box, Tooltip, Typography } from '@mui/material';
import { cellStyles } from '../styles/tableStyles';

interface TableCellProps {
  params: GridRenderCellParams;
  customRenderer?: (params: GridRenderCellParams) => React.ReactNode;
  enableTooltip?: boolean;
}

/**
 * Custom Table Cell Component
 * Renders individual cell content with optional tooltip and custom rendering
 */
export const TableCell = ({ 
  params, 
  customRenderer, 
  enableTooltip = true 
}: TableCellProps) => {
  const cellContent = customRenderer ? (
    customRenderer(params)
  ) : (
    <Typography variant="body2" noWrap>
      {params.value}
    </Typography>
  );

  if (enableTooltip) {
    return (
      <Tooltip title={params.value || ''} placement="top">
        <Box sx={cellStyles}>{cellContent}</Box>
      </Tooltip>
    );
  }

  return <Box sx={cellStyles}>{cellContent}</Box>;
};

export default TableCell;

