const db = require('../database/dbConnection');

class Album{
    constructor(){
        try{
            db.run(`
                CREATE TABLE IF NOT EXISTS album (
                    'text' TEXT
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

module.exports = Album;