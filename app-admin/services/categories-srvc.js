AngularFireCartAdmin.factory('categories', [
    "$firebase",
    "fbURL",
    function($firebase, fbURL) {
        var firebaseURL = new Firebase(fbURL + "/category");
        var categories = $firebase(firebaseURL);
        return categories;
    }
]);