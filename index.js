//Write a function that returns all the vowels in the English alphabet
function getVowels(){
const vowels = ['a', 'e', 'i', 'o', 'u'];
return vowels;
} 

const vowels = getVowels();
console.log (vowels)

//Return all even numbers 1-10
function getEvenNum(){
   const evenNum = [];
   for (let i=2; i<=10; i+=2){
    evenNum.push(i)
   }
   return evenNum;
}

const evenNum = getEvenNum();
console.log (evenNum)

//Remove all the spaces from the string, then return the resultant string

function removeSpaces(){
    const string = '   I LOVE JAVASCRIPT!!!       ';
    return  string.trim();  
}

const string = removeSpaces();
console.log (string);


//Determine, whether a given year is a leap year or not. In case you don't know the rules, here they are: years divisible by 4 are leap years, years divisible by 100
//are not leap years but years divisible by 400 are leap years

function isLeapYear(year){
    if(year%4 ===0 || year%400===0)
    return (true);
    else if(year%100 ===0)
    return (false);
    else return (false);
} 
isLeapYear();
console.log(isLeapYear(1376))

// Given an unsorted integer array nums, return the smallest missing positive integer. 
//You must implement an algorithm that runs in O(n) time and uses constant extra space.

//To solve this problem, we can use the following algorithm:

//Iterate over the array and mark all positive integers as seen in a separate boolean array of size n.
//Iterate over the boolean array and return the index of the first false value plus one (since we're looking for the smallest missing positive integer).

function findSmallestPositiveInteger (nums) {
    const n = nums.length;
    const seen = new Array(n).fill(false);

    //Mark all positive integers as seen

    for (let i = 0; i < n; i++){
        if (nums[i]>0 && nums[i]<=n){
            seen[nums[i]-1] = true;
        }
    }

    // Return the index of the first false value plus one

    for (let i=0; i<n; i++){
        if(!seen[i]){
            return i+1;
        }
    }
    // If all positive integers are seen, return n+1
    return n+1;
}

const nums = [3,4, -1, 1];
const smallestPositiveInteger = findSmallestPositiveInteger(nums);
console.log(smallestPositiveInteger);

// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. 
//You have the following three operations permitted on a word: insert, delete or replace a character
//Input: word1 = "horse", word2 = "ros” Output: 3 
//Explanation: horse -> rorse (replace 'h' with 'r') rorse -> rose (remove 'r')
//rose -> ros (remove ‘e')

function minDistance(){
    const m = word1.length;//This function takes two strings as input: word1 and word2. 
    const n = word2.length;// It calculates their lengths and stores them in m and n, respectively.

  // Initialize the matrix
  const dp = [];                       //This creates a 2D matrix dp to store the minimum number of operations 
  for (let i = 0; i <= m; i++) {       //required to convert one prefix of word1 to one prefix of word2. 
    dp.push(new Array(n + 1).fill(0));
}                                    //It initializes the matrix to all zeroes.


  // Fill the first row and column of the matrix
  for (let i = 0; i <= m; i++) {         //This initializes the first row and column of the matrix to the minimum 
    dp[i][0] = i;                        //number of operations required to convert an empty prefix to the corresponding prefix of word1 or word2.
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

    // Fill the rest of the matrix                 //This fills the rest of the matrix using dynamic programming. 
    for (let i = 1; i <= m; i++) {                 //For each position (i, j), it checks if the (i-1)th character of word1 and the (j-1)th character of word2 are the same. 
        for (let j = 1; j <= n; j++) {             //If they are, it takes the value of the corresponding position in the matrix (i-1, j-1). 
          if (word1[i - 1] === word2[j - 1]) {     //If they are not, it takes the minimum of three values: the value of the position above (i-1, j) plus 1 (corresponding to a deletion), 
            dp[i][j] = dp[i - 1][j - 1];           //the value of the position to the left (i, j-1) plus 1 (corresponding to an insertion), 
          } else {                                 //and the value of the position diagonally above and to the left (i-1, j-1) plus 1 (corresponding to a replacement).  
            dp[i][j] = 1 + Math.min(
              dp[i - 1][j],    // Delete
              dp[i][j - 1],    // Insert
              dp[i - 1][j - 1] // Replace
            );
          }
        }
}
          // Return the result
          return dp[m][n];
}

const word1 = "horse";
const word2 = "ros";
const minOperations = minDistance(word1, word2);
console.log(minOperations); // Output: 3
 
      
    





