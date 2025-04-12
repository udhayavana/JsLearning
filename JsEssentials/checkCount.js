
let count=0;
function displayCount(){
    document.getElementById("follower_count").innerHTML=count;
}
function increaseCount(){
   count++;
   displayCount();
}