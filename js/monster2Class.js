class monster2 extends character
{
    constructor(array2d)
    {
        super();        
        this.MHP=150;
        this.HP = this.MHP;        
        this.ATK = 50;
        this.DEF=75;
        this.X=3;
        this.Y=5;  
        this.gridId = 5;
        array2d.grid[this.X][this.Y]=this.gridId;
        this.PIC = document.getElementById("bat");
        this.controller;        
        this.healthBar1 = new healthBar(this.MHP);
    }

   
}