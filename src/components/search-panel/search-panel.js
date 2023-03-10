import { Component } from 'react';

import './search-panel.scss'

class SearchPanel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			term: ''
		}
	}

	onLocalUpdateSearch = (e) => {
		const term = e.target.value;
		this.setState({term}); //term: term
		this.props.onUpdateSearch(term);
	};

	render() {
		return (
			<input
				type="text"
				className='form-control search0-input'
				placeholder='Знайти робітника' 
				value={this.state.term}
				onChange={this.onLocalUpdateSearch}/>
		)
	}
};

export default SearchPanel;