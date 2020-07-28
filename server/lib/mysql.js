const MySQL = require("mysql");
const { config_mysql: config } = require("../config/");
const debug = require("debug")("app:mysql");

class MySqlLib {
  constructor() {
    this.client = new MySQL.createConnection({
      host: config.dbHostMysql,
      user: config.dbUserMysql,
      password: config.dbPasswordMysql,
      database: config.dbNameDBMysql,
    });
  }

  connect() {
    return this.client.connect((err) => {
      if (err) return err;
      debug(`Connected succesfully to mysql with id: ${this.client.threadId}`);
    });
  }

  query(sql, args) {
    this.connect();
    return new Promise((resolve, reject) => {
      this.client.query(sql, args, (err, rows) => {
        debug("Query results...");
        if (err) return reject(err);
        this.client.end();
        return resolve(rows);
      });
    });
  }

  async login(table) {
    try {
      const login = await this.query(`select * from ${table}`).then(
        (rows) => rows
      );
      return login;
    } catch (error) {
      return error;
    }
  }
  
  // async createUser(user) {
    
  // }

  getTypesUser() {
    return this.query(`select * from tipo_usuario`).then(rows => rows)
  }
}

module.exports = MySqlLib;
