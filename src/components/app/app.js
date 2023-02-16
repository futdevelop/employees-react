import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css'

class App extends Component{
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{ name: 'John C.', salary: 800, increase: false, id: 1 },
				{ name: 'Alex M.', salary: 3000, increase: false, id: 2 },
				{ name: 'Carl W.', salary: 5000, increase: false, id: 3 }
			]
		}
	}

	deleteItem = id => {
		this.setState(({data}) => {
			data: data.filter(item => item.id !== id)
		});
	}

	addItem = (name, salary) => {
		const newObj = {
			name,
			salary, 
			increase: false,
			id: 1
		}
		this.setState(({data}) => {
			const newArr = [...data, newObj]
			return {
				data: newArr
			}
		})
	};
	
	render() {
		const { data } = this.state;
		return (
			<div className="app">
				<AppInfo />

				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployeesList
					data={data}
					onDelete={this.deleteItem}
				/>
				<EmployeesAddForm 
					onAdd={this.addItem}
				/>
			</div>
		)
		console.log(this.state.name)
	}
}

export default App;