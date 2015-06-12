/**
 * Created by deavenbrown on 6/12/15.
 */
//Deaven Brown
//PWA1 201506 Section-01
//June 12, 2015

(function() {
    //Give the players a name, starting health, and maximum amount of damage they are able to deal (in an array)
    var playerOne = ["Kabal", 100, 15];
    var playerTwo = ["Kratos", 100, 15];
    //Count which round we are on
    var round=0;
	//create a self executing function
    function fight(){
    	//Create an alert that will show the user how much health each player has left
        alert(playerOne[0]+":"+playerOne[1]+"  *START*  "+playerTwo[0]+":"+playerTwo[1]);
        for (var i = 0; i < 10; i++)
        {
            //Find the minimum amount of damage each player will deal
            var minDamage1 = playerOne[2] * .5;
            var minDamage2 = playerTwo[2] * .5;

            //Find the amount of damage each player deals each round
            var f1 = Math.floor(Math.random()*(playerOne[2]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwo[2]-minDamage2)+minDamage2);

            //Deal damage to each player equal to the amount of damage determined in the above code
            playerOne[1]-=f1;
            playerTwo[1]-=f2;

            //console.log the amount of each player's health left
            console.log(playerOne[0]+": "+playerOne[1] + " " + playerTwo[0]+":"+playerTwo[1]);

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
                alert(playerOne[0]+":"+playerOne[1]+"  *ROUND "+round+" OVER"+"*  "+playerTwo[0]+":"+playerTwo[1]);
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
        if (playerOne[1]<1 && playerTwo[1]<1)
        {
            result = "You Both Die";
        //If playerOne's health is 0 or less
        } else if(playerOne[1]<1){
            result =playerTwo[0]+" WINS!!!"
        //If playerTwo's health is 0 or less
        } else if (playerTwo[1]<1)
        {
            result = playerOne[0]+" WINS!!!"
        }
        return result;
    }

    /*******  The program gets started below *******/
    fight();

})();