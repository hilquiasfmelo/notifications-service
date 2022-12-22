import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { NotificationNotFound } from '../errors/notification-not-found';
import { UnReadNotification } from '../unread-notification';

describe('UnRead notification', () => {
  it('deve ser permitido remover o estado de lido para nao lido de uma notificacao', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unReadNotification = new UnReadNotification(notificationsRepository);

    const notification = makeNotification({
      readAt: new Date(),
    });

    await notificationsRepository.create(notification);

    await unReadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });

  it('deve nao ser permitido remover o estado de lido para nao lido uma notificacao que nao existe', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unReadNotification = new UnReadNotification(notificationsRepository);

    //Esperado que a Promisse retorne uma rejeição com um erro do tipo NotificationNotFound
    expect(() => {
      return unReadNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
