

function asistencia(dias, asistencia) {
    let asistenciaEfectiva = 0;
    for(let i=0;i<dias;i++){
        if(asistencia[i]==true)
        asistenciaEfectiva++
    }
    return (asistenciaEfectiva/dias)*100
}

console.log(asistencia(3,[true,false,true]))