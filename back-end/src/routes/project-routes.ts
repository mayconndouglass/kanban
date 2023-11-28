import { CreateProjectController } from "../use-case/project/create-project/create-project-controller"
import { Router } from "express"

const router = Router()

const createProjectController = new CreateProjectController()

router.post("/project/create", createProjectController.handle)

export default router
