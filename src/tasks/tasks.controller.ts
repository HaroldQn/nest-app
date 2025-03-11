import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
@Controller('/tasks')
export class TaskController {
  
  constructor(private readonly tasksService: TasksService){}

  @Get()
  getAllTasks(@Query() query: any){
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  getTask(@Param('id', ParseIntPipe) id: number){
    return this.tasksService.getTask(id);
  }

  @Post()
  createTask(@Body() task: any){
    return this.tasksService.createTask(task);
  }

  @Put()
  updateTask(){
    return this.tasksService.updateTask();
  }

  @Delete()
  deleteTask(){
    return this.tasksService.deleteTask();
  }

  @Patch()
  updateTaksStatus(){
    return this.tasksService.updateTaksStatus();
  }
}