// starter for 10 activity


function checkFirstOccurence (str){

    for (var i=0; i<str.length; i++){
        var count=0;
        var char=string[i]; 
        
    for(var j=0; j<str.length; j++){
        if (str[j]===char){
            count++
        }
}
if (count ===1){
    return char;
}

    }
}

console.log(checkFirstOccurence("the quick brown fox jumps over the calm sleeping kitten"))