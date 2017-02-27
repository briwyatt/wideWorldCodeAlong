"use strict";

var app = angular.module("TravelApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
  .when("/",{
    templateUrl: "partials/guideList.html",
    controller: "BookCtrl"
  })
  .otherwise("/");
});
//[] you can inject other modules (firebase) that is a dependency in your app
