import React from 'react'
import { mount, shallow } from 'enzyme'
import MyMainApp from '../components/Account/MyMainApp'
import Notification from '../components/Account/Notification';
import AccountBalance from '../components/Account/AccountBalance';
import toJson from 'enzyme-to-json';

const userBalance = {
  balance: 1500,
  savingBalance: 1328,
}

/* Test for @rendering components without crashing */
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

/* Test for passing @props to child components */
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

/* Test for logical functionality */
describe('logical functionality', () => {
  const accountWrapper = mount(<AccountBalance accounts={userBalance} />);
  const notificationWrapper = mount(<Notification balance={userBalance.balance} />);
  accountWrapper.find('#balance-button').simulate('click')
  it('button click - update savings', () => {
    const savings = accountWrapper.find('.savings').text();
    const expectedSaving = userBalance.savingBalance + 100 + '$'
    expect(savings).toEqual(expectedSaving)
  });

  it('button click - update balance', () => {
    const balance = accountWrapper.find('.balance').text();
    const expectedBalance = userBalance.balance - 100 + '$';

    expect(balance).toEqual(expectedBalance)
  })
})

describe('snapshots testing', () => {
  it('App Snapshots', () => {
    const tree = shallow(<MyMainApp />)
    expect(toJson(tree)).toMatchSnapshot()
  });

  it('AccountBalance Snapshopts', () => {
    const tree = shallow(<AccountBalance accounts={userBalance} />)
    expect(toJson(tree)).toMatchSnapshot()
  })

  it('Notofication Snapshots', () => {
    const tree = shallow(<Notification balance={userBalance.balance} />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})