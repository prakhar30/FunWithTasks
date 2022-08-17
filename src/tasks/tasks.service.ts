import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  constructor(private taskService: TasksService) {}
}
