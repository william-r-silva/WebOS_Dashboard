const db = require('../database/dbConnection');

class Dashboard{
    constructor(){
        try{
            db.run(`
                CREATE TABLE IF NOT EXISTS dashboard (
                    idDashboard INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT
                )
            `);
        }catch(e){
            console.log(e);
        }
    }

    getAll(req, res){
        try{
            db.all( `SELECT * FROM dashboard`, [],
                (err, rows) => {
                    if(err){
                        throw err;
                    }

                    res.status(200).send(rows);
                }
            );
        }catch(e){
            console.log(e);
            res.status(500).send();
        }
    }

    add(req, res){
        try{
            db.run( `INSERT INTO dashboard (name) values (?)`, [req.body.name],
                (err) => {
                    if(err){
                        throw err;
                    }

                    res.status(200).send(this.lastID);
                }
            );
        }catch(e){
            console.log(e);
            res.status(500).send();
        }
    }

    set(req, res){
        try{
           db.run( `UPDATE dashboard SET name = (?) WHERE idDashboard = ?`, [req.body.name, req.body.idDashboard],
                (err) => {
                    if(err){
                        throw err;
                    }

                    res.status(200).send();
                }
            );
        }catch(e){
            console.log(e);
            res.status(500).send();
        }
    }

    del(req, res){
        try{
           db.run( `DELETE FROM dashboard WHERE idDashboard = ?`, [req.body.idDashboard],
                (err) => {
                    if(err){
                        throw err;
                    }

                    res.status(200).send();
                }
            );
        }catch(e){
            console.log(e);
            res.status(500).send();
        }
    }
}

module.exports = Dashboard;