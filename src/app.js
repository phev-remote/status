import express from 'express'
import bodyParser from 'body-parser'

const App = express()

App.use(bodyParser.json())

App.get('/', (req,res) => res.json({Hello : "hello"}).status(200))

export default App