import { Injectable, NotFoundException } from '@nestjs/common';
import { randomInt } from 'node:crypto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface User {
  name: string;
  age: number;
}
@Injectable()
export class TasksService {
  private tasks: any[] = [];

  getTasks() {
    // toSorted, no modifica el array original
    const AllTasks = this.tasks.toSorted((a, b)=> a.id - b.id) || [];
    return AllTasks
  }

  getTask(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);
    if (!taskFound) {
      return new NotFoundException(`Task with id ${id} not found`);
    }
    return taskFound;
  }

  createTask(task: CreateTaskDto) {
    let numberRandon = randomInt(100)
    const newTask = { ...task, id: this.tasks.length + numberRandon };
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id: number, taskUpdate: UpdateTaskDto) {
    const taskFound = this.tasks.find((task) => task.id === id);
    if (!taskFound) {
      return {
        message: 'Not found',
      };
    }

    /**
     *  En el buble si el task en === al id que le enviamos , entonces 
     *  actualizara los parametros por lo que le estoy enviando, y si no conincide con el id,
     *  retorna el mismo
     */
    if (taskFound) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, ...taskUpdate } : task,
      );
    }

    return this.tasks
  }

  deleteTask() {
    return 'Task deleted';
  }

  updateTaskStatus() {
    return 'Task status updated';
  }
}
