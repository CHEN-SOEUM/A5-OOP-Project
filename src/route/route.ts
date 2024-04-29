export class Route {
  private route_number: string;
  private from: AirPort;
  private to: AirPort;
  private plane: AirPlane;
  constructor(route_number: string) {
    this.route_number = route_number;
  }
  public setPlane(plane: AirPlane): void {
    this.plane = plane;
  }
  public setFrom(from: AirPort): void {
    this.from = from;
  }
  public setTo(to: AirPort): void {
    this.to = to;
  }
  public getRouteNumber(): string {
    return this.route_number;
  }
  public getPlane(): AirPlane {
    return this.plane;
  }
  public getFrom(): AirPort {
    return this.from;
  }
  public getTo(): AirPort {
    return this.to;
  }
}
