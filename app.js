function randomColor(){
    const r= Math.floor(Math.random()*256)
    const g= 0
    const b= Math.floor(Math.random()*256)
    return `rgb(${r},${g},${b})`
}
const letters =document.querySelectorAll('.letter')
const clearInterval= setInterval(function(){
    console.log(letters)
    for(let letter of letters){
        letter.style.color=randomColor()
    }
},2000)