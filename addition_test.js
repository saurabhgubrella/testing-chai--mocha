const chai = require('chai')
const expect = chai.expect
const validator = require('../src/Addition')

describe("validator isAddValid()" , ()=>{

    it("should return number for addition of  numbers in A" ,() => {
        expect(validator.isAddValid(40,30))
    })

    it("should return number afetr addition in B" ,() => {
        expect(validator.isAddValid(10,20))
    })


    it("should return false when number is greater than or equal to 70" ,() => {
        expect(validator.isAddValid(80,0))
    })

})



