// QUESTION 1Write a JavaScript function to check whether an `input` is an array or not
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// True


//CODE
isarray =function(input){
  if(toString.call(input)==="[object Array]")
    return true;
  return false;
  };
console.log(isarray('Ishan'));
console.log(isarray([1, 2, 4, 0]));




/* QUESTION 2: Write a JavaScript function to clone an array
 Test Data :
 console.log(array_Clone([1, 2, 4, 0]));
 console.log(array_Clone([1, 2, [4, 0]]));
 [1, 2, 4, 0]
 [1, 2, [4, 0]]
*/

//CODE
array_Clone = function(arr1) {
 return arr1.slice(0);
    };
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));




/* Question 3 : Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
 Test Data :
 console.log(first([7, 9, 0, -2]));
 console.log(first([],3));
 console.log(first([7, 9, 0, -2],3));
 console.log(first([7, 9, 0, -2],6));
 console.log(first([7, 9, 0, -2],-3));
 Expected Output :
 7
 []
 [7, 9, 0]
 [7, 9, 0, -2]
 []*/


//CODE
first =function(arr,n){
  if (n==null)
    return arr[0];
  if (n<0)
    return []
  
  return arr.slice(0,n);
  };

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));




 /*Question 4 : Write a simple JavaScript program to join all elements of the following array into a string.
  Sample array : myColor = ["Red", "Green", "White", "Black"];
  Expected Output :
 "Red,Green,White,Black"
 "Red,Green,White,Black"
 "Red+Green+White+Black"*/

//CODE
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));



/* Question 5 : Write a JavaScript program to find the most frequent item of an array
 Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
 Sample Output : a ( 5 times )
*/

//CODE
first =function(arr){
  var maxf=1;
  var m=0;
  var item;
  for (var i=0;i<arr.length;i++)
    {
      m=0;
      for(var j=i;j<arr.length;j++)
        {
          if(arr[i]==arr[j])
            m++;
            if (m>maxf)
            {
              maxf=m;
              item=arr[i];
            }
        }
    }
    console.log(maxf,item)
  };

console.log(first([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));