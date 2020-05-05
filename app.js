// Inicijaliziraj API
const podaciAPI = new PodaciApi();

//Inicijalizacija grafike
const ekran = new UI();


const pretrazi = document.getElementById('pretrazi')
const trazim = document.getElementById('trazim')


function dohvatiPodatke() {
  console.log('tutu');
  console.log(trazim.value);
  
  console.log(event);

  const podaci = podaciAPI.premaOpisuAPI(trazim.value)
  console.log(podaci);
  
  
}


// dodaj event lisener
pretrazi.addEventListener('click', dohvatiPodatke)
