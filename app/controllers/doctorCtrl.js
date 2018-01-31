'use strict';

angular.module("docPortal")
    .controller("DoctorCtrl", function ($scope, DoctorFactory) {

        DoctorFactory.getDoctors()
            .then((doctorData) => {
                $scope.doctors = doctorData.data.doctors;
            });

    });