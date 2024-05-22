const currentForm = document.getElementById("main_form")
const hypotenuseValue = document.querySelector(".hypotenuse_")
const perpendicularValue = document.querySelector(".perpendicular_")
const resultValue = document.querySelector(".result")




currentForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const h = Number(hypotenuseValue.value)
    const p = Number(perpendicularValue.value)
    if(h < p || h == p){
        alert("Please enter the correct or different number")
        return;
    }
    const bSqaure = h ** 2 - p ** 2;
    const base= Math.sqrt(bSqaure);
    resultValue.innerHTML= "The base is:   " + base;
    // console.log(baseValue.value); 

    

})