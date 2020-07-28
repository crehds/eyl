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

  async TypesUsers() {
    const TypesUsers = await this.mysqlDB.getTypesUser();
    return TypesUsers || []
  }
}

module.exports = LoginService;