import { useState } from 'react';

function NewTaskForm({ onTaskFormSubmit, categories }) {
	const [text, setText] = useState("");
	const [category, setCategory] = useState("Code");

	function handleSubmit(e) {
		e.preventDefault();
		onTaskFormSubmit({ text, category });
		setText("");
		setCategory("Code");
	}

	return (
		<form className="new-task-form" onSubmit={handleSubmit}>
			<label htmlFor="task-details">
				Details
				<input
					id="task-details"
					type="text"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</label>
			<label htmlFor="task-category">
				Category
				<select
					id="task-category"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				>
					{categories.map((cat) => (
						<option key={cat} value={cat}>
							{cat}
						</option>
					))}
				</select>
			</label>
			<input type="submit" value="Add task" />
		</form>
	);
}

function Task({ text, category, onDeleteTask }) {
	function handleClick() {
		onDeleteTask(text);
	}

	return (
		<div className="task">
			<div className="label">{category}</div>
			<div className="text">{text}</div>
			<button onClick={handleClick} className="delete">
				X
			</button>
		</div>
	);
}

export default Task;
