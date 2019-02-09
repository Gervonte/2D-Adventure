class array2D
{
    constructor(width,height,canvasWidth,canvasHeight)
    {
        this.width = width;
        this.height = height;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.sizeX = canvasWidth/width;
        this.sizeY = canvasHeight/height;
        this.grid = []; 
        while(this.grid.push([]) < this.sizeY);
    }
    drawGrid()
    {  
          
        this.controller.ctx.strokeStyle = "#000000"; 
        
        
        var x=0;
        var y=0;        
        
        for(x=0;x<this.canvasWidth;x+=64)
        {  
               //Vertical
               this.controller.ctx.moveTo(x,y)
               this.controller.ctx.lineTo(x,y+this.canvasHeight);
               this.controller.ctx.stroke();                          
            
        }   
        x = 0;
        for(y=0;y<this.canvasHeight;y+=64)
        {            
                
                //Horizontal
                this.controller.ctx.moveTo(x,y)
                this.controller.ctx.lineTo(x+this.canvasWidth,y);
                this.controller.ctx.stroke();
        }    
    }
    populateGrid()
    {
        var done = false;
        var xLoc;
        var yLoc;
        var item;
        
        for(yLoc = 0;yLoc<10;yLoc++ )
        { 
            xLoc = Math.floor(Math.random()*10);
            
            if (this.grid[xLoc][yLoc]>0||(xLoc==5&&yLoc==9))
            {
                continue;
            }
            item = Math.floor(Math.random()*10);        
            if (item >= 6)
            {
                this.grid[xLoc][yLoc]=1;
                var brick1 = new brick(xLoc*64,yLoc*64);
                brick1.draw(this.controller.ctx);
            }
            else if(item <= 5)
            {
                this.grid[xLoc][yLoc]=2;
                var tree1 = new tree(xLoc*64,yLoc*64);
                tree1.draw(this.controller.ctx);
            }
        }        
    }
    rePopGrid()
    {
        var xLoc;
        var yLoc;
        for(yLoc = 0;yLoc<10;yLoc++ )
        {             
            for(xLoc = 0;xLoc<10;xLoc++)  
            {
                if (this.grid[xLoc][yLoc]==1)
                {
                    var brick1 = new brick(xLoc*64,yLoc*64);
                    brick1.draw(this.controller.ctx);
                }
                else if(this.grid[xLoc][yLoc]==2)
                {
                    var tree1 = new tree(xLoc*64,yLoc*64);
                    tree1.draw(this.controller.ctx);
                }
            }
        
        }        

    }
}
