import Phaser from 'phaser';
import ScrollingBackground from '../scrollingBackground';
import { getLocalScores } from '../localStorage';
import ScoresApi from '../ScoresAPI';
import sprGameOver from '../assets/gameOver.png';


export default class SceneGameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneGameOver' });
  }

  preload() {
    this.load.image('sprGameOver', sprGameOver);
  }

  createForm(score) {
    this.sprGameOver = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.2,
      'sprGameOver',
    );
    const form = document.createElement('form');
    const textInput = document.createElement('input');
    const submitButton = document.createElement('button');
    const bodyTag = document.getElementsByTagName('body')[0];
    submitButton.type = 'submit';
    submitButton.id = 'submit-button';
    submitButton.innerHTML = 'Submit';
    submitButton.classList.add('submit-button');
    textInput.type = 'text';
    textInput.name = 'name';
    textInput.placeholder = 'Type your name to submit your score';
    textInput.classList.add('text-input');
    form.id = 'user-form';
    form.append(textInput);
    form.append(submitButton);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const saveScores = new ScoresApi();
      this.name = textInput.value;
      if (this.name) {
        saveScores.postScores(this.name, score);
        this.scene.start('ScoreBoardScene');
      }
    });
    bodyTag.append(form);
    return form;
  }

  create() {
    [this.score] = getLocalScores();
    const form = this.createForm(this.score);
    const element = this.add.dom(this.game.config.width * 0.5, -200, form);
    element.setDepth(3);
    this.score = this.add.text(this.game.config.width * 0.5, 400, `Your Score: ${this.score} pts!!!`, {
      fontFamily: 'monospace',
      fontSize: 16,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.score.setOrigin(0.5);
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };
    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'sprBtnRestart',
    );

    this.btnRestart.setInteractive();

    this.btnRestart.on('pointerover', () => {
      this.btnRestart.setTexture('sprBtnRestartHover'); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);

    this.btnRestart.on('pointerout', () => {
      this.btnRestart.setTexture('sprBtnRestart');
    });

    this.btnRestart.on('pointerdown', () => {
      this.btnRestart.setTexture('sprBtnRestartDown');
      this.sfx.btnDown.play();
    }, this);

    this.btnRestart.on('pointerup', () => {
      this.btnRestart.setTexture('sprBtnRestart');
      this.scene.start('SceneMain');
    }, this);
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