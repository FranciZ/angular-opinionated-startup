angular.module('exampleApp').factory('TaskService',function() {

	var taskService = {
        model:{
            list:[
                {
                    id:1,
                    title:'Feed the dog',
                    date:Date.now()
                },
                {
                    id:2,
                    title:'Take out the trash',
                    date:Date.now()-200
                },
                {
                    id:3,
                    title:'Buy bread',
                    date:Date.now()-300
                }

            ]
        },
        addTask:function(task){

            taskService.model.list.push(task);

        }
    };

	return taskService;

});
