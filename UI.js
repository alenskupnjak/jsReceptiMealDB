class UI {
  constructor() {
    this.recepti = document.getElementById('recepti')
    this.jedanRecept  = document.getElementById('jedanRecept')
    this.htmlTxt = ''
  }

  popuniPretrazeno(data){
    data.meals.map(element => {
      this.htmlTxt += `<div class="recepti-pojedniacno" id="${element.idMeal}">
        <img src="${element.strMealThumb}" alt="">
        <div class="info">
         <h2>${element.strMeal}</h2>
            <p>${element.strCategory}</p>
        </div>
       </div>
     `;
    });

    // data.meals.forEach(element => {
    //   this.htmlTxt +=`
    //     <div class="recepti-pojedniacno" id="${element.idMeal}">
    //       <img src="${element.strMealThumb}" alt="">
    //       <div class="info">
    //       <h2>${element.strMeal}</h2>
    //       <p>${element.strCategory}</p>
    //       </div>
    //      </div>
    //    `;
    // });

    this.recepti.innerHTML = this.htmlTxt;
  }


  popuniRecept(data){
    let namirnice = [];
    console.log(data);
    console.log(data.idMeal);
    console.log(data['idMeal']);

    for(let i=1; i<20; i++) {
      if(data[`strIngredient${i}`]) {
        namirnice.push(data[`strIngredient${i}`]+' - ' + data[`strMeasure${i}`]);
      }
    }

    console.log(namirnice);
    

    this.jedanRecept.innerHTML= `
    <div class="opis">
      <h2>${data.strMeal}</h2>
      <img src="${data.strMealThumb}" alt="">
    </div>
    <div id="namirnice" class="namirnice">
      ${namirnice.map(data => {
        return `<p>${data}</p>`
      }).join('')}
    </div>
    `;

  }

}