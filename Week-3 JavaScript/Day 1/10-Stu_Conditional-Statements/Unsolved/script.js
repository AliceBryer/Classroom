// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = (x < 25); //false//
var expression2 = (x > 50); //false//

// Write Your JavaScript Code Here//

//expression 1 & 2 are true//
if (expression1 && expression2) {
    console.log('True ✅ True ✅');
    }
//only expression 1 is true//
else if (expression1) {
    console.log('True ✅ False ❌');
}

//only expression 2 is false//
else if (expression2) {
    console.log('False ❌ True ✅');
}

//expression 1 & 2 are false//
else {
    console.log('False ❌ False ❌' );
}