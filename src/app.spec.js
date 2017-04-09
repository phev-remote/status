import chai from 'chai';
import App from './app';

const assert = chai.assert;

const sut = new App();
describe('App',() => {
    it('Should bootstrap',() => {
        assert.isNotNull(sut);
    });
});