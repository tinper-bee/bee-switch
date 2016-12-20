/**
 *
 * @title 不同大小的开关
 * @description 通过`size`属性控制开关的大小
 *
 */

class Demo2 extends Component {

    render () {
        return (
            <Row>
                <Col sm={2}>
                    <Switch checked={true} size='sm' />
                </Col>
                <Col sm={2}>
                    <Switch checked={true} />
                </Col>
                <Col sm={2}>
                    <Switch checked={true} size='lg' />
                </Col>
            </Row>
        )
    }
}
