// 1)Convert given string to Sorting order
// const str=prompt('enter the string');
// const words=str.split('');
// words.sort();
// prompt("The sort word are:",words);


// 2)Get count of vowels and consonents from given string
function count(){
    var countvowel=0,countConsonent=0;
    let str=prompt("enter your sentance:")
    for(var i=0;i<str.length;i++){
        if(str[i]=='a'|| str[i]=='e'|| str[i]=='i'||str[i]=='o'||str[i]=='u'||str[i]=='A'|| str[i]=='E'|| str[i]=='I'||str[i]=='O'||str[i]=='U'){
        countvowel+=1;
        
    }
    else{
        countConsonent+=1;
    }
}
const arr=[countvowel,countConsonent]

return arr;


}
arr = count()
console.log('No of vowel:' + arr[0] + ' No of consonent:' + arr[1])

// 3) pic only 3 letter word from the given input sentence
// Ex : var input= From 2019 to 2021 saw Salesforce make two of its largest acquisitions, with Salesforce completing its acquisition Tableau, a data visualization and analytics software company
// O/p: Saw , two, its ....etc.

var input= "From 2019 to 2021 saw Salesforce make two of its largest acquisitions, with Salesforce completing its acquisition Tableau, a data visualization and analytics software company";