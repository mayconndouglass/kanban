import { CreateProjectController } from "../use-case/create-project/create-project-controller"
import { Router } from "express"

const router = Router()

const createProjectController = new CreateProjectController()

router.post("/project/create", createProjectController.handler)

export default router
