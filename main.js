
const getElement = (e)=> document.querySelector(e)
const canvas = getElement('canvas')
const T_SCORE = getElement('.score  span')
const B_SCORE = getElement('.best  span') 
const ctx = canvas.getContext('2d')
const canvasWidth = canvas.width 
const canvasHeight = canvas.height
const size = 30
let SimpleScore = 0



const cobra = new Cobra(size,ctx)
const apple = new Apple(ctx,size,cobra,SimpleScore)

const ScoreFunction = ()=>{

    if(cobra.snakeHead.x > canvasWidth || cobra.snakeHead.x  < 0 ||cobra.snakeHead.y > canvasHeight||cobra.snakeHead.y < 0 ){
        GameOver()

    }

    SimpleScore = apple.ss
    T_SCORE.innerHTML = SimpleScore
    if(SimpleScore > localStorage.getItem('BestScore') ){
        B_SCORE.innerHTML = localStorage.getItem('BestScore') //acessando item do localStorage e modificando valor. Usado para pesistência de dados, faz com que salve o bestScore mesmo que o player saia da página, feche o navegador ou desligue o pc
        localStorage.setItem('BestScore',SimpleScore) //modificando o item do localStorage
       
    }

}

const GameOver = ()=> {
    cobra.snake = [
        { x:0, y:0 }
    ]
    cobra.direction = 'po'
    apple.position()
    apple.ss = 0
    SimpleScore = 0
}

document.addEventListener('keydown',(e)=>{

    const key = e.key
    if(key == 'ArrowUp' && cobra.direction != 'bottom'){
       cobra.direction = 'up'
    }
    if(key == 'ArrowDown' && cobra.direction != 'up'){
        cobra.direction = 'bottom'
    }
    if(key == 'ArrowLeft' && cobra.direction != 'right'){
        cobra.direction = 'left'
    }
    if(key == 'ArrowRight' && cobra.direction != 'left'){
        cobra.direction = 'right'
    }

})

B_SCORE.innerHTML = localStorage.getItem('BestScore')

const draw = ()=>{
    ScoreFunction()
    ctx.clearRect(0,0,canvasWidth,canvasHeight)
    apple.draw()
    cobra.draw()
   
}


apple.position()
setInterval(draw,80)