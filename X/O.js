let gridItems = document.getElementsByClassName("square")

let currentTurn = "x"

let gameIsFinshed = false

let bordArr=[
    "0","1","2",
    "3","4","5",
    "6","7","8" 
]

for(let item of gridItems){
    item.addEventListener("click" , function(){
        if(gameIsFinshed){
            return
        }
       let value= item.getAttribute("value")

       let index=value-1
       if(bordArr[index]=="x" || bordArr[index]=="o"){
        return 
       }

       let squareContent=document.querySelector(`.square[value="${value}"]`)

       squareContent.innerHTML=currentTurn

       bordArr[index]=currentTurn

       evaluateBord()

       if(currentTurn=="x"){

        currentTurn="o"
       }else{

        currentTurn = "x"
       }
       document.getElementById("constraction").textContent=`${currentTurn} turn`
       
    })
    function evaluateBord(){

        if(
            (bordArr[0]==bordArr[1] && bordArr[1]==bordArr[2]) ||
            (bordArr[3]==bordArr[4] && bordArr[4]==bordArr[5]) ||
            (bordArr[6]==bordArr[7] && bordArr[7]==bordArr[8]) ||
            (bordArr[0]==bordArr[3] && bordArr[3]==bordArr[6]) ||
            (bordArr[1]==bordArr[4] && bordArr[4]==bordArr[7]) ||
            (bordArr[2]==bordArr[5] && bordArr[5]==bordArr[8]) ||
            (bordArr[0]==bordArr[4] && bordArr[4]==bordArr[8]) ||
            (bordArr[2]==bordArr[4] && bordArr[4]==bordArr[6])
        ){
            var winner=currentTurn=="o"?"o": "x"

            gameIsFinshed=true

            alertify.alert(`${winner} Won!`)
        }
        var isDrow=true

        for(square of bordArr){

           if(square!="x" && square!="o") {

                isDrow=false
            }
        }
        if(isDrow){

            gameIsFinshed=true

            alertify.alert("Drow")
        }

    }
}

document.getElementById("reset-btn").addEventListener("click", function(){
    reset()
})
function reset(){
    for(item of gridItems){
        let value= item.getAttribute("value")
        let squareContent=document.querySelector(`.square[value="${value}"]`)
        squareContent.innerHTML=""

         bordArr=[
            "0","1","2",
            "3","4","5",
            "6","7","8" 
        ]
    }
    gameIsFinshed=false
    currentTurn = "x"
    document.getElementById("constraction").textContent=`${currentTurn} turn`
}