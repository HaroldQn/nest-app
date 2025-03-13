import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const res = context.switchToHttp().getRequest() as Request
    console.log(res.url)

    if (res.url == '/greet') return false;
    return true;
  }
}
