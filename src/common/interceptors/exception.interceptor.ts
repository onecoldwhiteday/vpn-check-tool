import { BadRequestException, CallHandler, ExecutionContext, ForbiddenException, Injectable, NestInterceptor, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
export class ExceptionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap({
        error: (error) => {
          if (error.response && error.response.data) {
            const { code, message } = error.response.data;

            if (code === 400) {
              throw new BadRequestException(message);
            }
            if (code === 404) {
              throw new NotFoundException(message);
            }
            if (code === 401) {
              throw new UnauthorizedException(message);
            }
            if (code === 403) {
              throw new ForbiddenException(message);
            }
          }
          throw error;
        }
      })
    );
  }
}