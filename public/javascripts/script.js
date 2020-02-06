let placesOriginal = []
let placesFiltered = []
let presupuesto = 500

let images = [
"tacos1.jpg",
"tacos2.jpg",
"tacos3.jpg",
"tacos4.jpg",
"tacos5.jpg",
"tacos6.jpg",
"tacos7.jpg",
"tacos8.jpg",
"tacos9.jpg",
"tacos10.jpg",
"tacos11.jpg",
"tacos12.jpg",
"tacos13.jpg",
"tacos14.jpg",
"tacos15.jpg",
]

const showPlaces = places => {
  places.forEach(place => {
    const n = Math.floor( Math.random() * images.length)
    const $place = document.createElement('div')
    const card = document.createElement('div')
    card.className = "card col-xs-10 col-sm-3 col-md-3 col-lg-3 m-3 "
    card.style.padding = "5px"
    card.innerHTML = `
      <img src="/images/${images[n]}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${place.name}</h5>
        <p class="card-text">${place.location.address}</p>
        <hr size=5>
        <p class="card-text"><b>Costo promedio: </b> $${place.avgPrice}</p>
        <p class="card-text"><b>Tiempo de espera: </b> ${place.waitTime}</p>
        <a target="_blank" href="https://www.google.com.mx/maps/dir//${place.location.coordinates[1]},${place.location.coordinates[0]}/@${place.location.coordinates[1]},${place.location.coordinates[0]},15z" class="btn btn-danger" style="background-color:#ef5754; width:50%;">Ir</a>
      </div>
    `
    document.querySelector('#places').appendChild(card)
  });
}

const filterPlace = ( word )=>{
  placesFiltered = placesOriginal.filter( place => {
    const isDentro = ( presupuesto ) ? place.avgPrice > presupuesto : true


    return ( !isDentro && (
      place.name.toLowerCase().includes(word.toLowerCase()) ||
    place.tipo.toLowerCase().includes(word.toLowerCase()) )
    )
  })
  document.querySelector('#places').innerHTML = ''
  showPlaces( placesFiltered );
  
}


document.addEventListener('DOMContentLoaded', async () => {
  results = await getPlaces()
  placesOriginal = results.data
  placesFiltered = placesOriginal.map( place => place)
  showPlaces( placesFiltered )
  
  const $search = document.querySelector('#searchPlace')
  const $presupuesto = document.querySelector('#presupuesto')


  $search.onkeyup = (e)=> filterPlace( e.target.value )
  $presupuesto.onkeyup = (e)=> {
    presupuesto = (e.target.value > 0 ) ? e.target.value : 500
    filterPlace( $search.value )
  }

}, false);
