import { Address } from "../address/address";
import { Airplane } from "../airplane/airplane";
export class Airport {
    private name: string;
    private location: Address;
    private planes:Airplane[] ;
    // private gates: Gate[] ;
    constructor(name: string, location: Address){
        this.name = name;
        this.location = location;
        this.planes = [];
        // this.gates = [];
    }
    public setPlanes(Plane):void{
        
    }
    public setGates(Gate):void{

    }
    public getPlanes():Airplane[]{
        return this.planes;
    }
    // public getGates(): Gate[]{
    //     return this.gates;
    // }
}