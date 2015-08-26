angular.module('exampleApp').controller('TasksCtrl',function($scope, TaskService){

    $scope.taskList = TaskService.model.list;
    $scope.newTask = {};

    $scope.addTask = function(){

        TaskService.addTask({
            id:TaskService.model.list.length+1,
            title:$scope.newTask.title,
            date:Date.now()
        });

        $scope.newTask = {};

    };

    $scope.toggleTask = function(task){

        task.done = !task.done;

    };

    $scope.removeTask = function(task){

        console.log(task);

        angular.forEach(TaskService.model.list, function(_task, index){

            if(task.id === _task.id){
                TaskService.model.list.splice(index,1);
            }

        });

    };

});
