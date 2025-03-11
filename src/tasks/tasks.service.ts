import { Injectable } from '@nestjs/common';

export interface User {
  name: string;
  age: number;
}
@Injectable()
export class TasksService {

  private tasks: any[] = [];

  getTasks(){
    return this.tasks || []  ;
  }

  getTask(id: number){
    const taskEncontrada = this.tasks.find(task => task.id === id);
    return taskEncontrada;
  }

  createTask(task: any){
    console.log(task);
    const newTask = {...task, id: this.tasks.length + 1}; 
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(){
    return 'Task updated';
  }

  deleteTask(){
    return 'Task deleted';
  }

  updateTaksStatus(){
    return 'Task status updated';
  }
}