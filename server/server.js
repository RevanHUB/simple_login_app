const express = require('express')
const users = require('./users.js')
const app = express()
const port = 3001;
const cors = require('cors');

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));


app.get('/', cors(), (req, res) => res.send('Hello User!'))
app.get('/users', (req, res) => {
  res.send(users)
})
app.get('/checkLogin/:name&:password', cors(), (req, res) => {
    let name = req.params.name;
    let password = req.params.password;
    var check = users.find((users) => users.username === name && users.password === password);
    res.send(check)
  })
app.listen(port, () => console.log(`Login App listening on port ${port}!`))