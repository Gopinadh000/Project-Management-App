import { useState } from 'react';
import { Box, IconButton, TextField, Typography } from '@mui/material';
import { Search, Close, ArrowUpward, ArrowDownward } from '@mui/icons-material';
import { GridColumnHeaderParams } from '@mui/x-data-grid';

interface SearchableHeaderProps {
  params: GridColumnHeaderParams;
  searchEnabled: boolean;
  sortEnabled: boolean;
  onSearch?: (field: string, value: string) => void;
  onSort?: (field: string, order: 'asc' | 'desc') => void;
  currentSortField?: string;
  currentSortOrder?: 'asc' | 'desc';
}

/**
 * Custom Searchable Header Component
 * Shows search icon when search is enabled
 * Opens inline input field when clicked
 */
export const SearchableHeader = ({
  params,
  searchEnabled,
  sortEnabled,
  onSearch,
  onSort,
  currentSortField,
  currentSortOrder,
}: SearchableHeaderProps) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  
  const field = params.field;
  const isCurrentlySorted = currentSortField === field;
  const sortOrder = isCurrentlySorted ? currentSortOrder : undefined;

  const handleSearchClick = () => {
    setIsSearching(true);
  };

  const handleSearchClose = () => {
    setIsSearching(false);
    setSearchValue('');
    if (onSearch) {
      onSearch(field, '');
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    if (onSearch) {
      onSearch(field, value);
    }
  };

  const handleSortClick = () => {
    if (!sortEnabled || !onSort) return;
    
    let newOrder: 'asc' | 'desc' = 'asc';
    
    if (isCurrentlySorted) {
      newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    }
    
    onSort(field, newOrder);
  };

  if (isSearching) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          gap: 0.5,
        }}
      >
        <TextField
          autoFocus
          size="small"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder={`Search ${params.colDef.headerName}`}
          variant="standard"
          sx={{
            flex: 1,
            '& .MuiInput-root': {
              fontSize: '14px',
            },
          }}
        />
        <IconButton size="small" onClick={handleSearchClose}>
          <Close fontSize="small" />
        </IconButton>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        gap: 0.5,
      }}
    >
      <Typography
        variant="body2"
        fontWeight={600}
        sx={{
          flex: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {params.colDef.headerName}
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 0.5 }}>
        {/* Sort Icon */}
        {sortEnabled && (
          <IconButton
            size="small"
            onClick={handleSortClick}
            sx={{
              padding: '2px',
              opacity: isCurrentlySorted ? 1 : 0.5,
              '&:hover': {
                opacity: 1,
              },
            }}
          >
            {sortOrder === 'desc' ? (
              <ArrowDownward fontSize="small" sx={{ fontSize: 16 }} />
            ) : (
              <ArrowUpward fontSize="small" sx={{ fontSize: 16 }} />
            )}
          </IconButton>
        )}
        
        {/* Search Icon */}
        {searchEnabled && (
          <IconButton
            size="small"
            onClick={handleSearchClick}
            sx={{
              padding: '2px',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            <Search fontSize="small" sx={{ fontSize: 16 }} />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default SearchableHeader;


