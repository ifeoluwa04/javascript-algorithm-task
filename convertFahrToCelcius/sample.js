let convertFahrToCelcius = (f) => {
    if(typeof f == 'number') {

        let celsius = ((f - 32) * (5/9));
        return Math.round(celsius * 1e4) / 1e4;
        
    }
            else if (typeof f =='object') {
            if(Array.isArray(f)) {
                console.log('this is an array');
                
                return  `${f} is not a valid number but an array`
            } 
               else {
                     console.log('this is an object');
                     output = `${JSON.stringify(f)} is not a valid number but a ${typeof f}.`
                     return  output
                    }    
        }
            else if (typeof f == 'string'){
                console.log('')
                let fNumber = Number(f);                
               console.log(fNumber)
                console.log(typeof fNumber)

            if(isNaN(fNumber)) {
                console.log("this is not a number")
                return (`${f} is not a valid number but a ${typeof f}.`)
            } else {
                let celsius = ((fNumber - 32) * (5/9));
                return Math.round(celsius * 1e4) / 1e4;
            }
    }           else {
                  console.log('failure');
    
                }
}
