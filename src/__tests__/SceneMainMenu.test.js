
import Phaser from 'phaser';
import SceneMainMenu from '../scenes/SceneMainMenu';

test('addPlayBtn is a function', () => {
  const mainMenuScene = new SceneMainMenu();
  expect(typeof mainMenuScene.addPlayBtn).toBe('function');
});

test('addScoreBtn is a function', () => {
  const mainMenuScene = new SceneMainMenu();
  expect(typeof mainMenuScene.addScoreBtn).toBe('function');
});


test('game scene is a subclass of scene', () => {
  expect(SceneMainMenu.prototype instanceof Phaser.Scene).toBe(true);
});