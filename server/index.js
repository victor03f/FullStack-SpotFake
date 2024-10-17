import { createServer } from 'node:http'


const servidor = createServer((request, response)=> {
    console.log('qualquer coisa')
    response.write('funciona 2')
    return response.end()
})

servidor.listen(8000)