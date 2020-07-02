// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
// My solutions are as follows:
 let a = [1,2,3,4,5];
 let d = 4 ;
 console.log(a);

// Solution 1
function rotLeft(a, d) {

    // my code starts here
    // let aNew = a.concat();   or.   let aNew = [...a];
    // are used to copy value of  a  into  aNew  instead of copying reference so
    // either change in a or aNew will not affect each other. But, 
    // for this example, it does not matter because a is protected by HackerRank. 
    let aNew = a;
    for (let i = 0; i < d; i++){
        let frontItem = aNew.shift();
        aNew.push(frontItem);
    }
    return aNew;
    // my code ends here
    
    }




//  Solution 2 is not prefect because nested for loops is not fast enough to pass one of the speed tests
 function rotleft(a,d){
    //  My code starts here
 for (let h=1; h<=d; h++){
 let num0=a[0];
 for (let i=0; i<= a.length-1; i++){
     if ( i == a.length-1){
         a[i] = num0;
     } else {
     a[i] = a[i+1];
     }
 }
}
return a;
// my code ends here
}

rotleft(a,d);
console.log(a);
// or 
// console.log(rotleft(a,d));