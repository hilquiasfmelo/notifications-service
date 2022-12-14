import { Injectable } from "@nestjs/common";
import { Notification } from "../../../../src/application/entities/notification";
import { NotificationsRepository } from "../../../../src/application/repositories/notifications-repository";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) { }

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        recipientId: notification.recipientId,
        content: notification.content.value,
        category: notification.category,
        readAt: notification.readAt,
        createAt: notification.createdAt
      }
    })
  }

}