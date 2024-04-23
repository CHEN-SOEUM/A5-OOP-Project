export class Gate {
  private gate_number: string;

  constructor(gate_number: string) {
    this.gate_number = gate_number;
  }

  public getGateNumber(): string {
    return this.gate_number;
  }
}