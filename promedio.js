

function promedioSuficiente(cantidad, calificaciones) {
    let total = 0;
    let promedio = 0;
    for(let i = 0; i<cantidad;i++){
        total+=calificaciones[i]
    }
    promedio=total/cantidad;
    if(promedio>=8)
    return true

    return false
    
}

console.log(promedioSuficiente(3,[9,9,7]))