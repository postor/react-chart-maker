import { LineChart, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'
const width = 600, 
  height = 300, 
  data = [{"name":"Page A","uv":4000,"pv":2400,"amt":2400},{"name":"Page B","uv":3000,"pv":1398,"amt":2210},{"name":"Page C","uv":2000,"pv":9800,"amt":2290},{"name":"Page D","uv":2780,"pv":3908,"amt":2000},{"name":"Page E","uv":1890,"pv":4800,"amt":2181},{"name":"Page F","uv":2390,"pv":3800,"amt":2500},{"name":"Page G","uv":3490,"pv":4300,"amt":2100}], 
  margin = {"top":5,"right":30,"left":20,"bottom":5}, 
  xAxis = {"dataKey":"name"}, 
  lines = [{"dataKey":"pv","stroke":"#8884d8"},{"dataKey":"uv","stroke":"#82ca9d"}]


export default ({}) => (<LineChart
    width={width}
    height={height}
    data={data}
    margin={margin}>
    <XAxis {...xAxis} />
    <YAxis />
    <Tooltip />
    <Legend />
    {lines.map((x, i) => (<Line key={i} {...x} />))}
</LineChart>)