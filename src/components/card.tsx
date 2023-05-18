import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import TitleText from './titleText';
import { types } from '../helper';

export default function countryCard(props: types.CountryObject) {
  return (
    <Card sx={{ width: 250 }} variant="outlined">
      <CardActionArea>
        <CardContent>
          <Typography sx={{ fontSize: 16, fontWeight: 800, mb: '15px' }}>
            {props.emoji} {props.name} ({props.code})
          </Typography>
          <TitleText title="Native" text={props.native} />
          <TitleText title="Capital" text={props.capital} />
          <TitleText title="Continent" text={props.continent.name} />
          <TitleText title="Currency" text={props.currency} />
          <TitleText title="Phone" text={props.phone} />
          <TitleText title="Languages" />
          <ul>
            {props.languages.map((item) => (
              <li key={item.name}>
                {' '}
                <Typography variant="subtitle2">{item.name}</Typography>
              </li>
            ))}
          </ul>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
