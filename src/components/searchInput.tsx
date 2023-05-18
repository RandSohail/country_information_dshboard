import { TextField } from '@mui/material';
import { types } from '../helper';

export default function searchInput(props: types.SearchInputProps) {
  const handelInput = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    props.setFilterName(event.target.value.toLocaleLowerCase());
  };
  return (
    <TextField
      label="Enter Country Name"
      size="small"
      onChange={handelInput}
      sx={{ margin: '20px 0' }}
    />
  );
}
