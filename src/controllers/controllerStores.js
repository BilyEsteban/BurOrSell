import storeModel from '../models/storeModel'

export const getAllStores = async (req, res)=>{
    const stores = await storeModel.find();
    res.send(stores);}

export const getOneStore = async (req, res)=>{
    const store = await storeModel.find({_id: req.params.id});
    res.send(store);
}

export const createStore = async (req, res)=>{
    const newStore = new storeModel({
        nombre: req.body.nombre, 
        estado: req.body.estado
    });

    const storeSaved = await newStore.save();

    res.send({
        message: storeSaved
    })
}

export const updateStoreData = async (req, res) =>{

    console.log(req.body)
    const updateStore = await storeModel.updateOne({
        _id:req.params.id
    }, {
        nombre: req.body.nombre,
        estado: req.body.estado
    });

    res.send(updateStore)
} 

export const deleteStore = async(req, res)=>{
    const deleteStore = await storeModel.deleteOne({_id:req.params.id});

    res.send(deleteStore);
}

