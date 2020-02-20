describe("Test array output", function () {
    it("Should iterate through objects in array and output the names in the objects",

    function () {

        console.log = jasmine.createSpy("log");



        expect(console.log).toHaveBeenCalledWith('Thomas');
    });
});

