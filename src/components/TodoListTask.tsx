import { ITask } from '../types/Interfaces';
import { MdDelete } from 'react-icons/md';

interface Props {
	keyValue: number;
	task: ITask;
	deleteTask(keyValue: number): void;
}

const getFormattedDate = (date: Date): string => {
	let year = date.getFullYear();
	let month = (date.getMonth()).toString().padStart(2, '0');
	let day = date.getDate().toString().padStart(2, '0');
	return `${day}.${month}.${year}`;
};

const TodoListTask = ({ task, deleteTask, keyValue }: Props) => {
	return (
		<div className='todoList__task'>
			<span className='todoList__task-title'>{task.task}</span>

			<div className='todoList__info'>
				<span className='todoList__info-deadline'>{getFormattedDate(task.deadline)}</span>				
				<div
					className='todoList__btn'
					onClick={() => {
						deleteTask(keyValue);
					}}
				>
					<MdDelete />
				</div>
			</div>
		</div>
	);
};

export default TodoListTask;
