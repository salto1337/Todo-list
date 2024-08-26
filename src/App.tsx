import { useState } from "react";
import { Background } from "./components/Background";
import { Form } from "./components/Form";
import { TodoItem } from "./components/TodoItem";

export function App() {
	const [todos, setTodos] = useState([
		{ name: "Watch tv", done: false, id: 1 },
		{ name: "Buy some food", done: false, id: 2 },
	]);

	function addItem(newTodoName: string) {
		setTodos((prevTodos) => [
			...prevTodos,
			{ name: newTodoName, done: false, id: Math.random() },
		]);
	}

	function deleteItem(id: number) {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
	}

	function finishItem(id: number) {
		setTodos((prevTodos) =>
			prevTodos.map((todo) => {
				if (todo.id !== id) {
					return todo;
				}

				return {
					...todo,
					done: true,
				};
			})
		);
	}

	return (
		<>
			<Background />

			<div className="flex justify-center items-center h-screen">
				<div className="w-[400px] bg-white border border-black/20 rounded-md p-5">
					<header>
						<h1 className="font-bold text-2xl">Todo List</h1>
					</header>
					<Form onFormSubmit={(newTodoName: string) => addItem(newTodoName)} />
					<ul>
						{todos.map(({ id, name, done }) => {
							return (
								<TodoItem
									key={id}
									name={name}
									done={done}
									onDeleteItem={() => deleteItem(id)}
									onDoneItem={() => finishItem(id)}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
}

export default App;
