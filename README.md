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
services.dayjs()  // returns current date on dayjs
services.dayjs('2024').format('BBBB')  // returns 2567 (B.E. years)
services.dayjs('2024-01-16').locale('th').format('DD MMMM BBBB')  // returns 16 มกราคม 2567
```
