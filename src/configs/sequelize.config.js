import { Sequelize } from "sequelize";
import "dotenv/config";

const SQL_DATA_NAME = process.env.SQL_DATA_NAME;
// const SQL_PASSWORD = process.env.SQL_PASSWORD;
const SQL_PASSWORD = "";

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  database: SQL_DATA_NAME,
  password: SQL_PASSWORD,
});
// truyền thông tin cấu hình trực tiếp vào hàm khởi tạo của Sequelize. Điều này giúp làm cho mã nguồn ngắn gọn và dễ đọc. Tuy nhiên, nếu bạn có nhiều cấu hình hoặc muốn giữ thông tin cấu hình tách biệt, bạn có thể cảm thấy khó theo dõi hơn.

// const sequelize = new Sequelize(
//   SQL_DATA_NAME,
//   process.env.DB_USER,
//   SQL_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: 'mysql',
//   }
// );

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;
