
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
            <Switch checked={true} size='small' />
            <Switch checked={true} />
        </div>
    )
}
function changeHandle () {
    alert('点我点我点我~');
}

function demo3 () {
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
