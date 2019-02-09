class healthBar
{
    constructor(maxHP)
    {        
        
        this.length = 60; 
        this.width = 5;   
        this.maxHP = maxHP;
        this.hp;    
    }
    draw(x,y,hp,ctx)
    {
        this.ctx = ctx;
        this.hp = hp/this.maxHP;
        
        if((this.hp * 100) >50)
        {
            this.ctx.fillStyle = "#008800"
            this.ctx.strokeRect(x,y,this.width,this.length);
            this.ctx.fillRect(x,y+this.length,this.width,-this.length*this.hp);
        }
        else if((this.hp * 100) <=50&&(this.hp * 100) >25)
        {
            this.ctx.fillStyle = "#ff3300"
            this.ctx.strokeRect(x,y,this.width,this.length);
            this.ctx.fillRect(x,y+this.length,this.width,-this.length*this.hp);
        }
        else if((this.hp * 100) <=25)
        {
            this.ctx.fillStyle = "#880000"
            this.ctx.strokeRect(x,y,this.width,this.length);
            this.ctx.fillRect(x,y+this.length,this.width,-this.length*this.hp);
        }
  
    }
}