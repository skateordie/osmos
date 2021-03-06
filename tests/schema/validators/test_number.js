var Osmos = require('../../../lib');
var expect = require('chai').expect;

describe('The number validator', function() {
    it('should exist', function() {
        expect(Osmos.Schema.validators.number).to.be.a('function');
    });
    
    it('should not throw errors', function() {
        function validate() {
            Osmos.Schema.validators.number({}, 'field', '123');
        }
        
        expect(validate).not.to.throw(Osmos.Error);
    });
    
    it('should report errors when an invalid value is passed', function() {
        var err = Osmos.Schema.validators.number({}, 'field', 'value');

        expect(err).to.be.an('object');
        expect(err.constructor.name).to.equal('OsmosError');
        expect(err.statusCode).to.equal(400);
    });
    
    it('should allow proper values', function() {
        var err = Osmos.Schema.validators.number({}, 'field', 123.12);
        
        expect(err).to.equal(undefined);
    })
});