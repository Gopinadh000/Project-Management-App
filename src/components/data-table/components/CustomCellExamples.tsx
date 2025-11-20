import { useState } from 'react';
import { 
  Box, 
  Chip, 
  IconButton, 
  Popover, 
  Typography, 
  Tooltip,
  Badge,
  Menu,
  MenuItem
} from '@mui/material';
import { 
  MoreVert, 
  Edit, 
  Delete, 
  Visibility,
  Phone,
  LocationOn
} from '@mui/icons-material';
import { TransformedRow } from '../types';

/**
 * Example: Cell with Popover
 * Shows additional information on click
 */
export const CellWithPopover = ({ value, row }: { value: string | number; row: TransformedRow }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      <Tooltip title="Click for details">
        <Typography
          variant="body2"
          onClick={handleClick}
          sx={{
            cursor: 'pointer',
            color: 'primary.main',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          {value}
        </Typography>
      </Tooltip>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box sx={{ p: 2, minWidth: 200 }}>
          <Typography variant="subtitle2" gutterBottom>
            Details
          </Typography>
          <Typography variant="body2">Value: {value}</Typography>
          <Typography variant="body2">ID: {row.id}</Typography>
        </Box>
      </Popover>
    </Box>
  );
};

/**
 * Example: Cell with Actions Menu
 * Shows action buttons with dropdown
 */
export const CellWithActions = ({ value, row }: { value: string | number; row: TransformedRow }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAction = (action: string) => {
    console.log(`Action ${action} on row:`, row);
    handleClose();
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Typography variant="body2">{value}</Typography>
      <IconButton size="small" onClick={handleClick}>
        <MoreVert fontSize="small" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleAction('view')}>
          <Visibility fontSize="small" sx={{ mr: 1 }} /> View
        </MenuItem>
        <MenuItem onClick={() => handleAction('edit')}>
          <Edit fontSize="small" sx={{ mr: 1 }} /> Edit
        </MenuItem>
        <MenuItem onClick={() => handleAction('delete')}>
          <Delete fontSize="small" sx={{ mr: 1 }} /> Delete
        </MenuItem>
      </Menu>
    </Box>
  );
};

/**
 * Example: Cell with Status Badge
 * Shows colored badge based on value
 */
export const CellWithBadge = ({ value }: { value: string }) => {
  const getColor = (role: string) => {
    const roleColors: Record<string, 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'> = {
      'Admin': 'error',
      'Manager': 'primary',
      'Developer': 'info',
      'Designer': 'secondary',
      'Analyst': 'success',
    };
    return roleColors[role] || 'default';
  };

  return (
    <Chip
      label={value}
      color={getColor(value)}
      size="small"
      sx={{ fontWeight: 500 }}
    />
  );
};

/**
 * Example: Cell with Icon and Text
 * Shows icon alongside the value
 */
export const CellWithIcon = ({ value, field }: { value: string | number; field: string }) => {
  const getIcon = () => {
    if (field === 'phone') return <Phone fontSize="small" />;
    if (field === 'address' || field === 'city') return <LocationOn fontSize="small" />;
    return null;
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {getIcon()}
      <Typography variant="body2">{value}</Typography>
    </Box>
  );
};

/**
 * Example: Cell with Tooltip
 * Shows full text on hover
 */
export const CellWithTooltip = ({ value }: { value: string | number }) => {
  return (
    <Tooltip title={value} arrow placement="top">
      <Typography
        variant="body2"
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {value}
      </Typography>
    </Tooltip>
  );
};

/**
 * Example: Cell with Badge Count
 * Shows a badge with notification count
 */
export const CellWithBadgeCount = ({ value }: { value: string | number }) => {
  const notificationCount = Math.floor(Math.random() * 10); // Example count

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Badge badgeContent={notificationCount} color="primary">
        <Typography variant="body2">{value}</Typography>
      </Badge>
    </Box>
  );
};

/**
 * Example: Editable Cell
 * Allows inline editing
 */
export const EditableCell = ({ value, row, field }: { value: string | number; row: TransformedRow; field: string }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);

  const handleSave = () => {
    console.log(`Saving ${field} for row ${row.id}:`, editValue);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <Box sx={{ display: 'flex', gap: 0.5 }}>
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSave();
            if (e.key === 'Escape') setIsEditing(false);
          }}
          autoFocus
          style={{ width: '100%', padding: '4px' }}
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        cursor: 'pointer',
        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
      }}
      onClick={() => setIsEditing(true)}
    >
      <Typography variant="body2">{value}</Typography>
      <Edit fontSize="small" sx={{ opacity: 0.5, fontSize: 16 }} />
    </Box>
  );
};

