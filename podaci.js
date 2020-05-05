class PodaciApi {
  constructor() {

  }

  // Dohvati podatke prema opisu
  async premaOpisuAPI (data) {
    await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`)
    .then(data => {
      console.log(data);
      data = data.json();
      console.log(data);
      return data
    })
    .then( data =>{
      console.log(data);
       data
    })




    return 'miki'



  }
}