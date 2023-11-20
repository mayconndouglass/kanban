import { Router } from "express"
import { CreateColumnController } from "@/use-case/column/create-column-controller"

const router = Router()

const createColumnController = new CreateColumnController()

router.post("/create/column", createColumnController.handle)

export default router
