/* Nullish Coalesing Operator 
- only null and undefined are considered as nullish values */
{
    const value1 = null ?? "Fallback";
    console.log(value1);
    const value2 = 0 ?? "Fallback";
    console.log(value2);
    const value3 = undefined ?? "Fallback";
    console.log(value3);
    const value4 = "" ?? "Fallback";
    console.log(value4);
}

/* Logical OR Operator 
Treats all falsy values as invalid (false,0,NaN,"",null and undefined) */

console.log(false || "Print1");
console.log(null || "Print2");
console.log("" || "Print3");
console.log(NaN || "Print4");
console.log(undefined || "Print5");
console.log("Psych" || "Print6");