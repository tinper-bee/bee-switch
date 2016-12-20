/**
 *
 * @title 事件开关
 * @description 点击开关触发事件
 *
 */

class Demo3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            switch : ""
        };
        this.changeHandle = this.changeHandle.bind(this);
    }
    changeHandle(e){
		this.setState({
            switch: `${e}`
        })
	}

    render () {
        return (
            <Row>
                <Col sm={2}>
                    <Switch onChangeHandler = {this.changeHandle} checkedChildren={'开'} unCheckedChildren={'关'} />
                </Col>
                <Col sm={2}>
                    <Switch checked={true} onChangeHandler = {this.changeHandle} checkedChildren={'on'} unCheckedChildren={'off'} />
                </Col>
                <Col sm={2}>
                    <span>{ this.state.switch }</span>
                </Col>
            </Row>
        )
    }
}
