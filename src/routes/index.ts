import { Router } from "express"
//importando os controllers
import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/searchControllers'

//criando a rota
const router = Router()

//criando as rotas
router.get('/',PageController.home)
router.get('/dogs',PageController.dogs)
router.get('/cats',PageController.cats)
router.get('/fishes',PageController.fishes)

//exportando a rota
export default router