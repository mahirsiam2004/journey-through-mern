const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('users server is available');
})

// TODO: save to the database
const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com' },
    { id: 2, name: 'Sabnoor', email: 'sabnoor@gmail.com' },
    { id: 3, name: 'Sabila noor', email: 'sabila@gmail.com' },
]

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log('post method called', req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`Users Server started on Port: ${port}`)
})