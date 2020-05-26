//const urlAPIindicadores = 'https://mindicador.cl/api/uf/20-05-2020'
const urlAPIindicadores = 'https://mindicador.cl/api'


const indicadores = ["uf", "utm", "dolar"]
const fechaHoy = new Date()

//fechaHoy.getDate() + '-' + (1 + fechaHoy.getMonth()) + '-' + fechaHoy.getFullYear()



function formarNodoIndicadores(){

    function datosIndicador(indicador){
        
        let request = new XMLHttpRequest();
        request.open('GET', `${urlAPIindicadores}/${indicador}/${fechaHoy.getDate()}-${1+fechaHoy.getMonth()}-${fechaHoy.getFullYear()}`);
        request.responseType = 'json';
        request.send();
        
        return request
    
    }


    
    let jsonIndicadores = []
    
    jsonIndicadores = indicadores.forEach(element => datosIndicador(element));
    

    
    //if (datosIndicadores() === null) return null
    
    
    
    
    
    
    
    
    
    
}