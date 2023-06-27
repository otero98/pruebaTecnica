const { Schema, model } = require("mongoose");

const ToDoSchema = Schema({
    title: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "Pending"
    }
})


ToDoSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})


module.exports = model("ToDo", ToDoSchema);
