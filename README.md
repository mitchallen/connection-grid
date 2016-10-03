@mitchallen/connection-grid
==
Map connections between cells in a 2D grid.
--
* * *
## Installation

You must use __npm__ __2.7.0__ or higher because of the scoped package name.

    $ npm init
    $ npm install @mitchallen/connection-grid --save
  
* * *

## Usage

    "use strict";
    
    var gridFactory = require("@mitchallen/connection-grid");
    
	let xSize = 5;
	let ySize = 6;

    var grid = gridFactory.create({ x: xSize, y: ySize });
    
* * *

## Methods

For additional methods, see the documentation for the base class: __[@mitchallen/grid](https://www.npmjs.com/package/@mitchallen/grid)__.

### shuffler = factory.create(spec)

Factory method that returns a grid object. This overrides the __create__ method in the base class.

It takes one spec parameter that must be an object with x and y values specifying the size of the connection grid.

The x and y size values can not be less than one (1).

The method will return null if create fails, such as with bad parameters.
You can call create multiple times to create multiple connection grids.

    var gridFactory = require("@mitchallen/connection-grid");

    var grid1 = gridFactory.create( { x: 5, y: 10 } );
    var grid2 = gridFactory.create( { x: 7, y: 20 } );

    if(!grid1 || !grid2) ...
    
### int = object.N

Returns the internal bit flag value for NORTH.

    let N = grid.N;

### int = object.S

Returns the internal bit flag value for SOUTH.

    let S = grid.S;

### int = object.E

Returns the internal bit flag value for EAST.

    let E = grid.E;

### int = object.W

Returns the internal bit flag value for WEST.

    let W = grid.W;

### coord = object.getNeighbor(x, y, dir)

Returns the zero-based coordinates of the immediate neighbor of a cell. Will return null if the neighbor would be out of range for the grid.

* __dir__ - can be "N", "E", "S", or "W";

Returns an object containing coordinates in the form of __{ x: *integer*, y: *integer* }__.

    var coord = grid.getNeighbor(x,y,"N");
    
	let nX = coord;
	let nY = coord;

### list = object.getNeighborDirs( x, y )

Returns a list containing the directions of all neighbors. The list contains the internal bit flag values.

    let N = grid.N;
    let S = grid.S;
    let E = grid.E;
    let W = grid.W;
    
    grid.getNeighborDirs(1,1).should.eql([ N, S, E, W ]);

### list = object.getShuffledNeighborDirs( x, y )

Returns a shuffled list containing the directions of all neighbors. The list contains the internal bit flag values.

    let list = grid.getShuffledNeighborDirs( x, y );

### object.markVisited( x, y ) 

TODO

### object.visited(x, y)

TODO

### object.hasConnections(x, y) 

TODO

### object.connect( x, y, dir )

TODO

### object.connectUndirected: function(x, y, dir)

* * *

## Testing

To test, go to the root folder and type (sans __$__):

    $ npm test
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/connection-grid.git](https://bitbucket.org/mitchallen/connection-grid.git)
* [github.com/mitchallen/connection-grid.git](https://github.com/mitchallen/connection-grid.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.0 

* initial release

* * *
