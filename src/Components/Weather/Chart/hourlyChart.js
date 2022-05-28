import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
const HourlyChart = ({ hourlyWeather, forecastIndexDay }) => {
  const currentDayWeather = hourlyWeather.slice(0, 24);
  const tomorrowWeather = hourlyWeather.slice(24);

  return (
    <div>
      <p>Hourly Chart New Feauture</p>
      <ResponsiveContainer width="100%" height="100%" aspect={3}>
        <AreaChart
          width={500}
          height={400}
          data={currentDayWeather}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="1" vertical="" horizontal="true" />
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="feelsLike"
            stroke="#FF3F00"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HourlyChart;
