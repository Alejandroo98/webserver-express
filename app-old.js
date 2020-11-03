//Esto es lo que te ayuda a hacer express pero muucho mas facil 
const http = require('http');

http.createServer( ( req , res ) => {

    res.writeHead( 200 , { 'Content-Type' : 'application/json' } );
    
    let salida = {
        nombre : 'Alejo',
        age : '22',
        url : req.url
    }
    

    res.write(JSON.stringify( salida ))
    res.end()
    
})
.listen(3000);

console.log('Escuchand en el puerto 3000');