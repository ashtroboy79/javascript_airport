'use strict'

describe('Airport', () => {
  let airport;
  let plane;
  beforeEach(() => {
    airport = new Airport
    plane = jasmine.createSpyObj('plane', ['isFlying']);
  })

  it('has a default capacity', () => {
    expect(airport.capacity).toEqual(Airport.defaultCapacity)

  })
  it('can land a plane', () => {
    airport.landAirplanes(plane)
    expect(airport.planeshanger.length).toEqual(1)
    expect(plane.isFlying).toHaveBeenCalled()
  })
})