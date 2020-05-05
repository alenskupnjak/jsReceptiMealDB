class PodaciApi {
  constructor() {

  }

  // Dohvati podatke prema opisu
  async premaOpisuAPI (data) {
    const podatak = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`)
    .then(data => {
      console.log(data);
      data = data.json();
      console.log(data);
      return data
    })
    .then( data =>{
      console.log('kaj sada');
      
      console.log(data);
       return data
    })

    console.log(podatak);
    



    return podatak
    
  }
}