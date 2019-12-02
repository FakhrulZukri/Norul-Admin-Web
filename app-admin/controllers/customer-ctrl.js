AngularFireCartAdmin.controller("CustomerCtrl", [
    "$scope",
    "$firebase",
    "$location",
    "$routeParams",
    "customerPath",
    "checkout",
    function($scope, $firebase, $location, $routeParams, customerPath, checkout) {
        var customerURL = new Firebase(customerPath + $routeParams.id);
        var customer = $firebase(customerURL);
        $scope.customer = customer.$asObject();
        
        $scope.orders = checkout.orders.$asArray();

        $scope.save = function(customer) {
            $scope.customer.$save(customer);
        };
    }
]);