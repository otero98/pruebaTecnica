import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { useTodoStore } from '../../hooks/useTodoStore';
import { useEffect, useState } from 'react';


export const TodoView = () => {

	const { startUpdateTodo, startNewTodo, startCleanActive, startDeleteTodo } = useTodoStore();

	const { active: todo, isLoadingTodos } = useSelector(state => state.todo);

	const { description, title, onInputChange, onResetForm } = useForm(todo);

	const [isNewTodo, setIsNewTodo] = useState(true);

	const [checked, setChecked] = useState(false);

	useEffect(() => {
		setIsNewTodo(todo.title == '' && todo.description == '');
		setChecked(todo.status == 'Done');
	}, [todo])

	const onSaveTodo = (e) => {
		e.preventDefault();
		const status = (checked ? 'Done' : 'Pending');
		setIsNewTodo(false);
		startUpdateTodo(title, description, status, todo.id);
	}


	const newTodo = (e) => {
		e.preventDefault();
		setIsNewTodo(false);
		startNewTodo(title, description);
	}


	const cleanTodo = (e) => {
		e.preventDefault();
		onResetForm();
		startCleanActive();
		setIsNewTodo(true);
		setChecked(false)
	}

	const onDeleteTodos = (e) => {
		e.preventDefault();
		startDeleteTodo(todo.id);
		cleanTodo(e);
	}

	return (
		<div className='container mt-5'>
			<div className="container text-end mb-4">
				<button
					className="btn btn-outline-success my-2 my-sm-0 "
					onClick={cleanTodo}
				>Nueva tarea</button>
			</div>
			<div className="card ">
				<div className="card-body">
					<form className="form">
						<div className="form-body">
							<div className="form-group">
								<input
									type="text"
									id="timesheetinput2"
									className="form-control"
									placeholder='Ingrese un titulo'
									label='titulo'
									name="title"
									value={title}
									onChange={onInputChange}

								/>


							</div>

							<div className="form-group my-2">

								<textarea
									id="timesheetinput7"
									rows="5"
									className="form-control"
									name='description'
									value={description}
									onChange={onInputChange}
									placeholder="Descripcion">

								</textarea>

							</div>
							{
								!isNewTodo && (<div className="form-check my-3">
									<input
										className="form-check-input"
										type="checkbox"
										value={checked}
										checked={checked}
										onChange={() => setChecked(!checked)}
										id="flexCheckDefault" />
									<label className="form-check-label pl-2" forhtml="flexCheckDefault">
										Completada
									</label>
								</div>)
							}

						</div>

						<div className="form-actions right">
							{
								!isNewTodo && (
									<button
										type="button"
										onClick={onDeleteTodos}
										className="btn btn-default mr-1 "

									>
										<i className="ft-x"></i> Eliminar
									</button>
								)
							}
							<button
								onClick={isNewTodo ? newTodo : onSaveTodo}
								className="btn btn-primary">
								<i className="fa fa-check-square-o"></i> Guardar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
