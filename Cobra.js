class Cobra{
    constructor(size,ctx){
        this.size = size
        this.ctx = ctx
        this.direction = undefined
        this.snake = [
            { x:0, y:0 },
          
        ]
        this.snakeHead= 0
        
    }
 
    movement(){

        this.snakeHead = this.snake.at(-1)
        

        if(this.direction == 'up'){
            this.snake.shift()
            this.snake.push( {x: this.snakeHead.x, y: this.snakeHead.y-size})
        }
        if( this.direction == 'bottom' ){
            this.snake.shift()
            this.snake.push( {x: this.snakeHead.x, y: this.snakeHead.y+size}) 
        } 
        if(this.direction == 'left'){
            this.snake.shift()
            this.snake.push( {x: this.snakeHead.x - size, y: this.snakeHead.y}) 
        }
        if(this.direction == 'right'){   
            this.snake.shift()
            this.snake.push( {x: this.snakeHead.x + size, y: this.snakeHead.y})         
        }
        
    }
    
    draw(){
        this.movement()
        this.snake.forEach((e, index)=>{
            index == this.snake.length  - 1? this.ctx.fillStyle = '#fff':  this.ctx.fillStyle = '#ddd'
            this.ctx.fillRect(e.x,e.y,this.size,this.size)
        })
        
    }
}


