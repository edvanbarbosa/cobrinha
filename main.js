const getElement = (e)=> document.querySelector(e)
const canvas = getElement('canvas')
const T_SCORE = getElement('.score  span')
const B_SCORE = getElement('.best  span') 
const ctx = canvas.getContext('2d')
const canvasWidth = canvas.width 
const canvasHeight = canvas.height
const size = 30
let SimpleScore = 0
const GameOverAudio = new Audio('songs/gameOver.wav')



const cobra = new Cobra(size,ctx)
const apple = new Apple(ctx,size,cobra,SimpleScore)

const ScoreFunction = ()=>{

    SimpleScore = apple.ss
    T_SCORE.innerHTML = SimpleScore
    B_SCORE.innerHTML = localStorage.getItem('BestScore')
    
    if(SimpleScore > localStorage.getItem('BestScore') ){
        B_SCORE.innerHTML = localStorage.getItem('BestScore') //acessando item do localStorage e modificando valor. Usado para pesistência de dados, faz com que salve o bestScore mesmo que o player saia da página, feche o navegador ou desligue o pc
        localStorage.setItem('BestScore',SimpleScore) //modificando o item do localStorage
       
    }

}

const GameOver = ()=> {
    cobra.snake = [
        { x:0, y:0 }
    ]
    cobra.direction = undefined
    apple.position()
    apple.ss = 0
    SimpleScore = 0
    GameOverAudio.play()
    cobra.colorBody = cobra.colorHead = "red"
}

document.addEventListener('keydown',(e)=>{

    const key = e.key
    if(key == 'ArrowUp' && cobra.direction != 'bottom'|| key == 'w' && cobra.direction != 'bottom'){
       cobra.direction = 'up'
    }
    if(key == 'ArrowDown' && cobra.direction != 'up' || key == 's' && cobra.direction != 'up'){
        cobra.direction = 'bottom'
    }
    if(key == 'ArrowLeft' && cobra.direction != 'right'|| key == 'a' && cobra.direction != 'right'){
        cobra.direction = 'left'
    }
    if(key == 'ArrowRight' && cobra.direction != 'left' || key == 'd' && cobra.direction != 'left'){
        cobra.direction = 'right'
    }

})



const draw = ()=>{

    if(cobra.snakeHead.x + cobra.size > canvasWidth || cobra.snakeHead.x  < 0 ||cobra.snakeHead.y + cobra.size > canvasHeight||cobra.snakeHead.y < 0 ){
        GameOver()

    }
    cobra.snake.forEach((e)=>{
        if(e != cobra.snakeHead){
            if(e.x == cobra.snakeHead.x && e.y == cobra.snakeHead.y){
                GameOver()
            }
        }
    })

    ScoreFunction()
    ctx.clearRect(0,0,canvasWidth,canvasHeight)
    apple.draw()
    cobra.draw()
    
   
}

document.addEventListener('scroll', ()=>{

    const pageX = parseInt(window.scrollX)
    const pageY = parseInt(window.scrollY)

})

apple.position()
setInterval(draw,80)

