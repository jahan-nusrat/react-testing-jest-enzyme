import React from 'react'
import { mount, shallow } from 'enzyme'
import MyMainApp from '../components/Account/MyMainApp'
import Notification from '../components/Account/Notification';
import AccountBalance from '../components/Account/AccountBalance';

const userBalance = {
  balance: 1500,
  savingBalance: 1328,
}

describe('rendering components', () => {
  it('renders MyMainApp components without crashing', () => {
    shallow(<MyMainApp />)
  });

  it('render MyMainApp component header without crashing', () => {
    const wrapper = shallow(<MyMainApp />);
    const header = (<h1 className="has-text-centered title is-1">Welcome in the personal finance app!</h1>);

    expect(wrapper.contains(header)).toBe(true)
  });

  it('renders Notification components without crashing', () => {
    shallow(<Notification />)
  });
})

describe('passing props', () => {
  const accountWrapper = mount(<AccountBalance accounts={userBalance} />);
  const notificationWrapper = mount(<Notification balance={userBalance.balance} />);
  it('AccountBalance component receive props', () => {
    expect(accountWrapper.props().accounts).toEqual(userBalance)
  });

  it('contains saving value', ()=> {
    const value = accountWrapper.find('.savings').text();
    const expectedValue = userBalance.savingBalance + '$';

    expect(value).toEqual(expectedValue)
  });

  it('Notification component accepts props', () => {
    expect(notificationWrapper.props().balance).toEqual(userBalance.balance)
  })
})