describe("math", function() {
    var math = require("../../lib/math/math.js");

    it("should return 3" , function() {
        var sum = math.add(1,2);

        expect(sum).toEqual(3)
    })

    it("should return the substruction of two operands ", function(){
        var substruction = math.minus(3,2);

        expect(substruction).toBe(1)
    })
}) 