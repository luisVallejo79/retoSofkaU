
const { Schema, model } = require('mongoose');

const TypespaceshipSchema = Schema({

    name : {type: String},
    origin : {type: String},
    pushForce : {type: String},
    weight : {type : Number},
    height : {type: Number},
    typeLoad : {type: String},
    dateActivity : {type: String},
    active: {type: Boolean},
    typeOil : {type: String},
    spaceZone : {type : String},
    levelPower : {type: Number},
    typeSpaceship : {type: String},
    loadCapacity : {type: String},
    missionType: {type: String},
    engineNumbers:{type: Number},
    orbitSpeed:{type: String}
});
module.exports = model( 'Typespaceship', TypespaceshipSchema );
