import { Address } from "../address/address";
import { Gate } from "../gate/gate";
import { Airplane } from "../airplane/airplane";
export class Airport {
  private airport_name: string;
  private address: Address;
  private gates: Gate[];
  private airplane: Airplane[];
  constructor(airport_name: string, addreess: Address, gates: Gate[], airplane: Airplane[]){
    this.airport_name = airport_name;
    this.address = addreess;
    this.gates = gates;
    this.airplane = airplane;
  }
  public getName(): string {
    return this.airport_name;
  }
  public getGates(): Gate[]{
    return this.gates;
  }
  public setGate(gate):void{}

  public setPlane(airplane): void{}
  
  public getAirplance(): Airplane[]{
    return this.airplane;
  }
}
