## Installation

```bash
npm install everything-services
```

## Usage

```javascript
const { formatDate, compareDates } = require('everything-services');
```

### Date Formatting

```javascript
formatDate('en', '2024-03-20', 'YYYY-MM-DD'); // return "2024-03-20"
formatDate('th', '2024-03-20', 'BBBB'); // return B.E. year

// returns Day.js object
const dateObj = formatDate('en', '2024-03-20');
```

### Date Comparison

```javascript
const result = compareDates('2024-03-20', '2024-03-21'); // return Boolean
```
