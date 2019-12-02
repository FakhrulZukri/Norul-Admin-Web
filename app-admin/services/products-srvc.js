AngularFireCartAdmin.factory('products', [
    "$firebase",
    "fbURL",
    function($firebase, fbURL) {
        var firebaseURL = new Firebase(fbURL + "/menu");
        var products = $firebase(firebaseURL);
        return products;
    }
]);