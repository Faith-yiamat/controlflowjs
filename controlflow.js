  //question1

function manipulate(array){

    const newArray = []
   array.slice(0,4).forEach(item =>{
        newArray.push(item * item);
    })

    newArray.push(array.length-1 +10);
    newArray.push(array.length-2 +10);
    return newArray

}
  const array = [1,2,3,4,5,6,7];
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
  fruits.forEach((frui, index) =>{
    if(index ===1 ){
      return;
    }
    console.log(frui)
  });

}
let fruits= ['apple','plum','banana','strawberries','kiwi'];
contin(fruits);

//question 4
function acceptsArray(strArr){
  for(let i= 0; i<strArr.length; i++){

  
  console.log(strArr[i]);
  }
}
const strArr = ["Faith","Oloserian","Yiamat","Abdo"];
acceptsArray(strArr);


//question 5
function reverseStr(Stringrev){
  let reverse = "";
  let i = 0;
 // for(let i=Stringrev.length-1;i>=0; i--)//{
    while(i<Stringrev.length-1 && i>0){
      reverse+= Stringrev[i];

    
  }
  console.log(reverse);
    return reverse
  
}
const Stringrev = "myname";
console.log(reverseStr(Stringrev));
  



