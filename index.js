const App = require('./lib/app').default;

const port = process.env.PORT || 3000

App.listen(port, () => console.log(`Server listening on port ${port}`));