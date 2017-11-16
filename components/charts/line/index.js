import { Component } from 'react'
import { Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import Preview from './Preview'
import Code from './Code'

const dataJsonDefault = `[{"name":"Page A","uv":4000,"pv":2400,"amt":2400},{"name":"Page B","uv":3000,"pv":1398,"amt":2210},{"name":"Page C","uv":2000,"pv":9800,"amt":2290},{"name":"Page D","uv":2780,"pv":3908,"amt":2000},{"name":"Page E","uv":1890,"pv":4800,"amt":2181},{"name":"Page F","uv":2390,"pv":3800,"amt":2500},{"name":"Page G","uv":3490,"pv":4300,"amt":2100}]`

class LineEditor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 600,
            height: 300,
            margin: { top: 5, right: 30, left: 20, bottom: 5 },
            dataJSON: dataJsonDefault,
            xAxis: { dataKey: "name" },
            lines: [
                {
                    dataKey: "pv",
                    stroke: "#8884d8",
                    type: 'monotone',
                },
                {
                    dataKey: "uv",
                    stroke: "#82ca9d",
                }
            ],
            data: JSON.parse(dataJsonDefault),
            dataParseError: false,
        }
    }
    render() {
        const { width, height, margin, data, xAxis, lines, dataJSON, dataParseError } = this.state
        return (<Grid>
            <Row>
                <Col sm={8}>
                    <Form inline>
                        <FormGroup>
                            <ControlLabel>width:</ControlLabel>
                            <FormControl value={width} type="number" placeholder="width" onChange={(e) => this.setState({ width: parseInt(e.target.value) })} />
                        </FormGroup>
                        {' '}
                        <FormGroup>
                            <ControlLabel>height</ControlLabel>
                            <FormControl value={height} type="number" placeholder="height" onChange={(e) => this.setState({ height: parseInt(e.target.value) })} />
                        </FormGroup>
                    </Form>
                    <hr />
                    <Form inline>
                        <FormGroup>
                            <ControlLabel>XAxis:</ControlLabel>
                            <FormControl value={xAxis && xAxis.dataKey} placeholder="XAxis" onChange={(e) => {
                                this.setState({
                                    xAxis: { dataKey: e.target.value },
                                })
                            }} />
                        </FormGroup>
                    </Form>
                    <hr />
                    <Preview {...{ width, height, margin, data, xAxis, lines }} />
                </Col>
                <Col sm={4}>
                    <Form >
                        <FormGroup>
                            <ControlLabel>json:</ControlLabel>
                            <textarea
                                rows="10"
                                placeholder="width"
                                value={dataJSON}
                                className={dataParseError ? 'danger form-control' : 'form-control'}
                                onChange={(e) => {
                                    try {
                                        const parsedData = JSON.parse(e.target.value)
                                        this.setState({
                                            dataJSON: e.target.value,
                                            dataParseError: false,
                                            data: parsedData,
                                        })
                                    } catch (ex) {
                                        this.setState({
                                            dataJSON: e.target.value,
                                            dataParseError: true,
                                        })
                                    }
                                }} />
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                    <Code {...{ width, height, margin, data, xAxis, lines }} /></Col>
            </Row>
        </Grid>)
    }
}

export default LineEditor