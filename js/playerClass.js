class player extends character
{
    constructor(array2d)
    {
        super();
        this.MHP=10;
        this.HP = this.MHP;        
        this.ATK = 80;
        this.DEF=50;
        this.X=5;
        this.Y=9;        
        this.gridId = 3;
        array2d.grid[this.X][this.Y]=this.gridId;
        this.controller;        
        this.PIC = document.getElementById("player");
        this.healthBar1 = new healthBar(this.MHP);
        this.alive = true;
        
    }

    move(direction,array2d)
    {          
        var newX = this.getDirectionX(direction);
        var newY = this.getDirectionY(direction);
        var outArea = false;
        var collideWBrick = false;
        var collideWTree = false;
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
        else if(array2d.grid[newX][newY]==4||array2d.grid[newX][newY]==5||array2d.grid[newX][newY]==6)
        {
            collideWMonster = true;
            
        }
        else if(array2d.grid[newX][newY]==7||array2d.grid[newX][newY]==8)
        {
            collideWPotion = true;
        }

        if(!outArea&&!collideWBrick&&!collideWTree&&!collideWMonster&&!collideWPotion)        
        {
            this.controller.ctx.clearRect(this.X*64,this.Y*64,64,64);
            
            array2d.grid[this.X][this.Y]=0;
            array2d.grid[newX][newY]=this.gridId;
            this.X = newX;
            this.Y = newY;
            this.controller.drawAll();
        }
        if(collideWMonster)
        {
            if(array2d.grid[newX][newY]==4)
            {
                this.controller.attack(this,this.controller.monster1);
                console.log("attack monster!");
            }
            else if(array2d.grid[newX][newY]==5)
            {
                this.controller.attack(this,this.controller.monster2);
                console.log("attack monster!");
            }
            else if(array2d.grid[newX][newY]=6)
            {
                this.controller.attack(this,this.controller.monster3);
                console.log("attack monster!");
            }
            
        }
        if (collideWPotion)
        {
            if(array2d.grid[newX][newY]==7)
            {
                this.controller.takePotion(this.controller.potion1);
                this.ctx.clearRect(this.X*64,this.Y*64,64,64);            
                array2d.grid[this.X][this.Y]=0;
                array2d.grid[newX][newY]=this.gridId;
                this.X = newX;
                this.Y = newY;
                this.draw(this.ctx);
            }
            else if (array2d.grid[newX][newY]==8)
            {
                this.controller.takePotion(this.controller.potion2);
                this.ctx.clearRect(this.X*64,this.Y*64,64,64);            
                array2d.grid[this.X][this.Y]=0;
                array2d.grid[newX][newY]=this.gridId;
                this.X = newX;
                this.Y = newY;
                this.draw(this.ctx);

            }
   
        }

    }
    die(array2d)
    {
        array2d.grid[this.X][this.Y]=0;  
        this.ctx.clearRect(this.X*64,this.Y*64,64,64);   
        this.alive = false;
    }

}

