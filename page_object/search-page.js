var SearchPage = function() {
  var clusters = element.all(by.repeater('offer in tripBoard.data.hotelOffers.data.elements'));
  var selectedSorting = element(by.model('selectedSorting'));
  var currency = element(by.model('currency'));
  var filters = element(by.id('ux-hotels-filters'));

  this.get = function() {
    browser.get('http://www.despegar.cl/cp/shop/search/C982/C4544/2016-08-19/2016-08-24/2/0/0/NA/2016-08-19/2016-08-24/2');
  };

  this.getClusters = function() {
    return clusters;
  };

  this.getSorting = function() {
    return selectedSorting;
  };

  this.getCurrency = function(){
    return currency;
  };

  this.getFilters = function() {
    return filters; 
  };

  this.goToDetail = function (clusterIndex = 0) {
    this.getClusters().get(clusterIndex).$('a').click();
  };

};

module.exports = SearchPage;
