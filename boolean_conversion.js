if (0) {
    console.log("This will not print");
}
if (1) {
    console.log("This will print");
}
{
    let year = new Date().getFullYear();
    let good_cond = (year == 2015);
    if (good_cond) {
        console.log("This will print if we are back in 2015 :)");
    }
    let bad_cond = (year == 2025);
    if (bad_cond) {
        console.log("This will print if we are in sad times :(");
    }
}