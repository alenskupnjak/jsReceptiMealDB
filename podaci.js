class PodaciApi {
  constructor() {

  }

  // Dohvati podatke prema opisu
  async premaOpisuAPI (data) {
    const podatak = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`)
    .then(data => {
      data = data.json();
      return data
    })
    .then( data =>{
       return data
    })

    



    return podatak
  }
}