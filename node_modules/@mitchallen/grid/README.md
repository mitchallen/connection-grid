@mitchallen/grid
===============================

A 2D grid that uses zero-based indexing.
----------------------------------------------------

* * *
## Installation

You must use __npm__ __2.7.0__ or higher because of the scoped package name.

    $ npm init
    $ npm install @mitchallen/grid --save
  
* * *

## Usage

There are two forms of usage:

* Square Grid
* Circle Grid

## Square Grid Usage

Create a new folder and do the following at the command line:

    $ npm init
    $ npm install @mitchallen/grid --save

In the same folder create a file called __index.js__ with the content below:

```js
    "use strict";
    var gridFactory = require("@mitchallen/grid");
    
    var xSize = 5;
    var ySize = 10;
    var value = 100;
    var i = xSize - 1;
    var j = ySize - 1;
    
    var grid = gridFactory.Square( { x: xSize, y: ySize } );
    
	if(!grid) {
    	console.error("couldn't create grid");
	}
    
    if(! grid.isCell( i, j ) ) {
    	console.error("parameters not within grid");
    }
    
    if(! grid.set( i, j, value )) {
    	console.error("couldn't set grid value");
    }
    
    let result = grid.get( i, j );
    
    if(! result) {
    	console.error("couldn't get grid value");
    } else {
    	console.log("grid value: ", result );
    }
```
    
At the command line, execute the following:

    $ node index.js
  
An example similar to this exists on the __examples__ folder out on the repo.
  
* * *
    
## Square Methods

### create( spec )

The __create__ method is deprecated. Use __Square__ instead.

### Square( spec )

Factory method that returns a square grid object.

It takes one spec parameter that must be an object with __x__ and __y__ values specifying the size of the grid.

The __x__ and __y__ values can not be less than one (1).

The method will set xSize and ySize to 0 if no parameters are set

You can call __Square__ multiple times to create multiple grids.

    var gridFactory = require("@mitchallen/grid");
    
    var grid1 = gridFactory.Square( { x: 5, y: 10 } );
    var grid2 = gridFactory.Square( { x: 7, y: 20 } );
    
	if(!grid1 || !grid2) ...
	
### squareGrid.xSize

Returns the size of the x dimension.

	grid.xSize.should.eql(5);
	
### squareGrid.ySize

Returns the size of the y dimension.

	grid.ySize.should.eql(10);


### Square grid.isCell( x, y )

The __x__ and __y__ parameters should be zero-based coordinates ranging from  zero (0) to axis size minus one. 
 

The method is called internally by __get__.

    if(! grid.isCell( i, j ) ) {
    	console.error("parameters not within grid");
    }

### Square grid.set( x, y, value )

The __x__ and __y__ values must be greater than zero. If the parameters fail validation then a value of __false__ is returned. Otherwise __true__ is returned.

The __value__ parameter can be a number, a string or even an object.

    if(! grid.set( i, j, value )) {
    	console.error("couldn't set grid value");
    }

### Square grid.get( x, y )

The __x__ and __y__ values are passed to the __isCell__ method internally for validation. If the parameters fail validation then a __*null*__ object is returned. Otherwise the value of the cell (grid location) is returned.

The returned value can be a number, a string or even an object.

    let result = grid.get( i, j );
    
    if(! result) {
    	console.error("couldn't get grid value");
    } else {
    	console.log("grid value: ", result );
    }

### Square grid.fill(value)

Fills the grid with whatever is passed in as __value__. Value can be a number, a string or even an object. Any existing values in the grid will be replaced with the new fill value.

    let fillValue = "foo";
    
    var result = grid.fill(fillValue);
    
### Square grid.cloneArray()

Returns a clone of the internal array. This is not a reference. So changes to the cloned array should not change the original.

	let tX = 0;
	let tY = 0;
	let gridValue = 100;
	let cloneValue = 500;
	
	// Set a value in the original grid
	grid.set(tX,tY,gridValue);

	// Clone the grid	
	let arr = grid.cloneArray();
	
	// Verify value exists in clone
	arr[tX][tY].should.eql(gridValue);
	
	// Change value in clone
	arr[tX][tY] = cloneValue;
	
	// Verify new value is set in clone
	arr[tX][tY].should.eql(cloneValue);
	
	// Ensure that value does not alter original grid
	grid.get(tX,tY).should.eql(gridValue);
	
	
### Square grid.rows

Number of rows in the grid.

	var r = grid.rows;

### Square grid.rowSize(rowIndex)

	var r = grid.rowSize(1);

Size of row.

### Square grid.log()

Logs the size and contents of the internal array.

    grid.log();
    
Example output:

    size: 4
    [ [ 20, 10, 10, 10, 10 ],
      [ 10, 10, 10, 10, 10 ],
      [ 10, 10, 10, 10, 10 ],
      [ 10, 10, 10, 10, 30 ] ]
      
* * *

## Circle Grid Usage

Create a new folder and do the following at the command line:

    $ npm init
    $ npm install @mitchallen/grid-circle --save

In the same folder create a file called __index.js__ with the content below:

    "use strict";
    var gridFactory = require("@mitchallen/grid");
      
    var grid = gridFactory.Circle( { rings: 5 } );
    
	var r = 2,	// ring
		p = 4	// position
    
    if(! grid.isCell( r, p ) ) {
    	console.error("parameters not within grid");
    }
    
	var value = 4;
    
    if(! grid.set( r, p, value )) {
    	console.error("couldn't set grid value");
    }
    
    let result = grid.get( r, p );
    
    if(! result) {
    	console.error("couldn't get grid value");
    } else {
    	console.log("grid value: ", result );
    }
    
At the command line, execute the following:

    $ node index.js
    
## Methods

### Circle( spec ) 

Factory method that returns a circle grid object.

It takes one spec parameter that must be an object with a __rings__ value specifying the number of rings in the grid.

The method will normalize __rings__ to 0 if for a missing or bad parameter.

You can call __Circle__ multiple times to create multiple grids.

    var gridFactory = require("@mitchallen/grid");
    
    var grid1 = gridFactory.Circle( { rings: 6 } );
    var grid2 = gridFactory.Circle( { rings: 5 } );
    
	if(!grid1 || !grid2) ...
	
### Circle grid.rings

Returns the ring count for the grid.

	grid.rings.should.eql(5);
	
### Circle grid.ringSize(ring)

Returns the number of cells in the ring.

    let ring = 1;
    
    var result = grid.ringSize(ring);

### Circle grid.isCell( ring, position )

The __ring__ and __position__ parameters should be zero-based coordinates.

Values that will return true:

* __ring__: 0 to __rings__ minus one
* __position__: 0 to __ringSize(ring)__ minus one. 

For example if the __rings__  passed to the __create__ method is 5, then valid values for __ring__ are __0__ through __4__. 

The method is called internally by __get__.

    if(! grid.isCell( ring, position ) ) {
    	console.error("parameters not within grid");
    }

### Circle grid.set( ring, position, value )

The __ring__ and __position__ values are passed to the __isCell__ method internally for validation. If the parameters fail validation then a value of __false__ is returned. Otherwise __true__ is returned.

The __value__ parameter can be a number, a string or even an object.

    if(! grid.set( ring, position, value )) {
    	console.error("couldn't set grid value");
    }
    
### Circle grid.get( ring, position )

The __ring__ and __position__ values are passed to the __isCell__ method internally for validation. If the parameters fail validation then a __*null*__ object is returned. Otherwise the value of the cell (grid location) is returned.

The returned value can be a number, a string or even an object.

    let result = grid.get( ring, position );
    
    if(! result) {
    	console.error("couldn't get grid value");
    } else {
    	console.log("grid value: ", result );
    }
    
### Circle grid.fill(value)

Fills the grid with whatever is passed in as __value__. Value can be a number, a string or even an object. Any existing values in the grid will be replaced with the new fill value.

    let fillValue = "foo";
    
    var result = grid.fill(fillValue);

* * *

### Circle grid.cloneArray()

Returns a clone of the internal array. This is not a reference. So changes to the cloned array should not change the original.

	let ring = 0;
	let pos = 0;
	let gridValue = 100;
	let cloneValue = 500;
	
	// Set a value in the original grid
	grid.set(ring,pos,gridValue);

	// Clone the grid	
	let arr = grid.cloneArray();
	
	// Verify value exists in clone
	arr[ring][pos].should.eql(gridValue);
	
	// Change value in clone
	arr[ring][pos] = cloneValue;
	
	// Verify new value is set in clone
	arr[ring][pos].should.eql(cloneValue);
	
	// Ensure that value does not alter original grid
	grid.get(ring,pos).should.eql(gridValue);
	
### Circle grid.log()

Logs the size and contents of the internal array.

    grid.log();
    
Example output:

    size: 3
    [ [ 8 ],
      [ 8, 8, 8, 8, 8, 8 ],
      [ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8 ] ]

* * *

## Examples

You can find examples in the repos listed below in the __examples__ folder.

### Browser Client Example

You can reference a minimized client version inside an HTML script tag using one of these URL's:

* https://cdn.rawgit.com/mitchallen/grid/v0.1.21/dist/grid.min.js
* https://unpkg.com/@mitchallen/grid@0.1.21/dist/grid.min.js

Adjust the URL's depending upon what version is available

The __rawgit.com__ URL will pull based on the version from GitHub.

The __unpkg.com__ URL will pull based on the version in npmjs.com.

See http://rawgit.com and https://unpkg.com for other ways to retrieve the file. 

The factory function can be retrieved from window.MitchAllen.Grid:

    var factory = window.MitchAllen.Grid;
    var xSize = 10, ySize = 5;
    var sg = factory.Square( { x: xSize, y: ySize } );

Example:

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Grid Example</title>
        <meta name="description" content="Grid Example">
        <!-- either cdn should work 
        <script src="https://cdn.rawgit.com/mitchallen/grid/v0.1.21/dist/grid.min.js"></script>
    -->
        <script src="https://unpkg.com/@mitchallen/grid@0.1.21/dist/grid.min.js"></script>
        <script>
          var factory = window.MitchAllen.Grid;
          console.log(factory);
          var xSize = 10, ySize = 5;
          var sg = factory.Square( { x: xSize, y: ySize } );
          sg.log(); 
        </script>
      </head>
      <body>
        <h1>Grid Example</h1>
      </body>
    </html>

* * *

## Testing

To test, go to the root folder and type (sans __$__):

    $ npm test
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/grid.git](https://bitbucket.org/mitchallen/grid.git)
* [github.com/mitchallen/grid.git](https://github.com/mitchallen/grid.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.23

* replaced internal square with __@mitchallen/grid-square__

#### Version 0.1.22

* square and cirlce modules now uses @mitchallen/git-core
* remove modules/base.js which is replaced by grid-core

#### Version 0.1.21

* Client must now use __window.MitchAllen.Grid__ to reference factory function.

#### Version 0.1.20

* Updated CDN URL

#### Version 0.1.19

* Checked in dist modules

#### Version 0.1.18

* added sub-modules to distribution

#### Version 0.1.17

* main now points to dist/grid

#### Version 0.1.16

* Updated client example to use unpkg.com

#### Version 0.1.15

* Fixed version history

#### Version 0.1.14

* added uglify and babel es2015 tasks
* updated client example to use CDN
* Removed dist from .npmignore so dist files can be accessed via unpkg.com

#### Version 0.1.13

* added browserify task
* created client example

#### Version 0.1.12

* added __rows__ method to base class

#### Version 0.1.11

* Refactored code
* added __Triangle__ method for future expansion

#### Version 0.1.10

* added experiment __Hexagon__ method

#### Version 0.1.9

* __Square__ now replaces __create__
* added __create__ deprecation warning
* Added __Circle__ grid method

#### Version 0.1.8

* removed redundant negative check

#### Version 0.1.7

* __create__ now sets defaults if parameters invalid instead of returning null

#### Version 0.1.6

* added the __xSize__ and __ySize__ properties

#### Version 0.1.5

* added __log__ method

#### Version 0.1.4

* added __cloneArray__ method

#### Version 0.1.3

* added __fill__ method

#### Version 0.1.2

* updated readme

#### Version 0.1.1

* updated example to use published package
* updated description in package.json

#### Version 0.1.0 

* initial release

* * *
