const config = require('../Configuration/config.json');
let request = require('supertest');
let cart_id;


//   });
describe('Test the commercetool API', () => {
  test('Get Cart API ', () => {
  
    
    request(config.baseURL).get('/commercetools-training-qa/carts')
      .set('Content-Type', 'application/json')
      .set('Authorization','Bearer gDYnS25uieikfjF8EUpFfZF_L2mVpyHl')

      //.auth('SKwMYpEdiyKsBuwOqyHav6W1', 'EnMVcxzLsq3Oei6n2ESIUopbZWGEa59R')
      //.retry(3)
      .then(response => {
          //console.log(response)
          expect(response.statusCode).toBe(200);
          cart_id=JSON.stringify(response.body.results[0].id)
          console.log("Ist test case-cart id: " +cart_id)
          // expect(response.body.name).toBe(expected.createdUser.name);
          // expect(response.body.job).toBe(expected.createdUser.job);
          //expect(response.body).toHaveProperty("access_token");
          
      })
    })
  //console.log(${cart_id})
test('Get Cart by Id ', () => {
    
    request(config.baseURL).get('/commercetools-training-qa/carts/${cart_id}')
      .set('Content-Type', 'application/json')
      .set('Authorization','Bearer gDYnS25uieikfjF8EUpFfZF_L2mVpyHl')
  
      .then(response => {
        console.log("testcase 2 "+cart_id)
           
        expect(response.statusCode).toBe(200);
           
              
        }) 
    })


  // test('It Should create a new token ', () => {
  //   //return request(config.baseURL).post('oauth/token').query({
  //     request("https://api.us-central1.gcp.commercetools.com").post("/oauth/token").query({
  //     'grant_type':'client_credentials',
  //    })
  //       .set('Content-Type', 'application/json')
  //       //.send(input.createUser)
  //       .auth('SKwMYpEdiyKsBuwOqyHav6W1', 'EnMVcxzLsq3Oei6n2ESIUopbZWGEa59R')
  //       .retry(3)
  //       .then(response => {
  //           expect(response.statusCode).toBe(200);
  //           // expect(response.body.name).toBe(expected.createdUser.name);
  //           // expect(response.body.job).toBe(expected.createdUser.job);
  //           //expect(response.body).toHaveProperty("access_token");
            
  //       })        
  //     })

  // const isIncludeField = function (fieldName) {
  //   return function (res) {
  //     res.body.should.have.property(fieldName);
  //   };
  // }
  // test('Get Cart API ', () => {
  //     request(config.baseURL).post('/commercetools-training-qa/carts')
  //     .set('Content-Type', 'application/json')
  //     .set('Authorization','Bearer 5zMAZOzsutAtzw32L31A1Lv0ZXpdy6ie')
  //     .send({ 
  //         "currency" : "EUR",
  //         "shipping" : [ ],
  //         "customShipping" : [ ]
  //     })

   
  //     .then(response => {
  //         expect(response.statusCode).toBe(201);
  //         expect(isIncludeField('id'))
          // expect(response.body.name).toBe(expected.createdUser.name);
          // expect(response.body.job).toBe(expected.createdUser.job);
          //expect(response.body).toHaveProperty("access_token");
          // .expect((res) => {
          //   res.body.should.containEql(testSchedulesMovie[0])
          //   res.body.should.containEql(testSchedulesMovie[1])
          //  })
          // .expect((res) => {
          //   assert.equal(res.body.length, 3, `Expected unspent transactions of address '${context.address1}' to be '3'`);
          // });
          
      //})
    
      
    //})
  


    })           
                
            
    
