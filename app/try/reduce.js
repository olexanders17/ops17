arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', ''];

/*{
 one:{
 two:{
 thre:''}
 }
 }*/

/*
 r = arr.reduce(function (prevVal, currVal) {
 console.log(" :", "prevVal=", prevVal);
 console.log(" :", "currVal=", currVal);

 prevVal[currVal]={};

 return prevVal ;
 }, {});

 console.log(r);*/


/*
 aa={};

 aa.n1={}

 console.log(aa);
 */

/*
 var itemparts = arr;

 var value = itemparts.pop();
 while (itemparts.length) {
 var obj = {};
 obj[itemparts.pop()] = value;
 value = obj;
 }
 //end.push(value);
 console.log(value);*/

val = arr.pop();
while (arr.length) {
    var obj = {};
    obj[arr.pop()] = val;
val=obj;
}


console.log(val);





