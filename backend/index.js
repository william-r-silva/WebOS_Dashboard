const express = require('express');
const ToDoList = require('./models/ToDoList');

const PORT = 3000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Está funcionando!');
});

app.get('/toDoList/', async (req, res) => {
    const toDoList = new ToDoList();
    const listItems = await toDoList.getAllItems();
    res.status(200).send(listItems);
});

app.post('/toDoList/', async (req, res) => {
    const toDoList = new ToDoList();
    const lastId = await toDoList.addListItem(req.body);
    res.send(200, lastId);
});

app.put('/toDoList/', async (req, res) => {
    const toDoList = new ToDoList();
    const lastId = await toDoList.setListItem(req.body);
    res.send(200, lastId);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
