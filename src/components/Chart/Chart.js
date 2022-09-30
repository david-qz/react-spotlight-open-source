import { LineChart, Line, XAxis, YAxis, Legend, Tooltip, Label } from 'recharts';
import useCountriesGDP from '../../hooks/UseCountriesGDP';

const palette = ['#8884d8', '#84d888', '#d88488', '#fcb103', '#8d41d9'];

export default function GDPChart({ countries }) {
  const data = useCountriesGDP(countries);

  function trillionsUSDFormatter(value) {
    return `${(value / 1000000000000).toFixed(2)}T\xa0USD`;
  }

  return <LineChart width={600} height={600} margin={{ top: 10, right: 30, left: 65, bottom: 30 }} data={data}>
    {
      countries.map((country, i) => {
        return <Line key={country} type="monotone" dot={false} dataKey={country} stroke={palette[i % palette.length]} />;
      })
    }
    <XAxis type="number" domain={['dataMin', 'dataMax']} dataKey="date">
      <Label value="year" position="bottom" />
    </XAxis>
    <YAxis type="number" domain={[0, 'dataMax']} dataKey="USA" tickFormatter={trillionsUSDFormatter}>
      <Label value="GDP" position="left" angle={-90} offset={50} />
    </YAxis>
    <Tooltip formatter={trillionsUSDFormatter}/>
    <Legend verticalAlign="top" />
  </LineChart>;
}
