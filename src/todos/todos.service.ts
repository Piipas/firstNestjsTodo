import { Injectable } from '@nestjs/common';
import { PrismaClient, Todo } from '@prisma/client';

const db = new PrismaClient();

@Injectable()
export class TodosService {
  async readMany(): Promise<Todo[]> {
    return await db.todo.findMany();
  }

  async createOne(content: string): Promise<Todo> {
    return await db.todo.create({ data: { content, completed: false } });
  }

  async deleteOne(id: string): Promise<Todo> {
    return await db.todo.delete({ where: { id } });
  }
}
