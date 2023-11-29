import { Router } from "express"
import { RegisterUserController } from "@/use-case/user/register-user/register-user-controller"
import { FetchAllUserProjectsController } from "@/use-case/user/fetch-all-projects/fetch-all-user-projects-controller"

const router = Router()

const registerUserController = new RegisterUserController()
const fetchAllUserProjectsController = new FetchAllUserProjectsController()

router.post("/user/register", registerUserController.handle)
router.get("/user/:id/projects", fetchAllUserProjectsController.handle)

export default router
