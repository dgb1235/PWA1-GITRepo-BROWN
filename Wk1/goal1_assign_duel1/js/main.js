/**
 * Created by deavenbrown on 6/6/15.
 */
//Deaven Brown
//PWA1 201506 Section-01
//June 6, 2015

(function() {
    //Give the players a name
    var playerOneName = "Kabal";
    var playerTwoName = "Kratos";

    //Give each player an equal amount of 100 starting health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //Determine the maximum amount of damage each player can deal per round
    var playerOneDamage = 15;
    var playerTwoDamage = 15;

    //Count which round we are on
    var round=0;

    function fight(){
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        for (var i = 0; i < 10; i++)
        {
            //Find the minimum amount of damage each player will deal
            var minDamage1 = playerOneDamage * .5;
            var minDamage2 = playerTwoDamage * .5;

            //Find the amount of damage each player deals each round
            var f1 = Math.floor(Math.random()*(playerOneDamage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwoDamage-minDamage2)+minDamage2);

            //Deal damage to each player equal to the amount of damage determined in the above code
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            //console.log the amount of each player's health left
            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

            //Call the winnerCheck() function
            var result = winnerCheck();
            //Console log if either player has won the fight
            console.log(result);
            //If neither player has won the fight
            if (result==="no winner")
            {
                //Increase the round by one
                round++;
                //Give an alert that gives the user the name and health of both players
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);
            //If there is a winner
            } else{
                //Alert which player has won
                alert(result);
                break;
            }
        }
    }
    //Check to see if either player has won the fight
    function winnerCheck(){
        //Default results to keep the fight() function running
        var result="no winner";
        //If both players health are 0 or less
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
        //If playerOne's health is 0 or less
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        //If playerTwo's health is 0 or less
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        }
        return result;
    }

    /*******  The program gets started below *******/
    fight();

})();