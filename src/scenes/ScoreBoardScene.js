import Phaser from 'phaser';
import ScrollingBackground from '../scrollingBackground';
import ScoresApi from '../ScoresAPI';

export default class ScoreBoardScene extends Phaser.Scene {
  constructor() {
    super({ key: 'ScoreBoardScene' });
  }

  create() {
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'Score Board', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.title.setOrigin(0.5);
    const scoreList = new ScoresApi();
    scoreList.getScores()
      .then((data) => {
        const array = [];
        data.result.forEach((item) => array.push({ name: item.user, score: item.score }));
        const Highscores = array.sort((a, b) => b.score - a.score).slice(1, 6);
        let gap = 0;
        Highscores.forEach((item) => {
          this.add.text(this.game.config.width * 0.3, 180 + gap, `${item.name} -------------  ${item.score}`, {
            fontSize: '17px',
            fill: '#55bfde',
            width: 400,
            fontFamily: 'sans-serif',
            padding: {
              left: 10,
              right: 10,
              top: 10,
              bottom: 10,
            },
          });
          gap += 50;
        });
      }).catch(() => {
        this.add.text(this.game.config.width * 0.3, 180, 'Network Error. You can try again later.', {
          fontSize: '17px',
          fill: 'red',
          fontFamily: 'sans-serif',
        });
      });
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };
    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.8,
      'sprBtnRestart',
    );

    this.btnRestart.setInteractive();

    this.btnRestart.on('pointerover', () => {
      this.btnRestart.setTexture('sprBtnRestartHover');
      this.sfx.btnOver.play();
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