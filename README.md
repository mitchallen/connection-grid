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

    var grid = gridFactory.Square({ x: xSize, y: ySize });

## Browser Usage:

You can reference a minimized client version inside an HTML script tag using one of these URL's:

* https://cdn.rawgit.com/mitchallen/connection-grid/v0.1.25/dist/connection-grid.min.js
* https://unpkg.com/@mitchallen/connection-grid@0.1.25/dist/connection-grid.min.js

Adjust for the version that you wish to use.

The __rawgit.com__ URL will pull based on the version from GitHub.

The __unpkg.com__ URL will pull based on the version in npmjs.com.

See http://rawgit.com and https://unpkg.com for other ways to retrieve the file.

The factory function can be retrieved from __window.MitchAllen.ConnectionGrid__:

    var factory = window.MitchAllen.ConnectionGrid;
    console.log(factory);
    var xSize = 10, ySize = 5;
    var sg = factory.Square( { x: xSize, y: ySize } );
    sg.log();

Example:

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Connection-Grid Example</title>
        <meta name="description" content="Connection Grid Example">
        <!-- either cdn should work -->
        <!--
        <script src="https://cdn.rawgit.com/mitchallen/connection-grid/v0.1.25/dist/connection-grid.min.js"></script>
        -->
        <script src="https://unpkg.com/@mitchallen/connection-grid@0.1.25/dist/connection-grid.min.js"></script>
        <script>
          var factory = window.MitchAllen.ConnectionGrid;
          console.log(factory);
          var xSize = 10, ySize = 5;
          var sg = factory.Square( { x: xSize, y: ySize } );
          sg.log(); 
        </script>
      </head>
      <body>
        <h1>Connection Grid Example</h1>
      </body>
    </html>
    
* * * 
   
    
* * *

## Methods

For additional methods, see the documentation for the base class: __[@mitchallen/grid](https://www.npmjs.com/package/@mitchallen/grid)__.

### gridFactory = factory.create(spec)

The __create__ method is deprecated. Use __Square__ instead.

### gridFactory = factory.Square(spec)

Factory method that returns a connected grid object. 

It takes one spec parameter that must be an object with x and y values specifying the size of the connection grid.

If the x and y size parameters are missing or less than 0 they will be normalized to 0.

You can call the method multiple times to create multiple connection grids.

    var gridFactory = require("@mitchallen/connection-grid");

    var grid1 = gridFactory.Square( { x: 5, y: 10 } );
    var grid2 = gridFactory.Square( { x: 7, y: 20 } );

    if(!grid1 || !grid2) ...
    
### gridFactory = factory.Hexagon(spec)

Factory method that returns a connected grid object. 

It takes one spec parameter that must be an object with x and y values specifying the size of the connection grid.

If the x and y size parameters are missing or less than 0 they will be normalized to 0.

You can call the method multiple times to create multiple connection grids.

    var gridFactory = require("@mitchallen/connection-grid");

    var grid1 = gridFactory.Hexagon( { x: 5, y: 10 } );
    var grid2 = gridFactory.Hexagon( { x: 7, y: 20 } );

    if(!grid1 || !grid2) ...
    
### gridFactory = factory.Triangle(spec)

Factory method that returns a connected grid object. 

It takes one spec parameter that must be an object with x and y values specifying the size of the connection grid.

If the x and y size parameters are missing or less than 0 they will be normalized to 0.

You can call the method multiple times to create multiple connection grids.

    var gridFactory = require("@mitchallen/connection-grid");

    var grid1 = gridFactory.Triangle( { x: 5, y: 10 } );
    var grid2 = gridFactory.Triangle( { x: 7, y: 20 } );

    if(!grid1 || !grid2) ...
    
### gridFactory = factory.Circle(spec)

Factory method that returns a connected grid object. 

It takes one spec parameter that must be an object a __rings__ value specifying the size of the connection grid.

You can call the method multiple times to create multiple connection grids.

    var gridFactory = require("@mitchallen/connection-grid");

    var grid1 = gridFactory.Circle( { rings: 5 } );
    var grid2 = gridFactory.Circle( { rings: 6 } );

    if(!grid1 || !grid2) ...
    
### list = object.dirMap

Returns a map of the internal direction flags.

    let dirMap = grid.dirMap;
    
	if(dirMap.N == ... )
	
For __Square__ or __Triangle__ the flags can be either __N__, __E__, __W__, or __S__.
	
For __Hexagon__ the flags can be either __N__, __S__, __E__, __W__, __NW__, __NE__, __SW__ or __SE__.

For __Circle__ the flags can be either: __CCW__, __CW__, __A__, __T__, __A0__, __A1__, __T0__ or __T1__ 


### list = object.isDir(dir)

Will return true if __dir__ is a valid direction for the grid type.

	if(isDir("N")) ...
	
### oDir = object.getOppositeDir(dir)

Returns opposite direction of __*dir*__. Will return null for an invalid parameter.

* __dir__ - can any direction that the grid supports

Returns an string containing opposite direction of __*dir*__ parameter.

    var oDir = grid.getOppositeDir(x,y,"N");
	oDir.should.eql("S");

### coord = object.getNeighbor(x, y, dir)

Returns the zero-based coordinates of the immediate neighbor of a cell. Will return null if the neighbor would be out of range for the grid.

* __dir__ - can any direction that the grid supports

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

* __dir__ - can be any direction that the grid supports

Example:

	if(grid.connect(2,2,"N")) ...

### object.connectUndirected(x, y, dir)

Marks a connection from the current cell to a neighbor cell *and back again*. Will return false if x, y coordinate or direction is not valid. Marks a connection in one direction. Cell A connected to Cell B also results in Cell B being marked as connected to Cell A. It's the same as calling __connect__ once from each cell and reversing the direction.

* __dir__ - can be any direction that the grid supports

Example:

	if(grid.connectUndirected(2,2,"N")) ...

### object.connects(x, y, dir)

Returns true if cell has a connection in the specified direction.

* __dir__ - can any direction that the grid supports

Example:

	if(grid.connects(2,2,"N")) ...
	

### object.connectsAny(x, y, list)

Returns true if cell has a connection in any direction in the list.

* __list__ - can contain any direction that the grid supports

Example:


    if(grid.connectsAny(x,y,["S","N","E"])) ...

* * *

## Testing

To test, go to the root folder and type (sans __$__):

    $ npm test
    
Run all tests using nodemon:

    $ npm run test-nodemon
    
Run suites using nodemon:

    $ npm run test-square
    $ npm run test-hexagon
    $ npm run test-triangle
    $ npm run test-circle
   
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

#### Version 0.1.26

* Replaced modules/base.js with @mitchallen/connection-grid-core

#### Version 0.1.25

* Browser now must use __window.MitchAllen.ConnectionGrid__.

#### Version 0.1.24

* Updated CDN URL

#### Version 0.1.23

* Added client example

#### Version 0.1.22

* Changed client window name to 'ConnectionGrid'

#### Version 0.1.21

* Added client distribution

#### Version 0.1.20

* updated to latest grid

#### Version 0.1.19

* Updated documentation for connection directions
* Removed unused code

#### Version 0.1.18

* Refactored __Circle.getNeighbor__
* Fixed bug in __Circle.getNeighbor__

#### Version 0.1.17

* Add __connectsAny__ method

#### Version 0.1.16

* __Cirlce.getNeighbor__ with CW for last cell in ring now wraps properly

#### Version 0.1.15

* Added __Triangle__ method

#### Version 0.1.14

* Fixed bug in __isDir__
* Fixed __Circle__ direction mapp

#### Version 0.1.13

* Refactored code base and tests

#### Version 0.1.12

* Added tests for __Circle__

#### Version 0.1.11

* Added __Hexagon__ and __Circle__ methods

#### Version 0.1.10

* now uses @mitchallen/grid 0.1.10

#### Version 0.1.9

* now uses @mitchallen/grid 0.1.9
* changed internal use of __grid.create__ to __grid.Square__
* added __Square__ method to replace __create__ method
* added test suites for __Square__ method
* __create__ method now generates deprecation warning

#### Version 0.1.8

* now uses @mitchallen/grid 0.1.8
* added experimental __Hexagon__ method

#### Version 0.1.7 

* now uses @mitchallen/grid 0.1.7
* x and y values that are missing or less than 0 will be normalized to 0
* updated tests 

#### Version 0.1.6

* added replaced __getDirMap__ function with __dirMap__ property

#### Version 0.1.5

* added __getOppositeDir__ method

#### Version 0.1.5

* added __getOppositeDir__ method

#### Version 0.1.4

* added __mask__ and __isMasked__ methods

#### Version 0.1.3 

* now uses @mitchallen/grid 0.1.6

#### Version 0.1.2 

* added __connects__ method

#### Version 0.1.1 

* fixed bug in __hasConnections__

#### Version 0.1.0 

* initial release

* * *
