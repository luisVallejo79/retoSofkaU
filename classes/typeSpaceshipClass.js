const Spaceship = require("./spaceship")

class TypeSpaceship extends Spaceship {
    constructor (
       { 
        typeSpaceship,
        loadCapacity,
        missionType,
        engineNumbers,
        orbitSpeed,
        ...otherProps
    }
    ){
        super(otherProps);
        this.typeSpaceship = typeSpaceship
        this.loadCapacity = loadCapacity
        this.missionType = missionType
        this.engineNumbers = engineNumbers
        this.orbitSpeed = orbitSpeed
    }
    getTypeSpaceship( ){
        console.log("get-getTypeSpaceship");
        return {
            name: this.name,
            typeSpaceship:this.typeSpaceship,
            loadCapacity:this.loadCapacity,
            missionType:this.orbitSpeed,
            engineNumbers:this.engineNumbers,
            orbitSpeed: this.orbitSpeed
        }
    }
    getAllAttributesSpaceship(){
        return {name: this.name,
            typeSpaceship:this.typeSpaceship,
            loadCapacity:this.loadCapacity,
            missionType:this.orbitSpeed,
            engineNumbers:this.engineNumber,
            orbitSpeed: this.orbitSpeed,
            name:this.name,
            origin:this.origin,
            pushForce:this.pushForce,
            weight:this.weight,
            height:this.height,
            typeLoad:this.typeLoad,
            dateActivity:this.dateActive,
            active:this.active,
            typeOil:this.typeOil,
            spaceZone:this.spaceZone,
            levelPower:this.levelPower}
    }
    
};
module.exports = TypeSpaceship
