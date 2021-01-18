import Phaser from 'phaser';

export default class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneMainMenu' });
  }

  create() {
    this.scene.start('SceneMain');
  }
}