/*
//Reverse

let rev = 'Roshan'
let reverse = ''

for(let i=rev.length-1;i>=0;i--){
    reverse = reverse +rev[i]
}
console.log(reverse);

//palendrome

let n = 'mam'
let reversed = ''

for(let i=n.length-1;i>=0;i--){
    reversed=reversed+n[i]
}

if(n==reversed){
    console.log(reversed,'its palendrome');
    
}else{
    console.log('Not Palendrome');
    
}



//Anagram

function anagram(str1,str2){
    if(str1.length !==str2.length)return false

    str1length = str1.toLowerCase().split('').sort().join('')
    str2length = str2.toLowerCase().split('').sort().join('')

   return str1length ===str2length
}

console.log(anagram('act','cat'));
console.log(anagram('mutton','nottum'));


//find the string count

let string = 'ggkkffhhttfds'
let find = []

let stsplit = string.split('')

for(let i=0;i<stsplit.length;i++){
    let found = stsplit[i]
    if(find[found]){
        find[found]++
    }else{
        find[found]=1
    }
}
let filter = []

for(let key in find){
    if(find[key]>=2){
        filter.push(`${key}-${find[key]}`)
    }
}
console.log(filter);


// find the fruit

let fruit = ["apple","straberry","blueberry","grapes","apple"]
let count = []

for(let i=0;i<fruit.length;i++){
    let found = fruit[i]
    if(count[found]){
        count[found]++
    }else{
        count[found]=1
    }
}
console.log(count);

*/
//reverse the sentence

let na = 'My Name Is Roshan'
let reve = ''

let split = na.split(' ')

for(let i =split.length-1;i>=0;i--){
    reve = reve +split[i] + ' '

}
console.log(reve);
