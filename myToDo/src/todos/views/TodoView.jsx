import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { useTodoStore } from '../../hooks/useTodoStore';


export const TodoView = () => {

	const dispatch = useDispatch();

	const { startUpdateTodo } = useTodoStore();

	const { active: todo, isLoadingTodos } = useSelector(state => state.todo);

	const { description, title, onInputChange } = useForm(todo);

	const onSaveTodo = (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("title", title);
		formData.append("description", description);

		console.log(formData);

		//dispatch(startUpdateTodo(formData, todo.id))
	}

	return (
		<div className='container mt-5'>
			<div className="card">
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
							<div className="form-check my-3">
								<input
									className="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault" />
								<label className="form-check-label pl-2" forhtml="flexCheckDefault">
									Completada
								</label>
							</div>
						</div>

						<div className="form-actions right">
							<button
								type="button"
								className="btn btn-default mr-1"
							>
								<i className="ft-x"></i> Cancelar
							</button>
							<button
								onClick={onSaveTodo}
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
