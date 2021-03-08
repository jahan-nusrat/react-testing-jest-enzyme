import { shallow } from 'enzyme';
import React from 'react'
import Ticket from '../components/Ticket';

describe('Ticket Test', () => {
  it('Before increment', () => {
    const wrapper = shallow(<Ticket />)
    const h2 = wrapper.find('h2.total')

    expect(h2.text()).toEqual('Count: 0')
  });

  it('Should increment when button is clicked', () => {
    const wrapper = shallow(<Ticket />)
    const button = wrapper.find('button.increment')
    button.simulate('click')
    const h2 = wrapper.find('h2.total')

    expect(h2.text()).toEqual('Count: 1')
  });

  it('Should reduce when button is clicked', () => {
    const wrapper = shallow(<Ticket />)
    const button = wrapper.find('button.decrement')
    button.simulate('click')
    const h2 = wrapper.find('h2.total')

    expect(h2.text()).toEqual('Count: -1')
  });

  it('Should render ticket name in title', () => {
    const wrapper = shallow(<Ticket name='Hello world' />)
    const title = wrapper.find('h2.title').text()
    
    expect(title).toBe("Hello world")
  })
})