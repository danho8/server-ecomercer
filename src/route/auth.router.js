import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import AuthController from "../controllers/auth.controller.js";
import sequelize from "../configs/sequelize.config.js";
const authRouter = express.Router();
import User from "../models/user.models.js";

// Create a new router
// authRouter.use(cors()); // Use CORS
authRouter.get("/", (req, res) => {
  res.send("Auth router");
});

// api login

authRouter.post("/register", AuthController.register);
// Route for user registration
// authRouter.post('/register', async (req, res) => {
//   try {
  
//     const { email, password } = req.body;

//     // Create a new user
//     const newUser = await User.create({  email, password });
//     console.log(email, "auth router");

//     res.status(201).json(newUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// Sync the Sequelize models with the database
// sequelize.sync().then(() => {
//   console.log('Database synced');
//   // Start the server
//   app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });
// });

export default authRouter;
