import bin from "../assets/bin.png";

interface TodoProps {
	name: string;
	done: boolean;
	onDeleteItem: () => void;
	onDoneItem: () => void;
}

export function TodoItem({ name, done, onDeleteItem, onDoneItem }: TodoProps) {
	return (
		<li className="p-3 mb-3 bg-gray rounded-md">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<input
						onChange={onDoneItem}
						checked={done}
						className="h-[16px] w-[16px]"
						type="checkbox"
					/>

					<p className={`${done ? "line-through" : ""} text-[14px]`}>{name}</p>
				</div>

				<button onClick={onDeleteItem}>
					<img className="w-5" src={bin} alt="bin" />
				</button>
			</div>
		</li>
	);
}
