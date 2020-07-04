const MySqlLib = require("../lib/mysql");

class LoginService {
  constructor() {
    this.collection = "login"
    this.mysqlDB = new MySqlLib();
  }

  async getLogin() {
    const login = await this.mysqlDB.login(this.collection);
    return login || [];
  }
}

module.exports = LoginService;