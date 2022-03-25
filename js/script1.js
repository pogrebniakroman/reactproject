/* /* const obj = new Object();
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};



for(let key in options) {
    if (typeof(options[key])=== 'object') {
        for (let i in options[key]) {
            console.log(`Properties ${key} have value ${options[key][i]}`);
        }
     } else{
  console.log(`Properties ${key} have value ${options[key]}`);

        }
        
    }

  


    const arr = [1,2,3,4,5,8];

   arr.pop();
    arr.push(9);

    console.log(arr); */

    let a = 5;
    b=a;

    b= b+5;
    console.log(b);

    const obj = {
        a: 5,
        b: 1
    };

    const copy = obj;

    copy.a = 10;

    console.log(copy);