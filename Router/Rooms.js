import express from 'express'
const router = express.Router()
import RoomController from '../controller/user.js'

router.post('/createRoom', RoomController.createRoom)

router.post('/bookRoom', RoomController.BookRoom)

router.get('/getBookedRooms', RoomController.getBookedRooms)
router.get('/getBookedCustomers', RoomController.getBookedCustomers)
router.get('/getAllCustomers', RoomController.getAllCustomers)
export default router