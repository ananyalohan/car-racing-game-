class Player{
    constructor(){
      this.name=null
      this.distance=0
      this.index=null
      this.rank=null
    }
   
 

    getCount(){
        var playerCountRef= database.ref("playerCount")
        playerCountRef.on("value", (data)=>{
            playerCount= data.val()
        })
    }

    updateCount(count){
        database.ref("/").update({
           playerCount:count
        })
    }

    update(){
        console.log("PLAYER"+this.index)
        var playerIndex= "players/player"+this.index
        console.log(playerIndex)
        database.ref(playerIndex).set({
            name:this.name, 
            distance:this.distance
        })
    }

    getCarsAtEnd(){
       var carsAtEnd= database.ref("CarsAtEnd")
       carsAtEnd.on("value", (data)=>{
           this.rank= data.val()
       })
        
    }

    static updateCarsAtEnd(rank){
        database.ref("/").update({
           CarsAtEnd:rank
        })

    }


    static getPlayerInfo(){
        var playerInfoRef=database.ref("players")
        playerInfoRef.on("value", (data)=>{
            allPlayers= data.val();
        })
    }
}