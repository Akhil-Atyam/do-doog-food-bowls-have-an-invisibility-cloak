class Food {
    constructor(){
    this.foodStock=100;
    console.log(this.image1);
    this.image1 = loadImage('Untitled.png');

    }
    preload(){
    
    }
  
   updateFoodStock(){}
  
   deductFood(){}
  
    getFoodStock(){}
  
    Display(Num)
    {
      
        var count = 0;
        var foodoid = [];
       if(Num != count){
            
           var x=20,y=80;
          count = Num;
      imageMode(CENTER);
   
         this.foodStock = Num;
      if(this.foodStock != 0)
      {
        for(var a=0;a <this.foodStock;a++)
        {

            if(a%5===0)
            {
                console.log(this.image);
                x=20;
                y=y+50;
            }
            
            x=x+60;
            image(this.image1,x,y,120,60);
            
        }


      }

     }
    }
  }