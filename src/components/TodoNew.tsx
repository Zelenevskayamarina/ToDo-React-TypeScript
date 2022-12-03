import { BiPlus } from 'react-icons/bi';
import DatePicker from 'react-date-picker';
import { TASK, DEADLINE } from '../utils/constants';
import { ChangeEvent } from 'react';

interface Props {
	task: string;
	deadline: Date;
	setDeadline: React.Dispatch<React.SetStateAction<Date>>;
	handleChange(event: ChangeEvent<HTMLInputElement>): void;
	addTask(): void;
}

const TodoNew = ({ task, deadline, setDeadline, addTask, handleChange }: Props) => {
	return (
		<div className='todo'>
			<div className='todo__container'>
				<input className='todo__input'
					type='text'
					placeholder='Add task..'
					name={TASK}
					value={task}
					onChange={handleChange}
					onKeyPress={(event) => {
						if (event.key === 'Enter') {
							addTask();
						}
					}}
				/>
				<div className='todo__deadline'>
					<DatePicker
						name={DEADLINE}
						value={deadline}
						onChange={setDeadline}
						clearIcon={null}
					/>
					<button className='todo__btn' onClick={addTask}>
						<BiPlus />
					</button>
				</div>
			</div>
		</div>
	);
};

export default TodoNew;