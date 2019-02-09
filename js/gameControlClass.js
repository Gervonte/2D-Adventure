class gameControl 
{
    constructor(gridX,gridY,width,height)
    {
        this.monsterCount=0;
        this.array2d = new array2D(gridX,gridY,width,height); 
        this.array2d.controller=this;

        this.canvas = document.getElementById("mainCanvas");	
        this.ctx = this.canvas.getContext("2d");

        this.player1 = new player(this.array2d);
        this.player1.controller = this;

        this.monster1 = new monster1(this.array2d);
        this.monster1.controller = this;

        this.monster2 = new monster2(this.array2d);
        this.monster2.controller = this;

        this.monster3 = new monster3(this.array2d);
        this.monster3.controller = this;

        this.monsterCount = 3;

        this.potion1 = new potion(25,this.array2d);
        this.potion1.controller = this;

        this.potion2 = new potionBlue(50,this.array2d);
        this.potion2.controller = this;

        this.width = width;
        this.height = height;
        this.gridX = gridX;
        this.gridY = gridY;

    }
    drawBg()
    {
        this.ctx.fillStyle = "#222200";
        this.ctx.fillRect(0,0,this.width,this.height);
        this.array2d.rePopGrid();
    }
    drawAll()
    {
        this.drawBg();
        
        if(this.player1.alive){this.player1.draw();}
        if(this.monster1.alive){this.monster1.draw();}
        if(this.monster2.alive){this.monster2.draw();}
        if(this.monster3.alive){this.monster3.draw();}

        this.potion1.draw();
        this.potion2.draw();
       
        this.array2d.drawGrid();
    }
    initControls()
    {
        var player = this.player1;
        var monster1 = this.monster1;
        var monster2 = this.monster2;
        var monster3 = this.monster3;
        var array2d = this.array2d;

        document.getElementById('upBtn').addEventListener("click",
        function()
        {            
            player.move("up",array2d);            
            monster1.move(monster1.monsterMove(),array2d);
            monster2.move(monster2.monsterMove(),array2d);
            monster3.move(monster3.monsterMove(),array2d);
        }
        );  document.getElementById('downBtn').addEventListener("click",
        function()
        {
            player.move("down",array2d);            
            monster1.move(monster1.monsterMove(),array2d);
            monster2.move(monster2.monsterMove(),array2d);
            monster3.move(monster3.monsterMove(),array2d);
        }
        );
        document.getElementById('leftBtn').addEventListener("click",
        function()
        {
            player.move("left",array2d);            
            monster1.move(monster1.monsterMove(),array2d);
            monster2.move(monster2.monsterMove(),array2d);
            monster3.move(monster3.monsterMove(),array2d);
        }
        );

        document.getElementById('rightBtn').addEventListener("click",
        function()
        {
            player.move("right",array2d);            
            monster1.move(monster1.monsterMove(),array2d);
            monster2.move(monster2.monsterMove(),array2d);
            monster3.move(monster3.monsterMove(),array2d);
        }
        );
    }
    
    attack(obj1,obj2)
    {        
        var damage = Math.max(obj1.ATK-obj2.DEF,1) *  (Math.floor(Math.random()*6)+1);
        obj2.HP -= damage;   
        console.log(damage);             
        if (obj2.HP <= 0)
        {
            obj2.die(this.array2d);
            obj2.alive = false;
        }
        else
        {
            obj2.draw(this.ctx);
        }
        if (this.monsterCount==0)
        {
            alert("You win!");
        }
        else if(this.player1.alive== false)
        {
            alert("You Lose!");
        }
    }

    takePotion(potion)
    {
        
        this.player1.HP += potion.HP;        
        if (this.player1.HP > this.player1.MHP)
        {
            this.player1.HP = this.player1.MHP            
        }
    }

    startGame()
    {
        this.playerAlive = true;
        this.monsterCount=3;   
        this.drawAll();
        this.array2d.populateGrid();
        this.initControls();

    }
}