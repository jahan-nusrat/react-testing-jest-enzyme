import React from 'react'
import { mount, shallow } from 'enzyme'
import MyComponent from '../components/MyComponent'
import Footer from '../components/Footer'
import MyMainApp from '../components/Account/MyMainApp'
import Ticket from '../components/Ticket'
import toJson from 'enzyme-to-json'

const name = 'Hello world'

describe('componenets rendering without creashing', () => {
  it('MyComponent', () => {
    shallow(<MyComponent />)
  });
  it('Footer render', () => {
    shallow(<Footer />)
  });
  it('MyMainApp', () => {
    shallow(<MyMainApp />)
  });
  it('Ticket render', () => {
    const wrapper = mount(<Ticket name={name} />)
    const title = wrapper.find('h2.title').text()
    expect(title).toEqual(name)
  })
});

describe('snapshots', () => {
  it('MyComponent snapshot', () => {
    const tree = shallow(<MyComponent />)
    expect(toJson(tree)).toMatchSnapshot()
  });

  it('Footer snapshot', () => {
    const tree = shallow(<Footer />)
    expect(toJson(tree)).toMatchSnapshot()
  });

  it('MyMainApp snapshots', () => {
    const tree = shallow(<MyMainApp />)
    expect(toJson(tree)).toMatchSnapshot()
  });

  it('Ticket snapshot', () => {
    const wrapper = shallow(<Ticket name={name} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})