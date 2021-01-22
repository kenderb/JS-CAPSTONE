
import Phaser from 'phaser';
import SceneMain from '../scenes/SceneMain';

test('createForm is a function', () => {
  const mainScene = new SceneMain();
  expect(typeof mainScene.getEnemiesByType).toBe('function');
});

test('game scene is a subclass of scene', () => {
  expect(SceneMain.prototype instanceof Phaser.Scene).toBe(true);
});