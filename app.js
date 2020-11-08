// Inicijaliziraj API
const podaciAPI = new PodaciApi();

// Inicijalizacija grafike
const ekran = new UI();

const pretrazi = document.getElementById('pretrazi');
const trazim = document.getElementById('trazim');

function dohvatiPodatke() {
  // Počisti podatke za pojedinacin recept i sa liste recepata
  ekran.jedanRecept.innerHTML = '';

  // Pretrazujemo bazu prema upitu i vracamo podatke
  const podaci = podaciAPI.premaOpisuAPI(trazim.value);
  podaci.then((data) => {
    // Popuni UI
    ekran.popuniPretrazeno(data);
  });
}

function dodajRecept(e) {
  console.log(e.path);
  
  // trazim iz patha dom element sa ID stavkom
  let lista = e.path.find((data) => {
    return data.classList.contains('recepti-pojedniacno');
  });

  console.log('lista=',lista);
  

  // Povuci podatke za odabrani recept
  podaciAPI.jedanRecept(lista.getAttribute('ID')).then((data) => {
    // Popuni ekran sa odabranim receptom
    ekran.popuniRecept(data);
  });
}

// EVENT liseneri
// dodaj event lisener
pretrazi.addEventListener('click', dohvatiPodatke);
ekran.recepti.addEventListener('click', dodajRecept);
