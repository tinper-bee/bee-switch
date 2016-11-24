
import Switch from '../src';
import ReactDOM from 'react-dom';

function demo1 () {
    return (
        <Switch />
    )
}

function demo2 () {
    return (
        <div>
            <Switch checked={true} size='sm' checkedChildren={'开'} unCheckedChildren={'关'} />
            <Switch checked={true} size="lg" checkedChildren={'开'} unCheckedChildren={'关'}/>
        </div>
    )
}
function demo3 () {
    return (
        <div>
            <Switch colors="primary" checked={true} />
            <Switch colors="success" checked={true} />
            <Switch colors="info" checked={true} />
            <Switch colors="danger" checked={true} />
            <Switch colors="dark" checked={true} />
        </div>
    )
}
function changeHandle () {
    alert('点我点我点我~');
}

function demo4 () {
    return (
        <div>
            <Switch onChangeHandler = {changeHandle} checkedChildren={'开'} unCheckedChildren={'关'} />
            <Switch checked={true} onChangeHandler = {changeHandle} checkedChildren={'on'} unCheckedChildren={'off'} />
        </div>
    )
}


ReactDOM.render(demo1(), document.getElementById('beeSwitchDemo1'));
ReactDOM.render(demo2(), document.getElementById('beeSwitchDemo2'));
ReactDOM.render(demo3(), document.getElementById('beeSwitchDemo3'));
ReactDOM.render(demo4(), document.getElementById('beeSwitchDemo4'));
