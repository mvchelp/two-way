myapp.controller('CustomerController', function ($scope, CustomerService) {
    $scope.Orders = [];
    $scope.Order = null;

    $scope.editing = false;

    $scope.addOrder = function (Order) {
        if ($scope.Order != null)
        {
            $scope.Orders.push(Order);
            $scope.Order = null;
        }
    }

    $scope.removeOrder = function (index) {
        $scope.Orders.splice(index, 1);
    }
    $scope.editOrder = function (index) {
        $scope.editing = $scope.Orders.indexOf(index);

    }
    $scope.Save = function (index) {
        if ($scope.editing !== false) {
            $scope.editing = false;
        }
    };

    $scope.cancel = function (index) {
        if ($scope.editing !== false) {
            $scope.editing = false;
        }
    };

    $scope.FinalSave = function ()
    {
        if ($scope.Orders.length > 0) {
            CustomerService.save($scope.Orders)
            .success(function (Status) {
                alert("Data Added SuccessFully....!");
            }).error(function () {
                alert("Error to Data Save...!")
            })
        } else {
                alert("Please Add Record...")
        }
    }
})