AngularFireCartAdmin.factory("customerPath", [
    "fbURL",
    function(fbURL) {
        var firebasePath = fbURL + "/users/";
        return firebasePath;
    }
]);