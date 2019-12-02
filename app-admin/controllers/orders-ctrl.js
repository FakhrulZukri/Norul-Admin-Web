AngularFireCartAdmin.controller("OrdersCtrl", [
    "$scope",
    "checkout",
    function($scope, checkout) {
        // Data from Firebase
        $scope.orders = checkout.orders.$asArray();
        $scope.user_id = checkout.user_id.$asArray();
        $scope.predicate = '-orderDate';

        $scope.statuses = [
            {option: "New"},
            {option: "Shipped"},
            {option: "Delivered"},
            {option: "Returned"},
            {option: "Cancelled"}
        ];
        $scope.status = $scope.statuses[1];

        $scope.save = function(order) {
            $scope.orders.$save(order);
        };
        $scope.remove = function(order) {
            $scope.orders.$remove(order);
        };
    }
]);