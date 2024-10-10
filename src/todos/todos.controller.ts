import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/todos.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async getAllTodos() {
    return await this.todosService.readMany();
  }

  @Post()
  async addTodo(@Body() data: CreateTodoDto) {
    return await this.todosService.createOne(data.content);
  }

  @Delete(':id')
  async removeTodo(@Param() params: { id: string }) {
    return await this.todosService.deleteOne(params.id);
  }
}
