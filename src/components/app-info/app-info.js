import './app-info.scss'

const AppInfo = ({ employees, increased }) =>  {
		return (
			<div className="app-info">
				<h1>Облік робітників у компанії Gt Industries</h1>
				<h2>Загальне число робітників: {employees}</h2>
				<h2>Премію отримають: {increased}</h2>
			</div>
		)
};

export default AppInfo;