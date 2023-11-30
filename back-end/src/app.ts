import express from "express"
import cors from "cors"

import routes from "./routes"

export const app = express()

app.use(express.json())
app.use(cors())

app.use(routes.projectRoutes)
app.use(routes.userRoutes)
app.use(routes.columnRoutes)
app.use(routes.taskRoutes)

