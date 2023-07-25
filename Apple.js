class Apple{
    constructor(ctx,size,snake,SimpleScore){
        this.size = size
        this.ctx = ctx
        this.x = 50
        this.y = 0
        this.snake = snake
        this.color = '#dc143c'
        this.ss = SimpleScore
        this.AudioPegar = new Audio('songs/pegar.mp3')
    }
    position(){
        this.x = Math.floor(Math.random()*canvasWidth/this.size)*this.size
        this.y = Math.floor(Math.random()*canvasHeight/this.size)*this.size
        
    }
    
    SnakeEat(){
        if(this.x == this.snake.snakeHead.x && this.y == this.snake.snakeHead.y ){
            this.position()
            this.ss +=1
            this.snake.snake.unshift({x:this.snake.x + (this.snake.size*(this.snake.length + 1)),y:0})
            this.AudioPegar.play()
        }

    }
    draw(){
        this.SnakeEat()
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x,this.y,this.size,this.size)
      
    }
}