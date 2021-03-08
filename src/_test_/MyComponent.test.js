import React from 'react'
import { shallow } from "enzyme"
import MyComponent from "../components/MyComponent"

describe('MyComponent', () => {
  it('Should show text', ()=> {
    const wrapper = shallow(<MyComponent />);
    const text = wrapper.find('div p');
    expect(text.text()).toEqual('Lorem ipsum dolor sit')
  })
})