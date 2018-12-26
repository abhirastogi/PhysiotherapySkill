import Utils from "./utils"

export interface Excercise{
    muscle_area:string;
    excercise_type : number;    
}

export class Routine{
    private _time: number;

    get time() { return this._time; }
    constructor(time:number) {
        this._time = time;
    }
    public createRoutine():string
    {
        // take time as input
        // devide time into 3 parts
        // generate excercises
            // start rolling
            // chose excercises from stretching and assign
            // choose excercises from strngthening and assign
        // define fixed time for an excercise
        // define excercises
        return Utils.fetchTime(this.time);
    }
}