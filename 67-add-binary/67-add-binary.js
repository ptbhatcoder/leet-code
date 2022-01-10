/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const aArr = a.split('');
    const bArr = b.split('');
    let aIndex = aArr.length - 1;
    let bIndex = bArr.length - 1;
    let result = [];
    let carry = 0;
    while(aIndex >= 0 && bIndex >= 0){
        const av = +aArr[aIndex];
        const bv = +bArr[bIndex];
        const sum = carry ^ av ^ bv;
        carry = (av & bv) | (bv & carry) | (carry & av);
        result.push(sum);
        //console.log(sum, carry, result, aIndex, bIndex, av, bv);
        aIndex--;
        bIndex--;
        
    };
    
    //console.log(result);

    
    while(aIndex >= 0){
        const av = +aArr[aIndex];
        const sum = carry ^ av;
        carry = av & carry;
        result.push(sum);
        aIndex--;
    }
    
    while(bIndex >= 0){
        const bv = +bArr[bIndex];
        const sum = carry ^ bv;
        carry = bv & carry;
        result.push(sum);
        bIndex--;
    }
    
    if(carry){
        result.push(carry);
    }
    
    return result.reverse().join('');
    
};