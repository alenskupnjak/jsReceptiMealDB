class UI {
  constructor() {
    this.recepti = document.getElementById('recepti')
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
}