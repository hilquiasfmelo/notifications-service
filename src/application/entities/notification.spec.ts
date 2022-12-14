import { Content } from './content';
import { Notification } from './notification'

describe('Notification', () => {
  it('deve ser possivel criar uma notificacao', () => {
    const notification = new Notification({
      recipientId: 'example-recipient-id',
      content: new Content('Nova solicitacao de amizade.'),
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });

})