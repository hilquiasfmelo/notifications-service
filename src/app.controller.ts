import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotificationBody } from './dtos/create-notification-body';
// import { randomUUID } from 'node:crypto';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    await this.prisma.notification.create({
      data: {
        recipientId,
        content,
        category,
      },
    });
  }
}
