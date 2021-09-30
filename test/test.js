var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var expect = chai.expect;
chai.use(chaiHttp);

describe('sample_tests', function() {
	it('test 0', (done) => {
        expect(1).to.be.equal(1);
	});
});


