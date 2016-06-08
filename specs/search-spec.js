
describe('Preselected Flight CP search page', function() {

  it('should more than one hotel', function(done) {
    var url = 'http://www.despegar.cl/cp/shop/search/C982/C4544/2016-08-19/2016-08-24/2/0/0/NA/2016-08-19/2016-08-24/2';
    var hotelRepeater = 'offer in tripBoard.data.hotelOffers.data.elements';

    browser.get(url);

    element.all(by.repeater(hotelRepeater)).count().then(function (items) {
      console.log("Items found:" + items);
      expect(items).toBeGreaterThan(1);
    });

    done();
  });



});
