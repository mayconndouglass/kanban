import { Router } from "express"
import { RegisterUserController } from "@/use-case/user/register-user-controller"

const router = Router()

const registerUserController = new RegisterUserController()

router.post("/register/user", registerUserController.handle)

export default router
