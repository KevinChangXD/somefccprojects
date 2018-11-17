const oldArray = [1,2,3,4,5];

// map method 🐏
/*
const mapArray = oldArray.map((val) => {
    return val * 3;
})
console.log(mapArray)
*/

// reduce method 🐂 reduce(arg1[callback],arg2[optional])
/*
const reduceArray = oldArray.reduce((prev,next) => {
    return prev + next;
},20)
console.log(reduceArray)
*/

// filter method 🐥
/*
const filterArray = oldArray.filter((val) => {
    return val % 2 != 0;
})
console.log(filterArray)
*/

//sort method 🐘 the original array now has been changed
/*
const sortArray = oldArray.sort((a,b) => {
    return b - a 
})
console.log(sortArray)
*/

//concat method 
/*
const concatArray = [5,[1,2],3];
const newArray = oldArray.concat(concatArray)
console.log(newArray)
*/

//string split into an array
/*
let str = 'hello world';
const strToArr = str.split('');
console.log(strToArr)
*/

//array joined as a string
/*
const arrToStr = oldArray.join('');
console.log(arrToStr)
*/

//Reverse a String 🦆
/*
const reverseStr = (str) => {
    return str.split('').reverse().join('');
}
console.log(reverseStr('hello'));
*/

// n! 🐶
/*
const myFactorial = function factorial(num){
    if(num <= 1){
        return 1;
    }
    return num * factorial(num-1);
}
factorial = null;
console.log(myFactorial(10));
*/

//palindrome check 🐒
/*
const palindrome = (str) => {
    str = str.replace(/[^a-zA-Z0-9]+/g,'').toLowerCase();
    let compareStr = str.split('').reverse().join('');
    // console.log(str,typeof str);
    // console.log(compareStr, typeof compareStr);
    if(str === compareStr){
        return true;
    }
    return false;
}
console.log(palindrome('eye'))
*/

//finding the longest word in a string 🎂
/*
const longestWord = (str) => {
    str = str.split(' ');
    return str.sort((pre,next) => {return pre.length - next.length})[str.length-1]
}

console.log(longestWord('i am a robot'))
*/

//title case a sentence

/*
const titleCase = (sentence) => {
    return sentence
            .split(' ')
            .map((val) => {
                    val = val[0].toUpperCase() + val.substr(1);
                        return val;
                })
            .join(' ')
}
console.log(titleCase('i am a robot'))
*/

// return largest numbers in arrays 🎄
/*
const largestNumInArrays = (arr) => {
    const result = [];
    arr.forEach((val) => {

        // use spread operator 
        let max = Math.max(...val)

        // use sort to get the biggest one
        // let max = val.sort().reverse()[0];
        
        // another way to find the biggest value in an array
        // let max = Math.max.apply(null,val);
        
        result.push(max);
    })
    return result;
}

console.log(largestNumInArrays([[1,4,2],[2,5,1],[3,6,9],[10,12]]))

*/

//confirm the ending 😜
/*
const confirmEnding = (str,ending) => {
    return str.substr(-(ending.length),ending.length) === ending 
}
console.log(confirmEnding('Boston','ton'));
*/

//repeat a string serveral times 😜
/*
const repeatStr = (str,times) => {
    return times >= 0 ? str.repeat(times) : '' 
}
console.log(repeatStr('abc',-1));
*/

//truncate a string  🔨
/*
const truncateStr = (str, nums) => {
     if(nums > 3){
         if(str.length > nums){
             return str.substring(0,nums) + "..."
         }else{
             return str + '.'.repeat(nums-str.length);
         }
     }else{
         if(str.length > nums){
             return str.substring(0,str.length-nums-1) + '...'
         }else{
             return str + '.'.repeat(num-str.length)
         }
     }

}
console.log(truncateStr('sadfea sdfeafdsf', 30))
*/

// chunky monkey 🐒  🔨
/*const chunkyMonkey = (arr,size) => {
    const result = [];
    const lastIndex = Math.floor(arr.length/size) * size
    if(arr.length <= size){
        return arr;
    } 
    for(let i = 0; i < lastIndex ; i=i+size){
        result.push(arr.slice(i,i+size))
    }
    result.push(arr.slice(lastIndex));
    return result; 
}
console.log(chunkyMonkey([1,2,3,4,5,6,7,8],3))
*/

//slasher flick : splice(startIndex[,length,...args|items that you want to insert])
/*
const slashFlick = (arr,nums) => {
    if(nums < 0){
        return false;
    }
    arr.splice(0,nums)
    return arr
}
console.log(slashFlick([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5))
*/

// mutations 
/*
const mutations = (arr) => {
    const resultArray = []
    arr[1].split('').forEach((val) => {
            resultArray.push((arr[0].indexOf(val) >= 0).toString())
        })
    console.log(resultArray); 
    return resultArray.indexOf('false') >= 0 ? false : true   
}
console.log(mutations(['hello','e5']))
*/

//falsy bouncer
/*
const falsyBouncer = (arr) => {
    return arr.filter((val) => { return Boolean(val) !== false})
}
console.log(falsyBouncer([false, null, 0, NaN, undefined, ""]))
*/

// seek and destroy
/*
const seekAndDestroy = (arr, ...rest) => {
    for(let key of rest){
        arr = arr.filter((a) => {
            return a !== key
        })
    }
    return arr
}
console.log(seekAndDestroy(["tree", "hamburger", 53], "tree", 53))
*/

//where do i belong
/*
const whereDoIBelong = (arr,i) => {
    arr.push(i);
    return (arr.sort()).indexOf(i)
}
console.log(whereDoIBelong([1,3,5,3.5,4],1))
*/

//caesars cipher 🔨
/*
const caesarsCipher = (str) => {
    const codeArr = []
    for(let i = 0; i < str.length; i++){
        codeArr.push(parseInt(str.charCodeAt(i))+13)
    }
    return String.fromCharCode.apply(null,codeArr)
}
console.log(caesarsCipher('SERR PBQR PNZC'))
*/