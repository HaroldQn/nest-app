import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller({})
export class TaskController {
  
  constructor(private readonly tasksService: TasksService){}

  @Get('/tasks')
  getAllTasks(){
    return this.tasksService.getTasks();
  }

  @Post('/tasks')
  createTask(){
    return 'Creando tarea';
  }

  @Put('/tasks/:id')
  updateTask(){
    return 'Actualizando tarea';
  }

  @Delete('/tasks/:id')
  deleteTask(){
    return 'Eliminando tarea';
  }

  @Patch('/tasks/:id')
  patchTask(){
    return 'Actualizando parcialmente tarea';
  }
}