import Phaser from 'phaser';
import sprBtnPlay from '../assets/sprBtnPlay.png';
import sprBg0 from '../assets/sprBg0.png';
import sprBg1 from '../assets/sprBg1.png';
import sprBtnPlayHover from '../assets/sprBtnPlayHover.png';
import sprBtnPlayDown from '../assets/sprBtnPlayDown.png';
import sprBtnRestart from '../assets/sprBtnRestart.png';
import sprBtnRestartHover from '../assets/sprBtnRestartHover.png';
import sprBtnRestartDown from '../assets/sprBtnRestartDown.png';
import sndBtnOver from '../assets/sndBtnOver.wav';
import sndBtnDown from '../assets/sndBtnDown.wav';
import ScrollingBackground from '../scrollingBackground';

export default class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneMainMenu' });
  }

  preload() {
    this.load.image('sprBg0', sprBg0);
    this.load.image('sprBg1', sprBg1);
    this.load.image('sprBtnPlay', sprBtnPlay);
    this.load.image('sprBtnPlayHover', sprBtnPlayHover);
    this.load.image('sprBtnPlayDown', sprBtnPlayDown);
    this.load.image('sprBtnRestart', sprBtnRestart);
    this.load.image('sprBtnRestartHover', sprBtnRestartHover);
    this.load.image('sprBtnRestartDown', sprBtnRestartDown);

    this.load.audio('sndBtnOver', sndBtnOver);
    this.load.audio('sndBtnDown', sndBtnDown);
  }

  create() {
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };
    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'sprBtnPlay',
    );
    this.btnPlay.setInteractive();
    this.btnPlay.on('pointerover', () => {
      this.btnPlay.setTexture('sprBtnPlayHover');
      this.sfx.btnOver.play();
    }, this);
    this.btnPlay.on('pointerout', () => {
      this.btnPlay.setTexture('sprBtnPlay');
    });
    this.btnPlay.on('pointerdown', () => {
      this.btnPlay.setTexture('sprBtnPlayDown');
      this.sfx.btnDown.play();
    }, this);
    this.btnPlay.on('pointerup', () => {
      this.btnPlay.setTexture('sprBtnPlay');
      this.scene.start('SceneMain');
    }, this);
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'ALIEN ATTACK', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: 'red',
      align: 'center',
    });
    this.title.setOrigin(0.5);
    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['sprBg0', 'sprBg1'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }
}