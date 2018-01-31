'use strict';

angular.module("docPortal").factory("PatientFactory", function ($q, $http) {

    let getPatients = (doc) => {
        return $q((resolve, reject) => {
            $http
                .get(`https://tm-nss-jan8.firebaseio.com/doctors/patients.json?orderBy="doctor_id"&equalTo="${doc}"`)
                .then(patientData => {
                    resolve(patientData);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };

    return { getPatients };

});