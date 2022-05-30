import {
  
  ComposedChart,
  
  Legend,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import css from './weatherChart.module.css';

const HourlyChart = ({ hourlyWeather, data }) => {
  return (
    <div className={css.hourlyChartContainer}>
      <p>
        <i>
          <b>fells</b>
        </i>{' '}
        24h Hours Forecast
      </p>
      <div className={css.desktopHourChart}>
        <ResponsiveContainer width="100%" height="100%" aspect={2.5}>
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF3F00" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="1" vertical="" horizontal="true" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="feelsLike"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />

            {/* <Area
            type="monotone"
            dataKey="feelsLike"
            stroke="#FF3F00"
            fill="#8884d8"
          /> */}
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className={css.mobileHourChart}>
        <ResponsiveContainer width="100%" height="100%" aspect={1}>
          <ComposedChart
            layout="vertical"
            width={500}
            height={500}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid
              stroke="black"
              strokeDasharray="1"
              vertical="true"
              horizontal=""
            />
            <XAxis type="number" />
            <YAxis dataKey="hour" type="category" />
            <Tooltip />
            <Legend />
            <Area dataKey="feelsLike" fill="#8884d8" stroke="#ff7300" />
            {/* <Bar dataKey="feelsLike" barSize={20} fill="#413ea0" /> */}
            {/* <Line dataKey="feelsLike" stroke="#ff7300" /> */}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HourlyChart;
