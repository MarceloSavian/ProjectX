const TaskTypeRepository = require('../Repositories/TaskTypeRepository');

class TaskTypeService {

    constructor(query) {
        this.query = query
    }

    async insertTaskType(nameTaskType, descriptionTaskType){
        const TaskType = new TaskTypeRepository(this.query);

        let response =  await TaskType.insertTaskType(nameTaskType, descriptionTaskType);
 
        return response
    }
    async deleteTaskType (idTaskType){
        const TaskType = new TaskTypeRepository(this.query);

        let response = await TaskType.deleteTaskType(idTaskType);

        return response
    }
    async selectTaskType (){
        const TaskType = new TaskTypeRepository(this.query);

        let response = await TaskType.selectTaskType();

        return response
    }

    async updateTaskType(idTaskType, nameTaskType, descriptionTaskType){
        const TaskType = new TaskTypeRepository(this.query);

        let response =  await TaskType.updateTaskType(idTaskType, nameTaskType, descriptionTaskType);

        return response
    }
};

module.exports = TaskTypeService;