myapp.service('CustomerService', function ($http) {

    this.save = function (orders) {
        var request = $http({
            method: 'post',
            url: 'api/Customer/PostOrder',
            data: orders,
        });
        return request;
    }
})