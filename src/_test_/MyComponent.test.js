import React from 'react'
import { shallow } from "enzyme"
import MyComponent from "../components/MyComponent"

describe('MyComponent', () => {
  it('Should show text', ()=> {
    const wrapper = shallow(<MyComponent />);
    const text = wrapper.find('div p');
    expect(text.text()).toBe('Lorem ipsum dolor sit')
  });
  it('Should hide text when button clicked', () => {
    const wrapper = shallow(<MyComponent />);
    const button = wrapper.find('button');
    button.simulate('click')
    const text = wrapper.find('div p');
    expect(text.length).toBe(0)
  })
})