import  express  from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'

/*vamos por o path para conseguirmos usar a pasta public e colcocar html, css etc */
import path from 'path'

//importando a mainroutes
import mainRoutes from './routes/index'

//dotenv para nossa porta
dotenv.config()

//configurendo servidor
const server = express()

//configurando o mustache
server.set('view engine','mustache')
//diretorio em que colocaremos nosso arquivos mustache
server.set("view",path.join(__dirname, "views"))
//template engines do mustache
server.engine('mustache',mustache())
//diretorio da nossa pasta estática
server.use(express.static(path.join(__dirname,"../public")))
//habilitando o servidor
server.listen(process.env.PORT)