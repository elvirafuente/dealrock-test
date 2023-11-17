import type { ComponentPropsWithoutRef } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import styleTokens from '../../designTokens.module.scss';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  placeholder: string;
  name: string;
  value: string;
  error?: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const StyledTextInput = styled(TextField)(({ error }) => ({
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    borderRadius: styleTokens.borderRadiusS + 'px',
    backgroundColor: 'transparent',
    border: '1px solid',
    borderColor: error ? styleTokens.primary500 : styleTokens.stroke400,
    marginBotton: '14px',
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

function TextInput({
  label,
  handleChange,
  placeholder,
  name,
  value,
  error,
}: InputProps) {
  return (
    <StyledTextInput
      variant='filled'
      label={label}
      placeholder={placeholder}
      autoComplete='off'
      onChange={handleChange}
      name={name}
      value={value}
      error={!!error}
      helperText={error}
    />
  );
}

export default TextInput;
