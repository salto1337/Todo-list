import { useState } from "react";

export function Form({
	onFormSubmit,
}: {
	onFormSubmit: (value: string) => void;
}) {
	const [inputValue, setInputValue] = useState("");
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				setInputValue("");
				if (inputValue.length > 4) {
					onFormSubmit(inputValue);
				}
			}}
			className="flex gap-2 my-5">
			<input
				className="w-[90%] bg-gray pl-3 rounded-md py-[5px]"
				type="text"
				placeholder="Add a new task"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button className="bg-primary rounded-md w-[50px] text-white text-[14px] transition-colors hover:bg-hover">
				Add
			</button>
		</form>
	);
}
