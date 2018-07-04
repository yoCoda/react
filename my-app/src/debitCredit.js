import React from  'react';
import './debitCredit.css';

//*************************************************************
// this component Displays
// 1) Button: and clicking on button increments the counter, counter is saved in state.buttonCount.
// 2) text-Box (Form/input) :  What you type is saved in the state as state.text
//*************************************************************

class DebitCredit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {amount: 0, result:''};
		this.handleText = this.handleText.bind(this);
	}

	// ES6 fat function dont need to be bound. It somehow already has "this" context
	buttonClick = (e) => {
		this.setState( {
										result: this.props.action(this.state.amount)
									});
	}

	// non-Fat-function needs to be bound to this, or wont have "this" context, see constructor.
	handleText = function(e) {
		this.setState({amount: e.target.value});
	}

	render() {
		return(
			<div className="myComponent">
				<div>
		 			{this.props.name} -- Enter the amount and press the button
				</div>
				<div>
					<form>
						<input type="text" onChange={this.handleText}>
						</input>
					</form>
				</div>
				<div>
					<button onClick={this.buttonClick}>
						{this.props.name}
					</button>
				</div>
				<div>
					Result:[{this.state.result}]
				</div>
			</div>
		);
	}
}
export default DebitCredit;
