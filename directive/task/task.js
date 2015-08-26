angular.module('exampleApp').directive('task', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
            taskModel:'=',
            onToggle:'&',
            onRemove:'&'
		},
		templateUrl: 'directive/task/task.html',
		link: function(scope, element, attrs, fn) {

            scope.toggleTask = function(){

                if(scope.onToggle){
                    scope.onToggle({task:scope.taskModel});
                }

            };

            scope.removeTask = function(){

                scope.onRemove({task:scope.taskModel});

            }

		}
	};
});
