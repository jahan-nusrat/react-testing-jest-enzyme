import React from 'react'
import AccountBalance from './AccountBalance';

const MyMainApp = () => {
  const accounts = {
    balance: 1500,
    savingBalance: 1328,
  }
  return (
    <div className="app container">
      <div className="section">
        <h1 className="has-text-centered title is-1">Welcome in the personal finance app!</h1>
        <AccountBalance accounts={accounts} />
      </div>
    </div>
  );
}

export default MyMainApp
