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
    // console.log(data.meals[0][strIngredient8]);
    let polje = Object.entries(data.meals[0]);



    


    this.jedanRecept.innerHTML= `
    <h2>${data.meals[0].strMeal}</h2>
    <div id="namirnice" class="bamirnice">
      <p>Namirmice</p>
    </div>
    `;

  }

}