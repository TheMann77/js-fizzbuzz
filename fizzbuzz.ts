// This is our main function
function fizzbuzz() :void {
    // console.log("Hello, World!");

    // Put your code here...
    for (let i=1; i<=300; i++) {
        var text = [];
        if (i % 3 == 0) {
            text.push("Fizz");
        }
        if (i % 5 == 0) {
            text.push("Buzz");
        }
        if (i % 7 == 0) {
            text.push("Bang");
        }
        if (i % 11 == 0) {
            text = ["Bong"];
        }
        if (i % 13 == 0) {
            let b_index = 0;
            while (b_index < text.length && text[b_index][0] != "B") b_index++;
            text.splice(b_index, 0,"Fezz");
        }
        if (i % 17 == 0) {
            text = text.reverse();
        }
        const text_string = text.join('');
        console.log(text_string ? text_string : i);
    }
}

// Now, we run the main function:
fizzbuzz();

