import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express'

@Controller()
export class ProjectsController {


  @Get('/')
  getProjects(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    response.status(200).json({ message: 'Hello World!' });
  }
}
