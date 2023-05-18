import { TextField } from '@mui/material';

type PropsType = {
  setFilterName: (value: string) => void;
};

export default function searchInput(props: PropsType) {
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
