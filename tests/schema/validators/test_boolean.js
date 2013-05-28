var Osmos = require('../../../lib');
var expect = require('chai').expect;

describe('The boolean validator', function() {
    it('should exist', function() {
        expect(Osmos.Schema.validators.boolean).to.be.a('function');
    });
    
    it('should not throw errors', function(done) {
        function validate() {
            Osmos.Schema.validators.boolean({}, 'field', 123, function(err) {
                done();
            });
        }
        
        expect(validate).not.to.throw(Osmos.Error);
    });
    
    it('should report errors when an invalid value is passed', function(done) {
        Osmos.Schema.validators.boolean({}, 'field', 123, function(err) {
            expect(err).to.be.an('object');
            expect(err.constructor.name).to.equal('OsmosError');
            done();
        });
    });
    
    it('should allow proper values', function(done) {
        Osmos.Schema.validators.boolean({}, 'field', true, function(err) {
            expect(err).to.equal(undefined);
            done();
        });
    })
});