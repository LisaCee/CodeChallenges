function firstMultiple2(divisors, start) {
    while (start) {
         for (let i = 0; i < divisors.length; i++) {
        if (start % divisors[i] == 0) {
            return start;
        } 
    } start++
    }
   
}
