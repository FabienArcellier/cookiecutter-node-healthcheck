const factory = require('./factory.js');

describe('{{cookiecutter.domain}}', function() {
    this.timeout(10000);

    let {{ cookiecutter.domain }} = '{{cookiecutter.url}}';

    it('HOME - /', function (done) {
        // Given When Then
        factory
            .request({{ cookiecutter.domain }})
            .get("/")
            .expect(200)
            .responseWhenError(done);
    });
});
