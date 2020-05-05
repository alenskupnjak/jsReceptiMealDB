// Inicijaliziraj API
const podaciAPI = new PodaciApi();

//Inicijalizacija grafike
const ekran = new UI();


const pretrazi = document.getElementById('pretrazi')
const trazim = document.getElementById('trazim')


function dohvatiPodatke() {
  // Pretrazujemo bazu prema upitu i vracamo podatke
  const podaci = podaciAPI.premaOpisuAPI(trazim.value)
  podaci.then(data =>{
    console.log(data);
    // Popuni UI
    ekran.popuniPretrazeno(data);
  })
  
}

function dodajRecept(e) {
  console.log(e);
  console.log(e.path);

  let lista = e.path.find( data => {
    return data.classList.contains('recepti-pojedniacno')
      // if(data.classList) {

      //     return data.classList.contains('recepti-pojedniacno')
      //   if (data.classList.contains('recepti-pojedniacno')) {
      //     return data
      //   }
      //   console.log('da');
      //   return '';


      // } else {
      //   return data.classList.contains('recepti-pojedniacno')
      //   return ''
      //   console.log('ne'); 
      // }
  })

  // Popuni ekran sa odabranim receptom
  ekran.popuniRecept(lista.getAttribute('ID'));
  

  
};


// dodaj event lisener
pretrazi.addEventListener('click', dohvatiPodatke);
ekran.recepti.addEventListener('click',dodajRecept);

// komentar
