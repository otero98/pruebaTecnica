const { response } = require("express");
const ToDo = require("../models/ToDo");


const createToDo = async (req, resp = response) => {
    try {
        const toDo = new ToDo(req.body);

        await toDo.save();
        resp.status(200).json({
            msg: "Tarea creada"
        })

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            msg: "Error en servidor"
        })
    }

}

const getToDo = async (req, resp = response) => {
    const todos = await ToDo.find();
    resp.status(200).json({
        msg: "Tareas encontradas",
        data: todos
    })
}

const updateToDo = async (req, resp = response) => {
    try {
        const toDoId = req.params.id;
        const todos = await ToDo.findById(toDoId);
        if (!todos) {
            return resp.status(404).json({
                msg: "Tarea no encontrada",
            });
        }
        const newToDo = { ...req.body };
        const toDoUpdated = await ToDo.findByIdAndUpdate(toDoId, newToDo, { new: true });
        resp.status(200).json({
            msg: "Tarea actualizada",
            data: toDoUpdated
        });

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            msg: "Error en servidor"
        })
    }
}

const deleteToDo = async (req, resp = response) => {
    try {
        const toDoId = req.params.id;
        const todos = await ToDo.findById(toDoId);
        if (!todos) {
            return resp.status(404).json({
                msg: "Tarea no encontrada"
            });
        }
        const toDoDeleted = await ToDo.findByIdAndDelete(toDoId);

        resp.status(200).json({
            msg: "tarea eliminada",
            data: toDoDeleted
        })

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            msg: "Error en servidor"
        })
    }
}

module.exports = {
    createToDo,
    getToDo,
    updateToDo,
    deleteToDo
}
