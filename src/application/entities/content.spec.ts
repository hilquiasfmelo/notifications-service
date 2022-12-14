import { Content } from './content';

describe('Notification content', () => {
  it('deve ser possivel criar o conteudo da notificacao', () => {
    const content = new Content('Voce recebeu uma solicitacao de amizade');

    expect(content).toBeTruthy();
  });

  it('nao deve ser possivel criar o conteudo da notificacao com menos de 5 caracteres', () => {
    expect(() => new Content('abc')).toThrow();
  });

  it('nao deve ser possivel criar o conteudo da notificacao com mais de 240 caracteres', () => {
    expect(() => new Content('abc'.repeat(241))).toThrow();
  });
})