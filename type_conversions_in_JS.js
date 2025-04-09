//Converting Strings to Numbers 
{
    let str_num = 3.13;
    console.log(Number(str_num));
    console.log(Number(Math.PI));
    console.log(Number(" "));
    console.log(Number("Zero"));
    console.log(Number("99 98"));
    console.log(Number("Hello"));
}
{
    let y = "John";
    let x = +y;
    console.log(x);
}
{
    let num = 7;
    console.log(String(num));
    console.log(String(123));
    console.log(String(100 + 23));
    console.log(num.toString());
    console.log((123).toString());
    console.log((100 + 123).toString());
}
{
    let d = new Date();
    console.log(d);
    console.log(Number(d));
    console.log(typeof (Date()));
    console.log(typeof (Date().toString()));
}