import Phaser from 'phaser';
import SceneMainMenu from './scenes/SceneMainMenu';
import SceneMain from './scenes/SceneMain';
import SceneGameOver from './scenes/SceneGameOver';
import ScoreBoardScene from './scenes/ScoreBoardScene';

const config = {
  type: Phaser.WEBGL,
  parent: 'phaser-example',
  width: 480,
  height: 640,
  backgroundColor: 'black',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  scene: [
    SceneMainMenu,
    SceneMain,
    SceneGameOver,
    ScoreBoardScene,
  ],
  pixelArt: true,
  roundPixels: true,
};

export default new Phaser.Game(config);
