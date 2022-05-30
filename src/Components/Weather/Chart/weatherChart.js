import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import css from './weatherChart.module.css';

const WeatherChart = ({ weather }) => {
  const weatherChartInfo = weather.map((day) => {
    const max = +day.tempMax.slice(0, 2).trim();
    const min = +day.tempMin.slice(0, 2).trim();
    return { day: day.weekday, max, min };
  });

  return (
    <div className={css.chartContainer}>
      <p>8 Days Weather Forecast - Celsius</p>
      <div className={css.desktopWeekChart}>
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart
            width={500}
            height={300}
            data={weatherChartInfo}
            margin={{
              top: 5,
              right: 30,
              // left: 20,
              // bottom: 5,
            }}
          >
            <CartesianGrid vertical="" horizontal="true" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: '#F0FFFF',
                borderRadius: '1rem',
                border: '2px solid #5230EA',
                padding: '0.2rem 1rem',
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="max"
              stroke="#FF3F00"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />

            <Line
              type="monotone"
              dataKey="min"
              stroke="#0000A6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className={css.mobileWeekChart}>
        <ResponsiveContainer width="100%" height="100%" aspect={1}>
          <LineChart
            layout="vertical"
            width={500}
            height={300}
            data={weatherChartInfo}
            margin={{
              top: 20,
              right: 15,
              left: 30,
              // bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="1" />
            <XAxis type="number" />
            <YAxis dataKey="day" type="category" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#F0FFFF',
                borderRadius: '1rem',
                border: '2px solid #5230EA',
                padding: '0.2rem 1rem',
              }}
            />
            <Legend />
            <Line dataKey="max" stroke="#FF3F00" />
            <Line dataKey="min" stroke="#0000A6" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeatherChart;
