import TodoListTask from '../components/TodoListTask';
import { ITask } from '../types/Interfaces';

interface Props {
	todoList: ITask[];
	deleteTask(keyValue: number): void;	
}

const TodoList = ({ todoList, deleteTask }: Props) => {
	return (
		<div className='todoList'>
			<div className='todoList__container'>
				{todoList.map((task: ITask, key: number) => {
					return (
						<TodoListTask task={task} key={key} keyValue={key} deleteTask={deleteTask} />
					);
				})}
			</div>
		</div>
	);
};

export default TodoList;