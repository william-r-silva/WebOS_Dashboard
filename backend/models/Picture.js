const db = require('../database/dbConnection');

class Picture{
    constructor(){
        try{
            db.run(`
                CREATE TABLE IF NOT EXISTS picture (
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

module.exports = Picture;