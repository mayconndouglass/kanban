import { Router } from "express"
import { CreateTaskControoler } from "@/use-case/task/create-task/create-task-controller"

const router = Router()

const createTaskController = new CreateTaskControoler()

router.post("/task/create", createTaskController.handle)

export default router
