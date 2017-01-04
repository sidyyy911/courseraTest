(function() {
  'use strict';
  angular.module('ShoppingListCheckOff',[]).controller('ToBuyController',ToBuyController)
                                            .controller('AlreadyBoughtController',AlreadyBoughtController)
                                            .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
  ToBuyController.$inject=['ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
  function ShoppingListCheckOffService(){
    var service=this;
    var toBuyItems=[
      { name: "Water", quantity: "10 Bottles" }, { name: "Sugar", quantity: "2 KG" }, { name: "Cookies", quantity: "5 Bags" },
      { name: "Chips", quantity: "4 Bags" }, { name: "Chocolates", quantity: "4 Packs" } ];
    var boughtItems=[];
    service.getToBuyItems=function () {
      return toBuyItems;
    };
    service.getBoughtItems=function () {
      return boughtItems;
    };
    service.buyArticle=function (index) {
      console.log(index);
      addToBoughtItems(index);
      removeFromToBuyItems(index);
    };
    function addToBoughtItems(index){
      boughtItems.push(toBuyItems[index]);      
    }
    function removeFromToBuyItems(index){
      toBuyItems.splice(index,1);
    }
  }
  function ToBuyController(ShoppingListCheckOffService){
    var buyList=this;
    buyList.articleList=ShoppingListCheckOffService.getToBuyItems();
    buyList.buyArticle=function (index) {
      ShoppingListCheckOffService.buyArticle(index);
    };
  }
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtList=this;
    boughtList.articleList=ShoppingListCheckOffService.getBoughtItems();
  }


})();
