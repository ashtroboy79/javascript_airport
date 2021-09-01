const DEFAULT_CAPACITY = 2;

class Airport {

  constructor(capacity = DEFAULT_CAPACITY) {
    this.planeshanger = [];
    this.capacity = capacity
  }

  static get defaultCapacity(){
    return DEFAULT_CAPACITY;
  }

  landAirplanes(plane) {
    this.planeshanger.push(plane);
    plane.isFlying(false);
  }
  
}