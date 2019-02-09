class tree extends mazeObject
{    
    draw(ctx)
    {     
        ctx.fillStyle = "#663300";
        ctx.fillRect(this.x+18,this.y,28,64);   
        ctx.fillStyle = "#006600";
        ctx.fillRect(this.x,this.y,64,42); 
        ctx.stroke();   
    }
}