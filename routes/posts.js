import express from 'express'

//controllers
import { 
    deleteTodo,
    getTodo,
    insertTodo,
    updateTodo,
    
} from '../controllers/posts.js';

const router = express.Router();

//New User insert api
router.post('/insertTodo',insertTodo)
router.post('/getTodo',getTodo)
router.post('/updateTodo',updateTodo)
router.post('/deleteTodo',deleteTodo)





export default router;