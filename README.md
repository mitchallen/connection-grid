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

### gridFactory = factory.create(spec)

Factory method that returns a connected grid object. This overrides the __create__ method in the base class.

It takes one spec parameter that must be an object with x and y values specifying the size of the connection grid.

The x and y size values can not be less than one (1).

The method will return null if create fails, such as with bad parameters.
You can call create multiple times to create multiple connection grids.

    var gridFactory = require("@mitchallen/connection-grid");

    var grid1 = gridFactory.create( { x: 5, y: 10 } );
    var grid2 = gridFactory.create( { x: 7, y: 20 } );

    if(!grid1 || !grid2) ...
    
### list = object.getDirMap()

Returns a map of the internal direction bit flags.  The flags can be either __N__, __E__, __W__, or __S__.

    let dirMap = grid.getDirMap();
    
	if(dirMap.N == ... )

### list = object.isDir(dir)

Will return true if __dir__ is one of these strings: __"N"__, __"E"__, __"S"__, or __"W"__; 

	if(isDir("N")) ...

### coord = object.getNeighbor(x, y, dir)

Returns the zero-based coordinates of the immediate neighbor of a cell. Will return null if the neighbor would be out of range for the grid.

* __dir__ - can be "N", "E", "S", or "W";

Returns an object containing coordinates in the form of __{ x: *integer*, y: *integer* }__.

    var coord = grid.getNeighbor(x,y,"N");
    
	let nX = coord.x;
	let nY = coord.y;

### list = object.getNeighborDirs( x, y )

Returns a list containing the directions of all neighbors. The list contains the internal bit flag values.
    
    grid.getNeighborDirs(1,1).should.eql([ "N", "S", "E", "W"  ]);

### list = object.getShuffledNeighborDirs( x, y )

Returns a shuffled list containing the directions of all neighbors. The list is in the form of strings (example: [ "W", "N", "E", "S" ]).

    let list = grid.getShuffledNeighborDirs( x, y );

### bool = object.markVisited( x, y ) 

Uses an internal bit flag to mark a cell as __visited__. This is useful in some applications, such as maze generation.  Will return false if x, y coordinate is not valid.

	grid.markVisited(0,0);

### bool = object.visited(x, y)

Returns true if the cell had been marked with a call to __markVisited__.

	return grid.visited(0,0);
	
### bool = object.mask( x, y ) 

Uses an internal bit flag to mark a cell as __masked__. This is useful in some applications, such as maze generation.  Will return false if x, y coordinate is not valid.

	grid.mask(0,0);
	
### bool = object.isMasked(x, y)

Returns true if the cell had been marked with a call to __mask__.

	return grid.isMasked(0,0);

### bool = object.hasConnections(x, y) 

Will return true if the cell at x and y is connected to any other cell.  Will return false if x, y coordinate is not valid.

	if(grid.hasConnections(x, y)) ...

### bool = object.connect( x, y, dir )

Marks a connection from the current cell to a neighbor cell. Will return false if x, y coordinate or direction is not valid. Only marks a connection in one direction.  Cell A connected to Cell B doesn't necessarily mean that Cell B is connected to Cell A. To connect in both directions see __connectUndirected__.

* __dir__ - can be "N", "E", "S", or "W";

Example:

	if(grid.connect(2,2,"N")) ...

### object.connectUndirected(x, y, dir)

Marks a connection from the current cell to a neighbor cell *and back again*. Will return false if x, y coordinate or direction is not valid. Marks a connection in one direction. Cell A connected to Cell B also results in Cell B being marked as connected to Cell A. It's the same as calling __connect__ once from each cell and reversing the direction.

* __dir__ - can be "N", "E", "S", or "W";

Example:

	if(grid.connectUndirected(2,2,"N")) ...

### object.connects(x, y, dir)

Returns true if cell has a connection in the specified direction.

* __dir__ - can be "N", "E", "S", or "W";

Example:

	if(grid.connects(2,2,"N")) ...

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

#### Version 0.1.1 

* fixed bug in __hasConnections__

#### Version 0.1.2 

* added __connects__ method

#### Version 0.1.3 

* now uses @mitchallen/grid 0.1.6

#### Version 0.1.4

* added __mask__ and __isMasked__ methods

* * *
