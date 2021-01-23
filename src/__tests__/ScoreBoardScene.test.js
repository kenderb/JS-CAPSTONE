
import Phaser from 'phaser';
import ScoreBoardScene from '../scenes/ScoreBoardScene';

test('addTitleBtn is a function', () => {
  const scoreBoardScene = new ScoreBoardScene();
  expect(typeof scoreBoardScene.addTitleBtn).toBe('function');
});


test('game scene is a subclass of scene', () => {
  expect(ScoreBoardScene.prototype instanceof Phaser.Scene).toBe(true);
});