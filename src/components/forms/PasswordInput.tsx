import { useState, ComponentPropsWithoutRef } from 'react';
import {
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/material/styles';
import styleTokens from '../../designTokens.module.scss';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  placeholder: string;
  name: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string;
  error?: string;
}

const StyledPasswordInput = styled(FormControl)(({ error }) => ({
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    borderRadius: styleTokens.borderRadiusS + 'px',
    backgroundColor: 'transparent',
    border: '1px solid',
    borderColor: error ? styleTokens.primary500 : styleTokens.stroke400,
    transition: 'none',
    '&::before': {
      border: 0,
    },
    '&::after': {
      border: 0,
    },
    '&:hover': {
      backgroundColor: 'transparent',
      '&::before': {
        border: 0,
      },
      '&::after': {
        borderBottom: 0,
      },
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      '&::after': {
        borderBottom: 0,
      },
    },
  },
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
}));

function PasswordInput({
  label,
  handleChange,
  placeholder,
  name,
  value,
  error,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <StyledPasswordInput variant='filled' error={!!error}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <FilledInput
        autoComplete='off'
        type={showPassword ? 'text' : 'password'}
        onChange={handleChange}
        placeholder={placeholder}
        name={name}
        value={value}
        error={!!error}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={() => setShowPassword((prev) => !prev)}
              edge='end'
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText>{error}</FormHelperText>
    </StyledPasswordInput>
  );
}

export default PasswordInput;
