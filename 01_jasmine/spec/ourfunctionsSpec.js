describe("Test array output", function () {
    it("checking the console for a specific outpu^t",

    function () {

        console.log = jasmine.createSpy("log");

        iterateArray();

        expect(console.log).toHaveBeenCalledWith('Thomas');
    });
});