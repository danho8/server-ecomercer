import User from "../models/user.models.js";

class AuthRepositories {
  async createUser(userData) {
    try {
      const { email, password } = userData;
      const user = await User.create({
        email,
        password,
      });
      console.log(user, "repositories");
      return user;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new AuthRepositories();
