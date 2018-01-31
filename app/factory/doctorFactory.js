'use strict';

angular.module("docPortal").factory("DoctorFactory", function ($q, $http) {

    let getDoctors = () => {
        return $q((resolve, reject) => {
            $http
                .get("https://tm-nss-jan8.firebaseio.com/doctors.json")
                .then(doctorData => {
                    let docKeys = Object.keys(doctorData.data.doctors);
                    docKeys.map(key => {
                        doctorData.data.doctors[key].id = key;
                        return doctorData.data[key];
                    });
                    resolve(doctorData);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };

    return { getDoctors };

});