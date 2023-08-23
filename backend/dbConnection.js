const sqlite3 = require('sqlite3').verbose();
const util = require('util');

class Database{
    static connection;
    static lastID;

    static openConnection() {
        if(Database.connection != null) return;

        Database.connection = new sqlite3.Database('mydatabase.db', (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log('Connection opened successfully');
            }
        });
    }

    static async getSingleRow(sql, params = []){
        return new Promise(async (resolve, reject) => {
            try{
                Database.openConnection();
        
                const getAsync = util.promisify(Database.connection.get.bind(Database.connection));
                var singleRow = await getAsync(sql, [...params]);
                resolve(singleRow);

            }catch(e){
                reject(e);
            }finally{
                Database.endConnection();
            }
        })
    }

    static async getArray(sql, params = []){
        return new Promise(async (resolve, reject) => {
            try{
                Database.openConnection();

                const getAllAsync = util.promisify(Database.connection.getAll.bind(Database.connection));
                var rows = await getAllAsync(sql, [...params]);
                resolve(rows);

            }catch(e){
                reject(e);
            }finally{
                Database.endConnection();
            }
        })
    }

    static async run(sql, params = []){
        return new Promise(async (resolve, reject) => {
            try{
                Database.openConnection();

                await Database.connection.run(sql, [...params]);
                Database.lastID = Database.connection.lastID
                resolve(Database.connection.lastID);
                
            }catch(e){
                reject(e);
            }finally{
                Database.endConnection();
            }
        })
    }

    static endConnection() {
        Database.connection.close(err => {
            if (err) {
                console.error(err.message);
            }
            console.log('Conexão com o banco de dados fechada.');
        });
    }
}

module.exports = Database;