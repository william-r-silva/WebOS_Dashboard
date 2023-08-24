const db = require('../database/dbConnection');

class ToDoList{
    constructor(){
        try{
            db.run(`
                CREATE TABLE IF NOT EXISTS toDoItem (
                    idToDoItem INTEGER PRIMARY KEY AUTOINCREMENT,
                    description TEXT,
                    isDone TINYINT
                )
            `);
        }catch(e){
            console.log(e);
        }
    }

    getAllItems(req, res){
        try{            
            db.all('SELECT * FROM toDoItem', [], (err, rows) => {
                if (err) {
                    throw err;
                }

                res.status(200).send(rows);
            })

        }catch(e){
            console.log(e);
        }
    }
    
    addListItem(req, res){
        try{
            var listItem = req.body;
            db.run(
                'INSERT INTO toDoItem (description, isDone) VALUES (?, ?)', 
            [
                listItem.description, 
                listItem.isDone
            ], (err) => {
                if (err) {
                    throw err;
                }

                res.status(200).send(this.lastId);
            });
        }catch(e){
            console.log(e);
        }
    }

    setListItem(req, res){
        try{
            var listItem = req.body;
            db.run(
                `UPDATE toDoItem 
                SET description = ?, isDone = ?
                WHERE idToDoItem = ?`, 
            [
                listItem.description, 
                listItem.isDone, 
                listItem.idToDoItem
            ], (err) => {
                if (err) {
                    throw err;
                }
                
                res.status(200).send(this.lastId);
            });
        }catch(e){
                console.log(e);
        }
    }
}

module.exports = ToDoList;