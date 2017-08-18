(function() {
  var app = angular.module('House', []);

  app.controller('HouseController', function() {
    this.products = houses;
  });

  var houses = [{
    name: 'An phu Plaza',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [
      "images/img1.png",
      "images/img2.png",
      "images/img3.png"
    ]
  }, {
    name: 'Pico Plaza',
    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    shine: 9,
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: [
      "images/img3.png",
      "images/img2.png",
      "images/img1.png"
    ]
  }, {
    name: 'havana plaza',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
      "images/img2.png",
      "images/img1.png",
      "images/img3.png"
    ]
  }];
})();
