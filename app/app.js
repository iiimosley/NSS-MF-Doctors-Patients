'use strict';

let doc = angular.module("docPortal", ['ngRoute'])
    .config($routeProvider => {
        $routeProvider
            .when("/", {
                templateUrl: "../partials/doctors.html",
                controller: "DoctorCtrl"
            })
            .when("/patients/:id", {
                templateUrl: "../partials/patients.html",
                controller: "PatientCtrl"
            })
            .otherwise("/");
    });