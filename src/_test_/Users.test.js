import React from 'react'
import { mount, shallow } from 'enzyme';
import Users from '../components/Users/Users';
import { act } from 'react-dom/test-utils';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve({
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      value: 'One Million years ago Chuck Norris slapped the world, and to this day it is still spinning'
    })
  })
})

describe('mock and fetch api test', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('loads the joke on mount', () => {
    const wrapper = mount(<Users />)
    expect(wrapper.exists).toBeTruthy()
    expect(wrapper.find('div p').text()).toBe('Loading....')
  })
})