const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {
      id: 1,
      firstName: 'Purvil',
      lastName: 'Jain'
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Doe'
    },
    {
      id: 3,
      firstName: 'Virat',
      lastName: 'Kohli'
    }
  ];
  res.json(customers);
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
