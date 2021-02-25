const diceBlock = [
    { dice: "\u2680", value: 1 },
    { dice: "\u2681", value: 2 },
    { dice: "\u2682", value: 3 },
    { dice: "\u2683", value: 4 },
    { dice: "\u2684", value: 5 },
    { dice: "\u2685", value: 6 },
  ];
document.addEventListener('DOMContentLoaded',()=> {
 const diceFace = document.getElementById('dice-para')
 const sumOfDice = document.getElementById('sum-para')
 const numInput = document.getElementById('dice-number-input')
 const rollBtn = document.getElementById('submit-dice-btn')
 const ul = document.getElementById('History-list')
 const history = document.getElementById('History-of-rolls')

rollBtn.addEventListener("click", () =>{
  diceRollPicture()

})
let numOfClicks = 0
function diceRollPicture () { 
    let sum = 0
    diceFace.innerHTML = ''
    for(let i =0; i< numInput.value;i++){
        let randomNumber = Math.floor(Math.random() * diceBlock.length)
        diceFace.innerHTML += diceBlock[randomNumber].dice
        sum += diceBlock[randomNumber].value
        
    }
  sumOfDice.textContent = `sum = ${sum}`
  numOfClicks++
  if(numOfClicks >1){
      const li = document.createElement('li')
     ul.appendChild(li)
     li.textContent = `${diceFace.innerHTML} = ${sum}`
  }
}

})
