const db = require('../database/dbConnection');

class Notes{
    constructor(){
        try{
            db.run(`
                CREATE TABLE IF NOT EXISTS notes (
                    idNotes INTEGER PRIMARY KEY AUTOINCREMENT,
                    title TEXT,
                    text TEXT

                )
            `);
        }catch(e){
            console.log(e);
        }
    }

    get(req, res){

    }

    add(req, res){

    }

    set(req, res){

    }
}

module.exports = Notes;