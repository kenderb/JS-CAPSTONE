const laserConfig = (laser) => {
  if (laser.x < -laser.displayWidth
    || laser.x > this.game.config.width + laser.displayWidth
    || laser.y < -laser.displayHeight * 4
    || laser.y > this.game.config.height + laser.displayHeight) {
    if (laser) {
      laser.destroy();
    }
  }
};
export default { laserConfig };