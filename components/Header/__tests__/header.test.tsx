import React from 'react';
import {shallow}  from 'enzyme'; 
import ToJSON from 'enzyme-to-json';
import Header from '../';

describe('<Header/>', () => {
  it('renders', () => {
    const wrapper = shallow(<Header/>);
    expect(ToJSON(wrapper)).toMatchSnapshot();
  });
});