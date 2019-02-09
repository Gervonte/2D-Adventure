class potion
{
    constructor(HP,array2d)
    {
        this.X = 9;
        this.Y = 1;
        this.HP = HP;
        this.PIC = document.getElementById("potion");
        this.gridId = 7;
        this.controller;
        array2d.grid[this.X][this.Y]=this.gridId;
    }
    draw()
    {        
        //this.controller.ctx.clearRect(this.X*64,this.Y*64,64,64);
        this.controller.ctx.drawImage(this.PIC,this.X*64,this.Y*64);        
    }

    
}