const {Router} = require("express");
const ProjectModel = require("../models/Project.model")
const projectController = Router();


projectController.get("/", async (req, res) => {
    const {userId} = req.body
    console.log("userId",userId);
    const project = await ProjectModel.find({userId});
    if(project.length > 0){
        return res.send(project)
    }
    else{
        return res.send({message:"failed"})
    }

   
})

projectController.get("/:id", async (req, res) => {
    const {id} = req.params;
    console.log("id",id);
    const project = await ProjectModel.findOne({_id:id});
    
    if(project){
        return res.send(project)
    }
    else{
        return res.send({message:"failed"})
    }

   
})

projectController.post("/create", async (req, res) => {
    const {name,userId,email} = req.body;
    // console.log(name,userId);
    const project = new ProjectModel({
        name,
        userId,
        email
    })

    await project.save();

    res.send({message:"Project created",project})
})

projectController.patch("/:id/edit", async (req, res) => {
    const {id} = req.params;

    const project = await ProjectModel.findOne({_id:id});

    if(project){
        await ProjectModel.updateOne({_id:id},{...req.body})
        return res.send({message:"Update success"})
    }
    else{
        return res.send({message:"failed"})
    }

   
})

projectController.delete("/:id/delete", async (req, res) => {
    const {id} = req.params;

    const project = await ProjectModel.findOne({_id:id});

    if(project){
        await ProjectModel.deleteOne({_id:id})
        return res.send({message:"delete success"})
    }
    else{
        return res.send({message:"failed"})
    } 
})

module.exports = projectController;