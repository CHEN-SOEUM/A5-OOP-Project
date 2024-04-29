import { Airport } from "../airport/airport";

export class Route {
  private route_number: string;
  private from: Airport;
  private to: Airport;
  private plane: Airport;
  constructor(route_number: string) {
    this.route_number = route_number;
  }
  public setPlane(plane: Airport): void {
    this.plane = plane;
  }
  public setFrom(from: Airport): void {
    this.from = from;
  }
  public setTo(to: Airport): void {
    this.to = to;
  }
  public getRouteNumber(): string {
    return this.route_number;
  }
  public getPlane(): Airport {
    return this.plane;
  }
  public getFrom(): Airport {
    return this.from;
  }
  public getTo(): Airport {
    return this.to;
  }
}
