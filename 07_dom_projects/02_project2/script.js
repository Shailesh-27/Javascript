const form = document.querySelector('form')

form.addEventListener('submit',function (e)  {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }
    else{
      const BMI =   (weight / ((height * height)/ 10000)).toFixed(2)
      let status = ''
      if (BMI <= 18.6){
        status = "You are Under Weight"
      }
      else if(18.6 > BMI  && BMI < 24.9){
        status = "You are Normal"
      }
      else{
        status = "You are Over Weight"
      }
      results.innerHTML = `<span>${BMI}</span> <br> <span>${status}</span>`
    }

});