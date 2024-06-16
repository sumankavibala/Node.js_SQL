import "reflect-metadata" ;
import { DataSource } from "typeorm";
import { StudentDetails } from "../createStudents/createStudent.model";

const entity: any[] = [StudentDetails];

export const AppDataSource = new DataSource({
  type: "mssql",
  host: "localhost",
  requestTimeout: 30000,
  port: 1433,
  username: "test_user_1",
  password: "123",
  database: "test_db",
  synchronize: true,
  logging: false,
  entities: entity,
  options:{
    encrypt: false
  }
});

AppDataSource.initialize()
  .then((res) => console.log("sql server connected succesfully"))
  .catch((error) => console.log(error));
