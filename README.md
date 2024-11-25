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
services.dayFormatter.setDate('2023-01-16').format() // return date on format DD/MM/YYYY
services.dayFormatter; // return date now on dayjs
services.dayFormatter.setDate('2023-01-16').locale('th').format('DD MMMM BBBB'); // return 16 มกราคม 2566
```
