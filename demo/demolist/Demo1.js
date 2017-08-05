/**
 *
 * @title 默认开关
 * @description 
 *
 */

class Demo1 extends Component {
    render () {
        return (
            <div>
                <Switch />
                <Switch defaultChecked={true}/>
                <Switch checked/>
            </div>
            
        )
    }
}
