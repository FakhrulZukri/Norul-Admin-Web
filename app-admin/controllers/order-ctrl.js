AngularFireCartAdmin.controller("OrderCtrl", [
    "$scope",
    "checkout",
    function($scope, checkout) {
        // Data from Firebase
        $scope.orders = checkout.orders.$asArray();
        $scope.user_id = checkout.user_id.$asArray();
        $scope.predicate = '-orderDate';

        // @todo DRY this code
    }
]);