class character
{
    constructor(array2d)
    {
        
        this.MHP=100;
        this.HP = this.MHP;        
        this.ATK = 50;
        this.DEF=50;
        this.X=5;
        this.Y=9;  
        this.PIC;
        this.gridId;
        this.controller;
        this.healthBar1 = new healthBar(this.MHP);
        this.alive = true;
        
    }
    draw()
    { 
        this.controller.ctx;
        //this.controller.ctx.clearRect(this.X*64,this.Y*64,64,64);
        this.controller.ctx.drawImage(this.PIC,this.X*64,this.Y*64);
        this.healthBar1.draw((this.X*64)+55,(this.Y*64)+2,this.HP,this.controller.ctx);        
                 
    }
    monsterMove()
    {
        var dir = Math.floor(Math.random()*4)+1;
        
        if (dir == 1)
        {
            return "up";
        }
        if (dir == 2)
        {
            return "down";
        }
        if (dir == 3)
        {
            return "left";
        }
        if (dir == 4)
        {
            return "right";
        }
    }
    getDirectionX(direction)
    {
        if (direction == "left")
        {
            return this.X -1;
        }
        else if (direction == "right")
        {
            return this.X +1;
        }
        else
        {
            return this.X;
        }
    }
    getDirectionY(direction)
    {
        if (direction == "up")
        {
            return this.Y -1;
        }
        else if (direction == "down")
        {
            return this.Y +1;
        }
        else
        {
            return this.Y;
        }
    }
    move(direction,array2d)
    {           
        if(this.HP > 0)
        {
            var newX = this.getDirectionX(direction);
            var newY = this.getDirectionY(direction);
            var outArea = false;
            var collideWBrick = false;
            var collideWTree = false;  
            var collideWPlayer = false; 
            var collideWMonster = false;    
            var collideWPotion = false;       
            if (newX >9||newY>9||newX<0||newY<0)
            {
                outArea = true;
            }
            else if(array2d.grid[newX][newY]==1)
            {
                collideWBrick = true;
            }
            else if(array2d.grid[newX][newY]==2)
            {
                collideWTree = true;
            }        
            else if(array2d.grid[newX][newY]==3)
            {
                collideWPlayer = true;
                
            }
            else if(array2d.grid[newX][newY]==4||array2d.grid[newX][newY]==5||array2d.grid[newX][newY]==6)
            {
                collideWMonster = true;
                
            }
            else if(array2d.grid[newX][newY]==7||array2d.grid[newX][newY]==8)
            {
                collideWPotion = true;
                
            }

            if(!outArea&&!collideWBrick&&!collideWTree&&!collideWPlayer&&!collideWMonster&&!collideWPotion)        
            {
                this.controller.ctx.clearRect(this.X*64,this.Y*64,64,64);
                array2d.grid[this.X][this.Y]=0;
                array2d.grid[newX][newY]=this.gridId;
                this.X = newX;
                this.Y = newY;
                this.controller.drawAll();
            }
            
            if(collideWPlayer)
            {
                if(array2d.grid[newX][newY]==3)
                {
                    this.controller.attack(this,this.controller.player1);
                    console.log("attack human!");
                }
                
            }
        }    

    }
    die(array2d)
    {
        array2d.grid[this.X][this.Y]=0;  
        this.controller.ctx.clearRect(this.X*64,this.Y*64,64,64);   
        this.alive = false;
        this.controller.monsterCount -=1;
    }
}