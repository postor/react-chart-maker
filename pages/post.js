import { Component } from 'react'
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'

class MyChart extends Component {
    constructor(props){
        super(props)
        this.state = {"width":600,"height":300,"margin":{"top":5,"right":30,"left":20,"bottom":5},"data":[{"name":"Page A","uv":4000,"pv":2400,"amt":2400},{"name":"Page B","uv":3000,"pv":1398,"amt":2210},{"name":"Page C","uv":2000,"pv":9800,"amt":2290},{"name":"Page D","uv":2780,"pv":3908,"amt":2000},{"name":"Page E","uv":1890,"pv":4800,"amt":2181},{"name":"Page F","uv":2390,"pv":3800,"amt":2500},{"name":"Page G","uv":3490,"pv":4300,"amt":2100}],"xAxis":{"dataKey":"name"},"lines":[{"dataKey":"pv","stroke":"#8884d8","type":"monotone"},{"dataKey":"uv","stroke":"#82ca9d"}]}
    }

    render(){
        const { width, height, data, margin, xAxis, lines } = this.state
        return (<LineChart
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
    }
}

export default MyChart