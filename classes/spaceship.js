class Spaceship {
    constructor (
    {   name,
        origin,
        pushForce,
        weight,
        height,
        typeLoad,
        dateActivity,
        active,
        typeOil,
        spaceZone,
        levelPower,
    }
    ){
        this.name = name
        this.origin = origin
        this.pushForce = pushForce
        this.weight = weight
        this.height = height
        this.typeLoad = typeLoad
        this.dateActivity = dateActivity
        this.active = active
        this.typeOil = typeOil
        this.spaceZone = spaceZone
        this.levelPower = levelPower
 }
 getSpaceship( ){
    console.log("get-getSpaceship");
    return {
        name:this.name,
        origin:this.origin,
        pushForce:this.pushForce,
        weight:this.weight,
        height:this.height,
        typeLoad:this.typeLoad,
        dateActivity:this.dateActivity,
        active:this.active,
        typeOil:this.typeOil,
        spaceZone:this.spaceZone,
        levelPower:this.levelPower
        
    }
}
    PowerOnn(){
        console.log(`Spacecraft is power On`)
    }
    PowerOff(){
        console.log(`Spacecraft is power Off`)
    }
    ActivateParachute(){
        console.log(`Parachute is activated`)
    }
    
};
module.exports = Spaceship
