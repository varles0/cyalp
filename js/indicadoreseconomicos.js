//const urlAPIindicadores = 'https://mindicador.cl/api/uf/20-05-2020'
const urlAPIindicadores = 'https://mindicador.cl/api'


const indicadores = ["uf", "utm", "dolar"]
const fechaHoy = new Date()

//fechaHoy.getDate() + '-' + (1 + fechaHoy.getMonth()) + '-' + fechaHoy.getFullYear()



fetch(`${urlAPIindicadores}`)
  .then(response => response.json())
  .then(({uf, utm, dolar}) => 
  {
    const arr = []
    arr.push(uf)
    arr.push(utm)
    arr.push(dolar)
    //console.log(arr)

    //arr.forEach(ele=>{console.log(ele.valor)})

    actualizarIndicadores(arr)







  });

// fetch('https://mindicador.cl/api')
//   .then(response => {


//     console.log(response.ok)
//     //console.log(Object.getPrototypeOf(response))
//     //console.log(response.json())
//     return response.json()

//   }).then(response => {console.log(console.log(response))})

  
  

function actualizarIndicadores(indicadores)
{

  let etiquetasIndicadores = document.getElementsByClassName('indicador')

  indicadores.forEach(({valor}, index)=> etiquetasIndicadores[index].innerHTML = `$${valor}`)


}