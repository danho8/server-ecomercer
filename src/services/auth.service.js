import { validateEmail, validatePassword } from "../utils/validation.js";
import AuthRepositories from "../repositories/auth.repositories.js";
import e from "cors";

class AuthService {
  constructor() {
    this.authenticated = false;
  }

  login(cb) {
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  async registerService(userData) {
    this.authenticated = true;
    try {
      console.log(userData, "auth service");
      // const { email, password } = userData;
      const getAllData = await AuthRepositories.createUser(userData);
      return getAllData;
    } catch (err) {
      console.log(err);
    }
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new AuthService();
