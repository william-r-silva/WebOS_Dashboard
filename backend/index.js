const express = require('express');

const Dashboard = require('./models/Dashboard');
const CalendarEvent = require('./models/CalendarEvent');
const ToDoList = require('./models/ToDoList');
const Comment = require('./models/Notes');
const Album = require('./models/Album');

const PORT = 3000;
const app = express();

app.use(express.json());

/* Models */

const dashboard = new Dashboard();
const calendarEvent = new CalendarEvent();
const toDoList = new ToDoList();
const comment = new Comment();
const album = new Album();

/* Dashboard */

app.get('/dashboard/', (req, res) => {
    dashboard.getAll(req, res);
});

app.post('/dashboard/', (req, res) => {
    dashboard.add(req, res);
});

app.put('/dashboard/', (req, res) => {
    dashboard.set(req, res);
});

app.delete('/dashboard/', (req, res) => {
    dashboard.del(req, res);
});

/* ToDoList */

app.get('/toDoList/', (req, res) => {
    toDoList.getAll(req, res);
});

app.post('/toDoList/', (req, res) => {
    toDoList.add(req, res);
});

app.put('/toDoList/', (req, res) => {
    toDoList.set(req, res);
});

/* Comment */

app.get('/comment/', (req, res) => {
    comment.get(req, res);
});

app.post('/comment/', (req, res) => {
    comment.add(req, res);
});

app.put('/comment/', (req, res) => {
    comment.set(req, res);
});

/* Default */

app.get('/', (req, res) => {
    res.send('Está funcionando! Livia volta aqui!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
