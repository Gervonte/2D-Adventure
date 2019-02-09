class monster3 extends character
{
    constructor(array2d)
    {
        super();        
        this.MHP=300;
        this.HP = this.MHP;        
        this.ATK = 45;
        this.DEF=75;
        this.X=7;
        this.Y=9;  
        this.gridId = 6;
        array2d.grid[this.X][this.Y]=this.gridId;
        this.PIC = document.getElementById("slime");
        this.controller;        
        this.healthBar1 = new healthBar(this.MHP);
    }

   
}