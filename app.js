
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
    
    angular.module("infoLoc",['angular-meteor']);
    
    angular.module("infoLoc").controller("TodosListCtrl", ['$scope', '$meteor', function($scope, $meteor){
	
	$scope.tasks = $meteor.collection(Tasks);
	
	$scope.addTask = function(newTask) {
	    $scope.tasks.push( {
		text: newTask,
		createdAt: new Date() });
	};
    }]);
}
