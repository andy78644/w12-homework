import { TestBed } from '@angular/core/testing';
import { Game } from './game';

describe('Game', () => {
  it('should create an instance', () => {
    expect(new Game()).toBeTruthy();
  });
  test('buy one potter', () => {
    const game = new Game();
    game.buy(1, 1);
    expect(game.price).toBe(100);
  });
  test('buy two potter', () => {
    const game = new Game();
    game.buy(1, 1);
    game.buy(2, 1);
    expect(game.price).toBe(190);
  });
  test('buy all potter', () => {
    const game = new Game();
    game.buy(1, 1);
    game.buy(2, 1);
    game.buy(3, 1);
    game.buy(4, 1);
    game.buy(5, 1);
    expect(game.price).toBe(375);
  });
  test('buy one potter 1 and two potter 2', () => {
    const game = new Game();
    game.buy(1, 1);
    game.buy(2, 2);
    expect(game.price).toBe(290);
  });
  
});
