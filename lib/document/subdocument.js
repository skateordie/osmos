var documentProxy = require('./proxy');
var AbstractDocument = require('./abstractdocument');
var Subdocument = require('./subdocument');
var ArrayProxy = require('./array.js');
var Error = require('../error');

var util = require('util');

var Subdocument = function OsmosSubdocument(model, data, schema, parent, fieldName, validateValue) {
    this.parent = parent;
    this.fieldName = fieldName;
    this.schema = schema;
    
    if (validateValue) {
        var errors = this.validateAllFields.call(this, data);
        
        errors.forEach(function(err) {
            this.reportError(err);
        }, this);
    }
    
    AbstractDocument.call(this, model, data, schema);
    
    return Proxy(this, documentProxy);
};

util.inherits(Subdocument, AbstractDocument);

module.exports = Subdocument;