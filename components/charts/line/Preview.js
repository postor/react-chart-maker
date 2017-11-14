
import { LineChart, Bar, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'

export default ({ width, height, data, margin, xAxis, bars }) => (<LineChart
    width={width}
    height={height}
    data={data}
    margin={margin}>
    <XAxis {...xAxis} />
    <YAxis />
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
</LineChart>)