'use strict';

angular.module("docPortal")
    .controller("PatientCtrl", function ($scope, $routeParams, PatientFactory) {

        $scope.doctor = $routeParams.id;

        PatientFactory.getPatients($routeParams.id)
            .then(patientData=>$scope.patients = patientData.data);

    });