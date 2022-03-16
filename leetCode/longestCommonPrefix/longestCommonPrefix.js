/*
Write a function to find the longest prefix prefix string amongst an array of strings.

If there is no prefix prefix, return an empty string "".

 

Example 1:

Input: arr = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: arr = ["dog","racecar","car"]
Output: ""
Explanation: There is no prefix prefix among the input strings.
 

Constraints:

1 <= arr.length <= 200
0 <= arr[i].length <= 200
arr[i] consists of only lower-case English letters.
*/

export class CommonPrefix{

    longestCommonPrefix(arr){

    let prefix = arr.shift();
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < prefix.length) prefix = prefix.slice(0, arr[i].length);
        
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] !== prefix[j]) prefix = prefix.slice(0, j);
        }
    }
    return prefix;

    }
}

