var app = angular.module("myModule", [])
                 .controller("myController", function($scope) { 
                        $scope.message = "Hello world!"

                        $scope.courses = [ { name: "Java", Likes: 10, Dislikes: 40 },
                                            {  name: "C#", Likes: 20, Dislikes: 30 },
                                            { name: "NodeJS", Likes: 40, Dislikes: 70 },
                                            { name: "AngularJS", Likes: 30, Dislikes: 90 }];

                        $scope.incrementLikes = function(course){
                            course.Likes++;
                        };

                        $scope.incrementDislikes = function(course){
                            course.Dislikes++;
                        };

                        $scope.sortColumn = "name"
                        $scope.sortedAsc = true

                        $scope.sortData = function(column) {
                            if($scope.sortColumn == column){
                                $scope.sortedAsc = !$scope.sortedAsc
                            }
                            else{
                                $scope.sortColumn = column
                            }                          
                        };

                        $scope.sortClass = function(column) {
                            if($scope.sortColumn == column) {
                                if(!$scope.sortedAsc)
                                return 'arrow-up';
                                else 
                                return 'arrow-down';
                            }                           
                            return '';
                        };

                        });