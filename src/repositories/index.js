class AuthRepostories {
  constructor() {
    this.auth = new Auth();
  }

  async login(email, password) {
    const user = await this.auth.login(email, password);
    return user;
  }

    async register(email, password) {
        const user = await this.auth.register(email, password);
        return user;
    }

}

export default new AuthRepostories();