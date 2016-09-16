(function () {
    // body...
    var app = angular.module('demo-reddit.controllers', ['angularMoment']);

    app.controller('BaseCtrl', function ($scope) {
        // body...
    });

    app.controller('ViewCtrl', function ($scope, $http) {
        // body...
        $scope.articles = [];


        $scope.loadMoreArticles = function  () {
            // body...
            params = {};
            if ($scope.articles.length > 0) {
                params.after = $scope.articles[$scope.articles.length - 1].data.name;
            }
            $http.get('https://www.reddit.com/r/funny/new/.json', {params:params}).then(function (response) {
                // body...
                // console.log(response.data.data.children);
                $scope.articles.push.apply($scope.articles, response.data.data.children);
                // console.log($scope.articles);
                $scope.$broadcast('scroll.infiniteScrollComplete');
            });
        };

        $scope.getNewItems = function  () {
            // body...
            params = {};
            if ($scope.articles.length > 0) {
                params.before = $scope.articles[0].data.name;
            }
            $http.get('https://www.reddit.com/r/funny/new/.json', {params:params}).then(function (response) {
                // body...
                // console.log(response.data.data.children);
                $scope.articles.unshift.apply($scope.articles, response.data.data.children);
                // console.log($scope.articles);
                // $scope.$broadcast('scroll.infiniteScrollComplete');
            }).then(function () {
                // body...
                $scope.$broadcast('scroll.refreshComplete');
            });
        };

        $scope.openLink = function (url) {
            // body...
            // console.log(url);
            window.open(url, '_blank');
        };

        $scope.$on('$stateChangeSuccess', function() {
            $scope.loadMoreArticles();
          });
    });

})();
