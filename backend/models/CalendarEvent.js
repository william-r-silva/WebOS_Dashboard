const db = require('../database/dbConnection');

class CalendarEvent{
    constructor(){
        try{
            db.run(`
                CREATE TABLE IF NOT EXISTS calendarEvent (
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

module.exports = CalendarEvent;