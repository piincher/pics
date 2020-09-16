import React from 'react';

class SearchBar extends React.Component {
	constructor() {
		super();
		this.state = {
			term: ''
		};
	}

	render() {
		return (
			<div className="ui segment">
				<form className="ui form">
					<div className="field">
						<label>search Image</label>
						<input
							type="input"
							value={this.state.term}
							onChange={(event) => {
								this.setState({ term: event.target.value });
							}}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
