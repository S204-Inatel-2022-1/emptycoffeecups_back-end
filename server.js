// require('./src/infrastructure/database').startConnection();
const app = require('./src/infrastructure/rest_server');

const port = process.env.PORT || 3001;
require('dotenv').config();

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`REST server running on port ${port}...`);
});
