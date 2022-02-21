function ExecuteScript(strId)
{
  switch (strId)
  {
      case "64Z0IdQ6Il2":
        Script1();
        break;
  }
}

function Script1()
{
  var player= GetPlayer();
var score=player.GetVar("score");

var lmsAPI=parent;

var finalResult=score/1500;

if(score>=1500){
	score=80;
}


lmsAPI.SetScore(score,100,0);

}

