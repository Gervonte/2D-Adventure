class brick extends mazeObject
{    
    draw(ctx)
    {       
        ctx.fillStyle = "#802000";
        ctx.fillRect(this.x,this.y,64,64);        
    }
}