const { response, request } = require('express');
const mongoose = require('mongoose');

const TypeSpaceship = require('../classes/typeSpaceshipClass');
const TypespaceshipMongo = require('../models/typeSpaceship');

//const Spaceship = require('../models/spaceship');


const spaceshipGet = async(req = request, res = response) => {

    const spaceships = await TypespaceshipMongo.find()
    res.json({
        spaceships
    });
}
const spaceshipGetById = async(req = request, res = response) => {

    const { id } = req.params;
    const spaceship = await TypespaceshipMongo.findById(id)
    res.json({
        spaceship
    });
}
const spaceshipPost = async(req, res = response) => {
    const body = req.body;
    let typeSpaceship = new TypeSpaceship(body);

    console.log("getAllAttributesSpaceship nave", typeSpaceship.getAllAttributesSpaceship());

    //crea o importar el schema de mongo 
    let newTypeSpaceship = new TypespaceshipMongo(typeSpaceship.getAllAttributesSpaceship());

   let a = await newTypeSpaceship.save();
    //spaceship = mongoose.get.body();
 console.log('a',a);
    //await typeSpaceship.save("data");
    res.status(200).send( { typeSpaceship } )
    //res.json({
    //    msn : 'Post API controller',
    //    typeSpaceship
    //});
};
const spaceshipPut = (req, res = response) => {
    const { id } = req.params;

    res.json({
        msn : 'Put API controller'
    });
};
const spaceshipDelete = (req, res = response) => {
    const { id } = req.params;
    res.json({
        msn : 'Delete API controller'
    });
};


module.exports = {
    spaceshipGet,
    spaceshipPost,
    spaceshipPut,
    spaceshipDelete,
    spaceshipGetById
}