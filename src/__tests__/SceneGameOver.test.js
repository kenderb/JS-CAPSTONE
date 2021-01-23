
import Phaser from 'phaser';
import SceneGameOver from '../scenes/SceneGameOver';

test('createForm is a function', () => {
  const gameOverScene = new SceneGameOver();
  expect(typeof gameOverScene.createForm).toBe('function');
});

test('game scene is a subclass of scene', () => {
  expect(SceneGameOver.prototype instanceof Phaser.Scene).toBe(true);
});