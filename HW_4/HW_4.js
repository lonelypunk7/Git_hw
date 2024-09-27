//Task 1


let i = 0;
while(i < 10){
    i++;
    if(i % 2 == 0)
        console.log(i);
}


const smile = ":)"

let rowStr = ""; 
for (let i = 0 ; i < 5 ; i++ ){
    rowStr = rowStr + smile
    console.log(rowStr)
}

let text = 'Hello! I am a JS student!';

console.log(text.replaceAll(' ','1'))


//Task 2

for (let i = 1; i <= 100; i++) {

  if (i % 3 === 0) {
      console.log(`Число ${i} делится на 3`); 
}
else if (i % 5 === 0) {
  console.log(`Число ${i} делится на 5`); 
}
else if (i % 3 === 0 && i % 5 === 0) {
  console.log(`Число ${i} делится и на 3 на 5`);
}
}


//Task 3