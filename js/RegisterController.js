controller('RegisterController', function($scope, $location, UserAPIService, store) {
 
        $scope.registrationUser = {};
        var URL = "https://morning-castle-91468.herokuapp.com/";
 
        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;
 
                UserAPIService.callAPI(URL + "accounts/register/", $scope.registrationUser).then(function(results) {
                    $scope.data = results.data;
                    alert("You have successfully registered to Angular Todo");
                }).catch(function(err) {
                    alert("Oops! Something went wrong!");
                    console.log(err);
                });
            }
        }
    });