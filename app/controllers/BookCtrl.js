"use strict";

app.controller("BookCtrl", function($scope, GuideFactory){

let printGuides = function(){
  console.log("inside printGuides");
  GuideFactory.getGuides()
  .then( (guides) =>{
    console.log("guides: ", guides.data.guides);
    $scope.guides = guides.data.guides;
  });
};

printGuides();

});
