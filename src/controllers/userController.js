import userModel from '../models/userModel'

export const getAllUsers = async (req, res)=>{
    const users = await userModel.find();

    res.send(users);
}

export const getOneUser = async (req, res)=>{
    const user = await userModel.find({_id: req.params.id});

    res.send(user);
}

export const createUser = async (req, res)=>{
    const newUser = new userModel({
        userName: req.body.nombre,
        email: req.body.email,
        phone: req.body.phone,
        verification: req.body.verification,
        password: req.body.password
    });

    const taskUser = await newUser.save();

    res.send(newUser);
}

export const updateUser = async (req, res)=>{

    const userChanges = userModel.updateOne({
        _id: req.params.id}, {
        userName: req.body.nombre,
        email: req.body.email,
        phone: req.body.phone,
        verification: req.body.verification,
        password: req.body.password
    });

    res.send(userChanges);
}

export const deleteUser = async (req, res)=>{

    const userdeleted = userModel.deleteOne({_id: req.params.id});
    res.send(userdeleted);
}