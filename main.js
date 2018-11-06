let keysBeingPressed =[];
let theGame;
class Game{
  constructor(){
    this.x = 100;
    this.y = 470;
    this.golfBallTwo = new GolfBall(this.x, this.y);
    this.golfBallHolder = [];
    this.obstacle = new Obstacle();
    this.hole = new Hole();
    this.ctx = document.getElementById('game-board').getContext('2d');
    this.lives = 5;
  // physics engine
  setInterval(()=>{
    this.ctx.clearRect(0, 0, 200, 500);
    this.drawEverything();
},100)}
//ends constructor function
  drawEverything(){
    this.golfBallTwo.drawGolfBall();
    this.obstacle.drawObstacle();
    this.hole.spawnHole();
    this.extraLives(10);
    this.extraLives(25);
    this.extraLives(40);
    this.extraLives(55);
    return this;}
  extraLives(x){
    this.x = x;
    this.y = 480;
    this.width = 6;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.width, 0, 2*Math.PI, true);
    this.ctx.fillStyle = 'white';
    this.ctx.fill();}
  }
// golfBallHolder2 would be an array of drawings inside Game object not affiliated with GolfBall class. seperate so that they dont recieve golfball methods that might make them move
// this.golfBallHolder2 = [this.extraLives(55),this.extraLives(25),this.extraLives(40),this.extraLives(10)];
// for loop that would be used to splice/move golfball drawing placement when users lose a life
// for(let i = 0; i < this.golfBallHolder2.length; i++){
//   this.golfBallHolder.push(this.golfBallHolder2[i])
class GolfBall{
  constructor(x, y){
    this.ctx = document.getElementById('game-board').getContext('2d');
    this.x = x;
    this.y = y;
    this.width = 6;}
  // allows users to direct the golfball using left/right arrowkeys only when the y axis reaches 469(right after the first upArrow press)
  moveleft() {
    if(this.y < 469){   
      this.x -= 10}}
  moveRight(){
    if(this.y < 469){
    this.x += 10}}
  // draws the first golfball in theGame class placed in the center of the canvas  
  drawGolfBall(){
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.width, 0, 2*Math.PI, true);
    this.ctx.fillStyle = 'white';
    this.ctx.fill();}
    // only want the golfball to move forward at this interval until it reaches 450 on the y axis
    // if i allow it to go the length of the board it will double the its incremental y value since it is called in the physics engine on drawEverything function
  moveGolfBallForward(){
    if(this.y > 450){
      setInterval(()=>{
      this.y -= 5;
    },50)
    return this;}
    else{return;}} 
  //for moving golfball forward on initial uparrow keypress at a set interval --- then the physics engine allows it to keep moving
  moveForward(){
    //Confirms the golfball has permission to move
    this.canMove(this.x, this.y);
    //sets a 2 second timer before the golfball starts to move automatically
    setTimeout(()=>{
      this.moveGolfBallForward()
    },2000)
    return this;}
    //should be used to check for collisions and create the border for the game to keep objects within the canvas
  canMove(futureX, futureY){
    let result = true;
    if(futureX < 0 || futureX > 200 || futureY < 0 || futureY > 500){
      result = false;
    }return result;}   
    }
    // end of the golfball object

class Hole{
  constructor(){
    this.ctx = document.getElementById('game-board').getContext('2d');
    this.x = Math.ceil(Math.random()*170 + 15);
    this.y = 20;
    this.width = 12;}
  spawnHole(){
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.width, 0, 2*Math.PI, true);
    this.ctx.fillStyle = 'rgb(0, 0, 0)';
    this.ctx.fill();
    return this;}
}
  // end of the Hole object
class Obstacle{
  constructor(){
    this.ctx = document.getElementById('game-board').getContext('2d');
    this.x = Math.floor(Math.random()*100 + 50);
    this.y = Math.ceil(Math.random()*200 +100);
    this.size = Math.floor(Math.random()*30 + 15);}
  drawObstacle(){
    this.ctx.beginPath();
    // this.ctx.scale(this.width, this.height); -- trying to create an oval/random shape to represent a lake or sand trap
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    this.ctx.fillStyle = 'blue';
    this.ctx.fill();
    return this;}
}
//ends the obstacle class - may make extension for hill & sandtrap
// when putt button is clicked a new game is created
document.getElementById('start-button').onclick = function(){
  theGame = new Game();}
// sets the commands that are accepted on keypresses
document.onkeydown = function(e){
  let commands = ['ArrowLeft', 'ArrowRight', 'ArrowUp'];
  //keeps track of all ekeys that are accepted as valid commands
  if(commands.includes(e.key)){
    e.preventDefault();
    keysBeingPressed.push(e.key);}
    // all keys not included in array are spliced
  if(!keysBeingPressed.includes(e.key)){
    keysBeingPressed.splice(e.key, 0);}
  // if statements calling functions for each command
  if(e.which === 37) {theGame.golfBallTwo.moveleft();}
  if(e.which === 39) {theGame.golfBallTwo.moveRight();}
  if(e.which === 38){theGame.golfBallTwo.moveForward();}
   }



