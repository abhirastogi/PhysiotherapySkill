import Utils from "./utils"
import { utils } from "mocha";

export interface IExcercise{
    excercise_type : number;    
    excercise_string : string;
    createExcercise(): string;
}

enum ExcerciseType {
    ROLL,
    STRETCH,
    STRENGTH
}

class ExcerciseSequence {
    sequence_time : number;
    excercises : IExcercise[];
    constructor(sequence_time : number)
    {
        this.sequence_time = sequence_time;
        this.excercises = [];
    }
    private addExcercise(type : ExcerciseType)
    {
        // create excercise obj
        let excercise_obj : IExcercise;
        switch (type)
        {
            case ExcerciseType.ROLL: excercise_obj = new RollingExcercise();

        }
        this.excercises.push()
    }
    private getSequence():string;    
}

export class Routine{
    private _time: number;

    get time() { return this._time; }
    
    constructor(time:number) {
        this._time = time;
    }
    
    public createRoutine():string
    {
        let routine = "";
        let sequences : ExcerciseSequence[];
        if ( this.time )
        {
            // logic to devide time for various sequences hardcoding with rolling:5min, stretching:10min & strengthening:10min
            // create rolling routine
            let rolling_sequence : ExcerciseSequence = new ExcerciseSequence(5*60);
            rolling_sequence.addExcercise( ExcerciseType.ROLL);
            sequences.add(rolling_sequence.getSequence());
            // stretchingExcercise:Excercise = new Excercise(type:stretching)
            routine = routine + this.createRollingRoutine(10);
            // create stretching routine
            // create strengthening routine
        }
        // devide time into 3 parts
        // generate excercises
            // start rolling
            // chose excercises from stretching and assign
            // choose excercises from strngthening and assign
        // define fixed time for an excercise
        // define excercises
        return routine;
    }
    private createRollingRoutine(time:number)
    {
        return "Start rolling session in "+ Utils.fetchTime(3) + "go";
    }
}