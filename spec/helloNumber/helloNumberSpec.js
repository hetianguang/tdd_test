describe("helloNumber", function() {

    var helloNumber = require("../../lib/helloNumber/helloNumber");

    it("when input number should return number String" , function() {
        var number = helloNumber(1);

        expect(number === "1").toBe(true)
    })

    it("when input number of 3 multiple should return Fizz", function() {
        var number = helloNumber(3);

        expect (number === "Fizz").toBe(true);
    })

    it("when input number of 5 multiple should return Buzz", function() {
        var number = helloNumber(5);

        expect (number === "Buzz").toBe(true);
    })
}) 