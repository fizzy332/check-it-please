class dro extends baseclass{
constructor(x,y){
super(x,y,radius)
this.drops=[]
}
display(){
  
  for(i=0;i<maxdrops;i++){
    drops.push( new createDrop(random(0,400),(random(0,400))))
    }
    
    
var maxdrops=100;
  super.display();


}
}