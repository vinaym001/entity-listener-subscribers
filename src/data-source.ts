import "reflect-metadata"
import { DataSource } from "typeorm"
import { Student } from "./entity/Student"
import { StudentSubscriber } from "./subscribers/StudentSubscriber";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "vider",
    password: "vider123",
    database: "vider",
    synchronize: true,
    logging: false,
    entities: [Student],
    migrations: [],
    subscribers: [StudentSubscriber],
});
