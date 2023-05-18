import { MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { constants } from '../helper';

type test = {
  filterContinent: string;
  setFilterContinent: (value: string) => void;
};
export default function selectContinent(props: test) {
  const { Continents } = constants;
  const handleChange = (event: SelectChangeEvent) => {
    props.setFilterContinent(event.target.value);
  };
  // const [, ...rest] = Continents;
  return (
    <Select value={props.filterContinent} onChange={handleChange} size="small">
      {Continents.map((continent, index) => (
        <MenuItem key={`${continent}-${index}`} value={continent}>
          {continent}
        </MenuItem>
      ))}
    </Select>
  );
}
