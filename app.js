// Inicijaliziraj API
const podaciAPI = new PodaciApi();

//Inicijalizacija grafike
const ekran = new UI();


const pretrazi = document.getElementById('pretrazi');
const trazim = document.getElementById('trazim');


function dohvatiPodatke() {

  // Počisti podatke za pojedinacin recept i sa liste recepata
  ekran.jedanRecept.innerHTML = '';

  // Pretrazujemo bazu prema upitu i vracamo podatke
  const podaci = podaciAPI.premaOpisuAPI(trazim.value)
  podaci.then(data =>{

  // Popuni UI
  ekran.popuniPretrazeno(data);

  })
}

function dodajRecept(e) {
  
  // tratim iz patha dom element sa ID stavkom
  let lista = e.path.find( data => {
    return data.classList.contains('recepti-pojedniacno');
      // if(data.classList) {

      //     return data.classList.contains('recepti-pojedniacno')
      //   if (data.classList.contains('recepti-pojedniacno')) {
      //     return data
      //   }
      //   console.log('da');
      //   return '';
      console.log('dd');
      

      TODO
      // } else {
      //   return data.classList.contains('recepti-pojedniacno')
      //   return ''
      //   console.log('ne'); 
      // }
  })


  // Povuci podatke za odabrani recept
  podaciAPI.jedanRecept(lista.getAttribute('ID'))
  .then(data => {
    
    // Popuni ekran sa odabranim receptom
    ekran.popuniRecept(data);
  })
  
};


// dodaj event lisener
pretrazi.addEventListener('click', dohvatiPodatke);
ekran.recepti.addEventListener('click',dodajRecept);

