import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { SearchInputProps } from './types';

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onClear,
  placeholder = 'Search...',
  ...restTextFieldProps
}) => {
  return (
    <TextField
      variant="outlined"
      size="small" // Common default for search inputs
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="action" />
          </InputAdornment>
        ),
        endAdornment: value && onClear ? (
          <InputAdornment position="end">
            <IconButton
              aria-label="clear search"
              onClick={onClear}
              edge="end"
              size="small"
            >
              <ClearIcon fontSize="small" color="action" />
            </IconButton>
          </InputAdornment>
        ) : null,
      }}
      {...restTextFieldProps}
    />
  );
};

export default SearchInput; 