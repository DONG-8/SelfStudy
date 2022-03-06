import Player from "./Player.js";

// class 를 만들고  phaser에 이를 확장시켜줍니다.
export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }
  // 필요한 리소스들을 미리 로드 시킨다.
  preload() {
    Player.preload(this);
    this.load.image("tiles", "assets/images/RPG Nature Tileset.png");
    this.load.tilemapTiledJSON("map", "assets/images/map.json");
  }
  // 처음실행 될 때 한번 실행됩니다.
  create() {
    const map = this.make.tilemap({ key: "map" });
    const tileset = map.addTilesetImage("RPG Nature Tileset", "tiles", 32, 32); //사이즈
    const layer1 = map.createStaticLayer("Tile Layer 1", tileset, 0, 0);
    const layer2 = map.createStaticLayer("Tile Layer 2", tileset, 0, 0);
    layer1.setCollisionByProperty({ collides: true });
    this.matter.world.convertTilemapLayer(layer1);
    this.player = new Player({
      scene: this,
      x: 200,
      y: 200,
      texture: "female",
      frame: "townfolk_f_idle_1",
    });

    let textPlayer = new Player({
      scene: this,
      x: 100,
      y: 100,
      texture: "female",
      frame: "townfolk_f_idle_1",
    });
    let textPlayer2 = new Player({
      scene: this,
      x: 100,
      y: 100,
      texture: "female",
      frame: "townfolk_f_idle_1",
    });
    // 입력에 따른 player 라는 생성자에 대한 animation을 추가
    this.player.inputKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });
  }
  // 게임이 실행되어 있는 동안 루프로 실행됩니다.
  // player 에 대한 정보가 지속적으로 갱신 되어야 하기 때문에 작성
  update() {
    this.player.update();
  }
}
