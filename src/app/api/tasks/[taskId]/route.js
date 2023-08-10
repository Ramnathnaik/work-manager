import { sendResponse } from "@/helper/response";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

/* Get Single Task */
export async function GET(request, { params }) {
    const { taskId } = params;
    
    try {
        let task = await Task.findById(taskId);
        return NextResponse.json(task, {
            status: 200,
            statusText: 'task details'
        })
    } catch (error) {
        console.log(error);
        return sendResponse('Not able to fetch task');
    }
}

/* Update Task */
export async function PUT(request, { params }) {
    const { title, content, status } = await request.json();
    const { taskId } = params;

    try {
        const task = await Task.findById(taskId);
        
       if (task != null) {
        task.title = title;
        task.content = content;
        task.status = status;
        const updatedTask = await task.save();
        return NextResponse.json(updatedTask, {
            status: 200,
            statusText: 'Task updated successfully'
        })
       } else {
        return sendResponse('Task Id does not exists');
       }
        
    } catch (error) {
        console.log(error);
        return sendResponse('Unable to update the task');
    }
}

/* Delete a Task */
export async function DELETE(request, { params }) {
    const { taskId } = params;

    try {
        const task = await Task.findById(taskId);

        if (task != null) {
            await Task.deleteOne({_id: taskId});
            return NextResponse.json({
                message: 'task got deleted'
            });
        } else {
            return sendResponse('given task is does not exist!');
        }

    } catch (error) {
        console.log(error);
        return sendResponse('Unable to delete the task');
    }
}