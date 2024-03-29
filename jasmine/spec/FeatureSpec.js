'use strict';

describe('Feature test', function() {
  var plane;
  var airport;
  
  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it("plane can be instructed to land at airport", function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
});