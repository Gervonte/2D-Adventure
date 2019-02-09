class monster1 extends character
{
    constructor(array2d)
    {
        super();        
        this.MHP=100;
        this.HP = this.MHP;        
        this.ATK = 55;
        this.DEF=75;
        this.X=0;
        this.Y=1;  
        this.gridId = 4;
        array2d.grid[this.X][this.Y]=this.gridId;
        this.PIC = document.getElementById("rat");
        this.controller;        
        this.healthBar1 = new healthBar(this.MHP);
    }

   
}