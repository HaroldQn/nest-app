import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService]
})
export class ProjectsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({
      path: '/new', method: RequestMethod.POST
    });
  }
}
