# mr-todos
## Overview

A CLI that filters and returns TODO's.

## Installation

Ensure you have Node.js installed, then download or clone the repository in your PC and start the project using.
This command needs to be executed only once at the beginning, as it automatically installs all necessary dependencies and creates the CLI link.

```
npm initialize
```

### *OPTIONS NEEDED TO RETURN THE DATA ACCORDING TO THE EXERCISE REQUIREMENTS*

Returns the first 20 even numbered TODO's

```
mr-todos -n 20 -e
```

## Usage
```
mr-todos [options]
```

For basic usage and return all TODO's, execute in you Command Line:
```
mr-todos 
```

## Options
### Return max qunatity
Selects the first <amount> of items. If not specified, returns all.
```
-n, --number <integer>
```
Example:
```
mr-todos -n 20.
```

### Return even numbered TODO's
Selects only even numbered ID's of TODO's. If not specified, selects all.
```
-e, --even
```
Example:
```
mr-todos -e
```

### Return odd numbered TODO's
Selects only odd numbered ID's of TODO's. If not specified, selects all.
```
-o, --odd
```
Example
```
mr-todos -o
```
### Important
*-e and -o cannot be set at the same time*

### Return completed status TODO's
Selects completed or not completed TODO's. If not specified, returns all.
```
-c, --completed <boolean>
```
Example:
```
mr-todos -c true
```

## Tests
To run tests enter the following command:
```
npm test
```