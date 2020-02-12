import React, {useReducer, useState} from 'react';

const App4 = () => {
	const [{todos, todoCount}, dispatch] = useReducer(reducer, { 
		todos: [], 
		todoCount: 0
	});
	const [text, setText] = useState();

	return (
		<div>
			<form onSubmit={e => {
				e.preventDefault();
				dispatch({type: 'ADD_TODO', text});
				setText('');
			}}>
				<input 
					value={text}
					onChange={e => setText(e.target.value)}
				/>
				<button>Add</button>
			</form>
			<div>
				<p>Total Todos : {todoCount}</p>
			</div>
			{/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}
			{todos.map((todo, index) => {
				return (
					<div 
						key={index}
						className={`todo ${todo.completed ? 'completed-todo' : ''}`}
						onClick={() => dispatch({type: 'TOGGLE_TODO', index})}
					>{todo.text}</div>
				)
			})}
		</div>
	);
}

export default App4;

const reducer = (state, action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return {
				...state,
				todos: [
					...state.todos,
					{
						text: action.text,
						completed: false
					}
				],
				todoCount: state.todoCount + 1
			};
		case 'TOGGLE_TODO':
			return {
				...state,
				todos: state.todos.map((t, index) => {
					return index === action.index 
						? {...t, completed : !t.completed}
						: t
				})
			}
		default:
			return state;
	};
}