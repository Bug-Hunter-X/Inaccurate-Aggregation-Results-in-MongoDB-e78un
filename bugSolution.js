```javascript
// Corrected aggregation pipeline
db.collection.aggregate([
  { $match: { /*some filter*/ } },
  { $group: { _id: "$field", total: { $sum: 1 } } }, // corrected this line
  { $sort: { total: -1 } },
  { $limit: 10 }
]);
```