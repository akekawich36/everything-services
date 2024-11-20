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
formatDate('2024-03-20', 'YYYY-MM-DD'); // return "2024-03-20"
formatDate(false); // return date now
formatDate('2024-03-20', 'BBBB', 'th'); // return B.E. year
```

### Date Comparison

```javascript
const result = compareDates('2024-03-20', '2024-03-21'); // return Boolean
```
