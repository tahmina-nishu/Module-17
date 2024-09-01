var your_score = 85;
var friend_score = 85;
if(your_score >= 80)
{
    if(friend_score >= 80)
        console.log("go for a lunch");
    else if(friend_score < 80 && friend_score >= 60)
        console.log("good luck next time");
    else if(friend_score < 60 && friend_score >= 40)
        console.log("keep your friend's message unseen");
    else
        console.log("block your friend");
}
else
console.log("go to home and sleep and act sad");