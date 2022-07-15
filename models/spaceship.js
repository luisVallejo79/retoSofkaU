
const { Schema, model } = require('mongoose');

const SpaceshipSchema = Schema({

    name : {type: String},
    LoadType : {type: String},
    loadCapacity : {type: String},
    pushForce : {type: String},
    orbitSpeed : {type: Number},
    numberEngines : {type: Number},
    missionType : {type: String},
    power : {type: String}
    
});
module.exports = model( 'Spaceship', SpaceshipSchema );
