import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import styleTokens from '../../designTokens.module.scss';

const StyledCheckbox = styled(Checkbox)(() => ({
  '& .MuiSvgIcon-root': {
    color: styleTokens.stroke400,
  },
  '& .MuiCheckbox-root': {
    padding: 0,
  },
}));

export default function CheckboxInput() {
  return (
    <FormControlLabel
      value='end'
      control={<StyledCheckbox size='small' />}
      label='Recuérdame'
      labelPlacement='end'
    />
  );
}
