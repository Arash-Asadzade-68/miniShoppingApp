import React from 'react';
import {shallow} from 'enzyme';
import ToJSON from 'enzyme-to-json'
import Foods from '../'

describe('Foods', ()=>{
  it('renders foods component',()=>{
    const wrapper = shallow(<Foods/>);
    expect(ToJSON(wrapper)).toMatchSnapshot(); 
  })
})