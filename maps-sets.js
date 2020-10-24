//what does the following code return?
new Set([1,1,2,2,3,4]);
// creates a set but as there are no duplicate values, the set would be [1,2,3,4]

//what does the following code return:
[...new Set('referee')].join("");
// step 1: ['r','e','f']
// then they are joined with no spaces, resulting in "ref" as the return

//what does the Map m look like after running the following code: 
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

//m[0] = {Array(3) => true};
//m[1] = {Array(3) => false};

//hasDuplicate
// write a function called hasDuplicate which accepts an array
//and return true or faluse if that array contains a duplicate

const hasDuplicate = arr => new Set(arr).size !== arr.length;
// hasDuplicate is passed an array, you create a new set and pass the array
// if the set size is not equal to array length, there has to be a duplicate
// since a set is only comprised of unique numbers

//vowelCount
//write a function called vowelCount which accepts a string and returns a map
// where the keys are numbers and the values are the count of the vowels in the string

function vowelCount(string) {
    let vowels = "aeiou";
    const vowelMap = new Map();
    for (let char of string) {
        if (vowels.indexOf(char) !== 0) {
            vowelMap.set(char, vowelMap.get(char) +1);
        } else {
            vowelMap.set(char, 1);
        }
    }
};

// this should return a map that's case insensitive, so it needs to be re-worked to convert all letters to lower case