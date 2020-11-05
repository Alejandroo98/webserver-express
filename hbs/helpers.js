//helpers
const hbs = require('hbs')
hbs.registerHelper('getYear' , () => {
    return new Date().getUTCFullYear()
})

hbs.registerHelper( 'mayusculas' , ( texto ) => {
    
    let palabras = texto.split(' ');
    palabras.forEach((element , ind)=> {
        palabras[ind] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    });

    return  palabras.join(' ');
})
