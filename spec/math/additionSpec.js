describe("math", function() {
    var add = require("../../lib/math/math");
    it("should return 3" , function() {
        var sum = add(1,2);
        
        expect(sum).toEqual(3)
    })
}) 