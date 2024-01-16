// import { Router } from "express";
import AuthServices from "../services/auth.service.js";
class AuthController {
  //   constructor() {
  //     this.router = Router();
  //     this.init();
  //   }

  //   init() {
  //     this.router.post("/login", this.login);
  //     this.router.get("/register", this.register);
  //   }

  async login(req, res) {
    // ...
  }

  async register(req, res, next) {
    // res.send("register controller");
    // ...
    try {
    const  useData = await req.body;
    console.log(useData, "controller");
      const user = await AuthServices.registerService(useData);
      res.status(201).json({
        message: "User registered successfully",
        user,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export default new AuthController();
