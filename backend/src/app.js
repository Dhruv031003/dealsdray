import express from "express";
import healthCheckRouter from "./routes/healthCheck.route.js";
import cookieParser from "cookie-parser";

const app = express();

//Common middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

import loginRouter from "./routes/login.routes.js";
import employeeRouter from "./routes/employee.routes.js";

app.use("/api/v1/healthCheck", healthCheckRouter);
app.use("/api/v1/login", loginRouter);
app.use("/api/v1/employee", employeeRouter);

export { app };