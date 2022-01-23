class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //escribe aquí el código para ocultar los elementos de la pregunta
    question.hide()
    //escribe aquí el código para cambiar el color de fondo 
    background("orange")    
    //escribe el código para mostrar un encabezado que indique el resultado del Cuestionario  //A= answer
    var titleA = createElement('h1')
    titleA.html("RESULTADO");
    titleA.position(340, 20);
    //llama aquí a getContestantInfo( )
    Contestant.getPlayerInfo()
  
    //escribe la condición para comprobar si contestantInfor no está indefinido 
    if(allContestants!==undefined){
     var dispos = 300 
     textSize(20);
     text("si el jugador respondio correctamente su nombre sera verde",130,230); 
     dispos= dispos+20 
     var answerC = "3"
     for(var plr in allContestants){
       if(answerC===allContestants[plr].answer){
          fill("green")
        } else{
        fill("red")
          }
    }
     text(allContestants[plr].name, 425, dispos)
    }

    //escribe el código para resaltar al concursante que respondió correctamente
    
    
  }
}
