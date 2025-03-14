import { Injectable, NotFoundException } from '@nestjs/common';
import { randomInt, Sign } from 'node:crypto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma.service';

export interface User {
  name: string;
  age: number;
}
@Injectable()
export class TasksService {
  private tasks: any[] = [];

  constructor(private prisma: PrismaService) {}

  getTasks() {
    return this.prisma.tasks.findMany({
      orderBy: {
        id: 'desc',
      }
    }) || [];
  }

  getTask(id: string) {
    // const taskFound = this.tasks.find((task) => task.id === id);
    // if (!taskFound) {
    //   return new NotFoundException(`Task with id ${id} not found`);
    // }
    return this.prisma.tasks.findUnique({
      where: { id: id },
    });
  }

  // createTask(task: CreateTaskDto) {
  //   let numberRandon = randomInt(100)
  //   const newTask = { ...task, id: this.tasks.length + numberRandon };
  //   this.tasks.push(newTask);
  //   return newTask;
  // }

  createTask(task: CreateTaskDto) {
    return this.prisma.tasks.create({ data: task });
  }

  updateTask(id: string, taskUpdate: UpdateTaskDto) {
    //Modelo 1
      /**

       const taskFound = this.tasks.find((task) => task.id === id);
       if (!taskFound) {
         return {
          message: 'Not found',
         };
       }
        En el buble si el task en === al id que le enviamos , entonces 
        actualizara los parametros por lo que le estoy enviando, y si no conincide con el id,
        retorna el mismo
      
       if (taskFound) {
         this.tasks = this.tasks.map((task) =>
           task.id === id ? { ...task, ...taskUpdate } : task,
         );
       }

      return this.tasks
    */

    //Modelo 2 usando prisma

    return this.prisma.tasks.update({
      where: { id: String(id) },
      data: { ...taskUpdate },
    })
  }

  async deleteTask(id: string) {
    const deleteTask = await this.prisma.tasks.delete({
      where: { id: id },
    });

    return {
      message: 'Task deleted',
      deleteTask,
    };
  }
}
