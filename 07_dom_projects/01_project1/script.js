const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')

buttons.forEach((button) => {
  console.log(button)
  button.addEventListener('click',(e)=>{
    // if(e.target.id === 'grey'){
    //   body.style.backgroundColor = e.target.id
    // }
    // if(e.target.id === 'white'){
    //   body.style.backgroundColor = e.target.id
    // }
    // if(e.target.id === 'blue'){
    //   body.style.backgroundColor = e.target.id
    // }
    // if(e.target.id === 'yellow'){
    //   body.style.backgroundColor = e.target.id
    // }
    
    switch(e.target.id) {
        case "blue" :
            body.style.backgroundColor = e.target.id
            break
        case "yellow" :
            body.style.backgroundColor = e.target.id
            break
        case "grey" :
            body.style.backgroundColor = e.target.id
            break
        case "white" :
            body.style.backgroundColor = e.target.id
            break
        case "red" :
            body.style.backgroundColor = e.target.id
            break
        default:
            body.style.backgroundColor = "white"
            break

    } 
  })
})