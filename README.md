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
services.dayFormetter; // return date now on dayjs
services.dayFormetter.setDate('2023-01-16').locale('th').format('DD MMMM BBBB'); // return 16 มกราคม 2566
```
