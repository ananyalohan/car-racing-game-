class Form{
    constructor(){
        this.title=createElement("h2")
        this.input= createInput("Name")
        this.button= createButton("Play")
        this.greeting= createElement("h3")
        this.reset= createButton("Reset")
    }

    hide(){
    this.greeting.hide()
    this.input.hide()
    this.button.hide()

    }
    

    display(){
        this.title.html("Car Racing Game")
        this.title.position(displayWidth/2-50,0)
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        this.button.position(displayWidth/2+30,displayHeight/2)

        this.reset.position(displayWidth-100, 50)

        this.button.mousePressed(()=> {  
            this.input.hide()
            this.button.hide()
            player.name= this.input.value()
            playerCount+=1
            player.index=playerCount
            console.log("FORM"+player.index)
            player.updateCount(playerCount)
            player.update()
          
            this.greeting.html("Hello "+ player.name)
            this.greeting.position(displayWidth/2-70,displayHeight/4)
        })

        this.reset.mousePressed(()=>{
           game.update(0)
           player.updateCount(0)
        }
        )
    }
}