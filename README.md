## Installation

```bash
npm install all-everything-services
```

## Usage

```javascript
const services = require('all-everything-services');
```

### Date Formatting
```javascript
services.dayFormatter().format()  // returns current date as "DD/MM/YYYY"

services.dayFormatter('2023-01-16').format() // returns "16/01/2023"

services.dayFormatter('2024-01-16').locale('th').format('DD MMMM BBBB') // returns date format with thai language "16 มกราคม 2567"
```
