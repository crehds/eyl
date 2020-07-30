const MySqlLib = require("../lib/mysql");

class LoginService {
  constructor() {
    this.collection = "login";
    this.mysqlDB = new MySqlLib();
  }

  async getLogin() {
    const login = await this.mysqlDB.login(this.collection);
    return login || [];
  }

  async TypesUsers() {
    const TypesUsers = await this.mysqlDB.getTypesUser();
    return TypesUsers || [];
  }

  async getUsers() {
    const users = await this.mysqlDB.getUsers();
    return users || [];
  }

  async createUser({ user, login }) {
    const userCreated = await this.mysqlDB.createUser({ user });
    const loginCreated = await this.mysqlDB.createLogin(
      { login },
      userCreated.insertId
    );
    return { userCreated, loginCreated } || [];
  }
}

module.exports = LoginService;
