## 1.	const elem = (
				<div>
					<h2 className='text'>Текст: {text}</h2>
					<input type='text'/>
					<label htmlFor=""></label>
					<button></button>
				</div>
			);

## 2.  const elem = React.createElement('h2', {className: 'greetings'}, 'Hello World!');

## 3. function Btn() {
				const text = 'Log in';
				const logged = true;

				return <button>{logged ? 'Enter' : text}</button>;
			}

## 4.   "eslintConfig": {
						"extends": [
							"react-app",
							"react-app/jest"
						]
					},

## 5. 
	When we use common js function(component)
				const Field = () => {
					const holder = 'Enter here';
					const styledField = {
						width: '300px'
					};
					return <input 
							placeholder={holder}
							type='text' 
							style={styledField}/>
				};
	When we use classes
		import {Component} from 'react';		
				class FieldC extends Component {
					render() {
						const holder = 'Enter here';
						const styledField = {
							width: '300px'
						};
						
						return <input
										placeholder={holder}
										type='text'
										style={styledField} />
					}
				};
		
