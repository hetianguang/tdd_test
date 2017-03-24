describe("helloNumber", function() {

    it("when input number should return number String" , function() {
        var number = helloNumber(1);

        expect(number === "1").toBe(true)
    })
}) 