"use strict";
//the fat arrow will bounce to it's nearest parent - since we are injecting the factory to the controller, the controlelr is the parent. For a controller, though, the parent is the window, so we cannot use a fat arrow. (this keyword)

app.factory("GuideFactory", function($http, $q){

let getGuides = function(){
  console.log("inside getGuides");
    return $q((resolve, reject) => {
      $http.get("data/guides.json")
    .then( (data) =>{
      resolve(data);
    })
    .catch( () =>{
      reject();
    });
  });
};

return {getGuides};

});
