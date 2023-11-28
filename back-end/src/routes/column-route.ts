import { Router } from "express"
import { CreateColumnController } from "@/use-case/column/create-column-controller"

const router = Router()

const createColumnController = new CreateColumnController()

router.post("/column/create", createColumnController.handle)

export default router
