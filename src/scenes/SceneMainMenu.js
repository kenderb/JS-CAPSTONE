import Phaser from 'phaser';
import sprBtnPlay from '../assets/sprBtnPlay.png';
import sprBtnPlayHover from '../assets/sprBtnPlayHover.png';
import sprBtnPlayDown from '../assets/sprBtnPlayDown.png';
import sprBtnRestart from '../assets/sprBtnRestart.png';
import sprBtnRestartHover from '../assets/sprBtnRestartHover.png';
import sprBtnRestartDown from '../assets/sprBtnRestartDown.png';
import sndBtnOver from '../assets/sndBtnOver.wav';
import sndBtnDown from '../assets/sndBtnDown.wav';

export default class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneMainMenu' });
  }

  preload() {
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
    this.scene.start('SceneMain');
  }
}