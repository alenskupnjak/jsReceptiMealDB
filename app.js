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

  // Pretrazujemo bazu prema upitu i vracamo podatke
  const podaci = podaciAPI.premaOpisuAPI(trazim.value)
  podaci.then(data =>{
    console.log(data);
    // Popuni UI
    ekran.popuniPretrazeno(data);
  })
  
  
}


// dodaj event lisener
pretrazi.addEventListener('click', dohvatiPodatke)
