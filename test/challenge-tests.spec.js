'use strict'

const chai = require('chai')
const expect = chai.expect
const hotels = require('../src/main')
const getCheapestHotel = hotels.getCheapestHotel 


  describe('Test getCheapesHotel function', () => {
    it('Tests if the function returns an error when called with no arguments', () => {
      const error = 'Error: Function was called with no arguments.'
      expect(() => getCheapestHotel()).to.throw(Error, error);
    })

    it('Tests if it returns an error if the user is not specified', () => {
      const error = 'Error: User type was not informed.';
      const input = '16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)'
      expect(() => getCheapestHotel(input)).to.throw(Error, error);
    })

    it('tests if the function has the expected return when using the correct argument', () => {
      const input = 'Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)';
      const expected = 'Lakewood'
      expect(getCheapestHotel(input)).to.equal(expected);
    })

    it('Test if the return is as expected by entering 5 dates', () => {
      const input = 'Regular: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat), 29Mar2009(sun), 30Mar2009(mon) ';
      const expected = 'Lakewood'
      expect(getCheapestHotel(input)).to.equal(expected);
    })
  })