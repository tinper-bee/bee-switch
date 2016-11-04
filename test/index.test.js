import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import Switch from '../src/index';
describe('verifiy size',function(){
	it('Switch should be exist',function(){
		let mSwitch = mount(<Switch />);
		expect(mSwitch.find('span').at(0).hasClass('bee-switch')).to.equal(true)
	})
})

describe('verifiy small',function(){
	it('Switch small should be exist',function(){
		let mSwitch = mount(<Switch size="small"/>);
		expect(mSwitch.find('span').at(0).hasClass('bee-switch-small')).to.equal(true)
	})
})

describe('verifiy font',function(){
	it('Switch small should be exist',function(){
		let mSwitch = mount(<Switch checkedChildren={'开'} unCheckedChildren={'关'}/>);
		expect(['开','关']).to.include(mSwitch.find('span').at(0).find('span').at(0).text());
	})
})

describe('verifiy changehandler',function(){
	it('switch click change type', function () {
	  let typeChange = "primary";
	  function clickEvent (event) {
	    typeChange = "accent";
	  }
	  let mSwitch = shallow(<Switch onChangeHandler ={ clickEvent } />);
	  mSwitch.find('span').at(0).simulate('click');
	  expect(typeChange == "accent").to.equal(true);
	});
})

