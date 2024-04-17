//   question1

function manipulate(array){

    const newArray = []
   array.slice(0,4).forEach(item =>{
     newArray.push(item * item)
    });

    newArray.push(array.length-2 +10);
    newArray.push(array.length-1 +10);
    return  newArray

}
  const array = [1,2,3,4,5,6];
  console.log(manipulate(array));
        
//question 2
function mynum (arrNum){
  let index = 0;
  while(index < arrNum.length){
    if(index ===3){
      break;
    }
    console.log(arrNum[index]); index++;
  }
}
let arrNum = [1,2,3,4,5,6,7,8,9];
mynum(arrNum)

//question3
function contin(fruits){
  for(let index = 0; index < fruits.length; index++){
    if(index ===1 ){
         continue;
    }
    console.log(fruits[index])
  };

}
contin(['apple','plum','banana','strawberries','kiwi']);

//question 4
function acceptsArray(strArr){
  for(let i= 0; i<strArr.length; i++){
   console.log(strArr[i]);
  }
}
acceptsArray(["Faith","Oloserian","Yiamat","Abdo"]);


//question 5
function reverseStr(stringrev){
while(y = stringrev.split("").reverse().join("")){
  console.log(y)
  break
}

}
reverseStr("yiamat");
  



