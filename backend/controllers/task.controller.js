const {Router} = require("express");

const TaskModel = require("../models/Task.model");

const taskController = Router();

taskController.get("/:projectId", async (req,res) => {
    const {projectId} = req.params;

    const tasks = await TaskModel.find({projectId})
    
    if(tasks.length > 0){
        return res.send(tasks);
    }
    else{
        return res.send({messgae:"failed"})
    }
})

taskController.get("/singletask/:id", async (req,res) => {
    const {id} = req.params;

    const task = await TaskModel.findOne({_id:id})
    if(task){
        return res.send(task);
    }
    else{
        return res.send({messgae:"failed"})
    }
})

taskController.post("/:projectId/create", async (req,res) => {
    const {projectId} = req.params;
    const {title} = req.body;

    try{
        const task = new TaskModel({
            title,
            projectId
        })

        await task.save();
        return res.send({message:"Created"})
    }
    catch{
        return res.send({message:"failed"})
    }
    
})

taskController.patch("/update/:id", async (req,res) => {
    const {id} = req.params;

    const task = await TaskModel.findOne({_id:id})
    
    if(task){
        await TaskModel.updateOne({_id:id},{...req.body});
        return res.send({message:"Success"})
    }
    else{
        return res.send({messgae:"failed"})
    }
})

taskController.delete("/delete/:id", async (req,res) => {
    const {id} = req.params;

    const task = await TaskModel.findOne({_id:id})
    
    if(task){
        await TaskModel.deleteOne({_id:id});
        return res.send({message:"Success"})
    }
    else{
        return res.send({messgae:"failed"})
    }
})

module.exports = taskController;