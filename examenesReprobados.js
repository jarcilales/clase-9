

function examenesRepetir(cantidadDeExamenes, calificaciones){
    let examenes=0;
    for(let i=0; i<cantidadDeExamenes;i++){
        if(calificaciones[i]<6)
        examenes++
    }
    console.log(`Paco va a repetir ${examenes} examenes`)
}

examenesRepetir(3,[6,5,7])