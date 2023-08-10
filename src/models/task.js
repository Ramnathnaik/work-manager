import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'completed'],
        default: 'pending'
    },
    userId: {
        type: mongoose.ObjectId,
        required: true
    }

});

export const Task = mongoose.models.tasks || mongoose.model('tasks', TaskSchema);