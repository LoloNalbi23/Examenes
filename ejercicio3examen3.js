const personas = [  { nombre: 'Juan', edad: 30 },
                    { nombre: 'María',edad: 25 },
                    { nombre: 'Pedro', edad: 35 } ];
let names = [];
personas.map((n)=>{
        let nombres = ''
        nombres += n.nombre.toUpperCase()
        names.push(nombres)
    })
console.log(names)