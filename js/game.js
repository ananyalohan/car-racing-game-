class Game{
    constructor(){

    }
    getState(){
        var gameStateRef= database.ref("gameState")
        gameStateRef.on("value", function(data){
            gameState=data.val()
        } )
    }
    update(state){
     database.ref("/").update({
         gameState:state
     })
  }
    start(){
     if (gameState===0){
         player= new Player()
         player.getCount()
         console.log(playerCount)
         form=new Form()
         form.display()
     }
     car1= createSprite(200,300)
     car2= createSprite(300,300)
     car3= createSprite(400,300)
     car4= createSprite(500,300)
     cars=[car1,car2,car3,car4]

     car1.addImage(car1Img)
     car2.addImage(car2Img)
     car3.addImage(car3Img)
     car4.addImage(car4Img)
    }

    play(){
       form.hide() 
       
       Player.getPlayerInfo()
       player.getCarsAtEnd()
       if(allPlayers!==undefined){
           background("brown")
           image(trackImg, 0,-displayHeight*4, displayWidth, displayHeight*5)
       var index=0
       var x=150
       var y
       for(var plr in allPlayers){
           index=index+1
           x=x+200
           y= displayHeight-allPlayers[plr].distance
           cars[index-1].x=x
           cars[index-1].y=y
           if(index===player.index){
               cars[index-1].shapeColor="red"
               textSize(20)
               fill("red")
               text(allPlayers[plr].name, cars[index-1].x-20, cars[index-1].y+70)
               
               camera.position.x=displayWidth/2
               camera.position.y= cars[index-1].y 
           }
       }
       }
       if(keyIsDown(UP_ARROW)&& player.index!==null){
           player.distance+=50
           player.update()
           console.log(player.distance)
       }
       if(player.distance===3500){
          gameState=2
          player.rank++
          Player.updateCarsAtEnd(player.rank)
       }
       drawSprites();
    }
    end(){
        console.log("game ended")
        console.log("Your rank is"+player.rank)
    }
}
