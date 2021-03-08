import { shallow } from 'enzyme'
import React from 'react'
import Footer from '../components/Footer'

it('Should render phone number', () => {
  const wrapper = shallow(<Footer />)
  const phone = wrapper.find('div span')
  expect(phone.hasClass('phone')).toBe(true)
})