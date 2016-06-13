var sp = require('../page_object/search-page.js');
var dp = require('../page_object/search-page.js');
    

    describe('Preselected Flight CP search page', function() {

      beforeAll(function () {
        this.SearchPage = new sp();
        this.DetailPage = new dp();
      });

      afterAll(function () {

      });
      it('Should more than 19 hotel', function(done) {
        this.SearchPage.get();

        this.SearchPage.getClusters().count().then(function (items) {
          console.log("[INFO] Checking Clusters found: " + items);
          expect(items).toBeGreaterThan(19);
        });

        done();
      });

      it("Should have all basic elements", function (done) {

        this.SearchPage.getSorting().isDisplayed().then(function (elem){
          console.log("[INFO] Checking for Sorting  to be displayed");
          expect(elem).toBeTruthy();
        });

        this.SearchPage.getCurrency().isDisplayed().then(function (elem){
          console.log("[INFO] Checking  for Currency to be displayed");
          expect(elem).toBeTruthy();
        });

        this.SearchPage.getFilters().isDisplayed().then(function (elem){
          console.log("[INFO] Checking for Filters  to be displayed");
          expect(elem).toBeTruthy();
        });

        done();
      });

      it("Cluster consistency", function (done) {
         this.SearchPage.getClusters().each( function(cluster, index){
             cluster.element(by.css('div.hotel-fare')).isDisplayed().
             then( function (hotelfare) {
                since("[ERROR] 'div.hotel-fare' is not displayed on cluster:" + index).
                expect(hotelfare).toBeTruthy();
             });
         });
        done();
      });

      it("It should be able to go to Detail", function (done) {
        this.SearchPage.goToDetail();
        browser.pause();
        done();
      });
    });
