describe('HTTP GET and POST Examples', function(){

    it('HTTP GET Method Case', function(){
        cy.request({

            method: 'GET',
            url:'https://httpbin.org/get'

        }).then(function(response){
            
            expect(response).property('status').to.equal(200);
            expect(response.body).have.property('url');

        })

    });

    it('HTTP POST Method Case', function(){
        cy.request({

            method: 'POST',
            url:'https://httpbin.org/post',
            body: {
                'name':'qamar riaz',
                'age': 27
            },
            headers:{
                'content-type':'application/json'
            }

        }).then(function(response){
            
            expect(response).property('status').to.equal(200);
            expect(response.body).to.not.be.null;
            cy.log(response.body);
            expect(response.headers['content-type']).to.eq('application/json');

            expect(response.body).have.property('json');
            expect(response.body.json).to.deep.equal({
                
                    'name':'qamar riaz',
                    'age': 27
                
            });
            expect(response.body.headers).have.property('Host');
            expect(response.body.json['name']).to.have.lengthOf(9);

        })

    });

});