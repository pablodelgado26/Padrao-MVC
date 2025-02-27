import express from 'express';
import tarefaController from '../controllers/tarefaController.js';

const router = express.Router();

router.get('/', tarefaController.getAll);