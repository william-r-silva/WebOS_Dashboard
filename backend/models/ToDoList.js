const db = require('../dbConnection');

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
    
    addListItem(listItem){
        return new Promise((resolve, reject) => {
            try{
                db.run('INSERT INTO toDoItem (description, isDone) VALUES (?, ?)', [listItem.description, listItem.isDone])
                resolve(db.lastID);
             
            }catch(e){
                console.log(e);
                reject();
            }
        })
    }

    setListItem(listItem){
        return new Promise(async (resolve, reject) => {
            try{
                await db.run(`UPDATE toDoItem 
                        SET description = ?, isDone = ?
                        WHERE idToDoItem = ?`, [listItem.description, listItem.isDone, listItem.idToDoItem])
                resolve(db.lastID);
            }catch(e){
                console.log(e);
                reject();
            }
        });
    }

    getAllItems(){
        return new Promise(async (resolve, reject) => {
            try{
                var rows = await db.getArray('SELECT * FROM toDoItem', [])
                resolve(rows);
            }catch(e){
                console.log(e);
                reject();
            }
        })
    }
}

module.exports = ToDoList;