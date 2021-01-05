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

```js
"use strict";
    
let gridFactory = require("@mitchallen/connection-grid");
    
let xSize = 5;
let ySize = 6;

let grid = gridFactory.Square({ x: xSize, y: ySize });
```

## Browser Usage:

You can reference a minimized client version inside an HTML script tag using one of these URL's:

Example:

```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Connection-Grid Example</title>
        <meta name="description" content="Connection Grid Example">
        <script src="https://unpkg.com/@mitchallen/connection-grid@0.1.33/dist/connection-grid.min.js"></script>
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
```
    
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

#### Version 0.1.28

* replaced modules/square.js with @mitchallen/connection-grid-square

#### Version 0.1.27

* square now uses @mitchallen/grid-square

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
