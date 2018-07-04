import React, { Component } from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import DebitCredit from './debitCredit.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={total:0};
    this.getTotal = this.getTotal.bind(this);
  }

  getTotal = function(){
    return(Number(this.state.total));
  }

  doDebit = (amount) => {
    this.setState({total:(Number(this.state.total) + Number(amount))});
    return "Successfully added " + amount + " to your account";
  }

  doCredit = (amount) => {
    let credit = Number(amount);
    let total = this.state.total;
    //alert("doCredit() ==> credit:" + credit + " total:" + total)
    if(credit <= total ) {
      this.setState({total: (total - credit)})
      return "Success... Amount withdrawn :" + credit + " from your account.";
    } else {
      return "Failure: Not enough in account to credit " + credit + ".";
    }
  }
  render() {
    return (
        <div>
          <div>
          Total Amount in your account  = {this.state.total}
          </div>
          <DebitCredit name="Debit/Deposit" getTotal={this.getTotal} action={this.doDebit} />
          <DebitCredit name="Credit/Withdrawal" getTotal={this.getTotal} action={this.doCredit} />
        </div>
    );
  }
}

export default App;
