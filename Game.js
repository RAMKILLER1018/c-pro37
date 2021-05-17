class Game{
    constructor(){

    }

    getState(){
        var gameStateref=database.ref('gameState');
        gameStateref.on("value",function(data){
            gameState=data.val();
        })
    }
    updateState(State){
        database.ref('/').update({
            gameState:State
        });
    }
    async start(){
        if(gameState===0){
            player = new Player();
            var playerc = await database.ref('playerCount').once("value");
            if(playerc.exists()){
                playerCount = playerc.val();
                player.getCount();
            }
            //Player.Pinfo
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide()
        textSize(30);
        text("Game Started",500,150);

        Player.Pinfo()
        if(allPlayers!== undefined){
            for(var plr in allPlayers){
                var ypos = 170
                ypos=ypos+20 
                textSize(15);
            text(allPlayers[plr].name+":"+allPlayers[plr].distance,500,ypos);
            }
        }
    }
}