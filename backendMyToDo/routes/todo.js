const { Router } = require("express");

const { createToDo, getToDo, updateToDo, deleteToDo } = require("../controllers/todo");

const router = Router();

router.post("/", createToDo);

router.get("/", getToDo);

router.put("/:id", updateToDo);

router.delete("/:id", deleteToDo);

module.exports = router;