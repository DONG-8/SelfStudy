import MainScene from "./MainScene.js";

const config = {
  width: 512,
  height: 512, // 게임 화면 사이즈 조정
  backgroundColor: "#333333",
  type: Phaser.AUTO,
  // 해당 div 의 id 설정
  parent: "survival-game",
  scene: [MainScene],
  scale: {
    zoom: 2,
  },
  // 어떤 물리엔진을 사용?
  physics: {
    default: "matter",
    matter: {
      // 충돌을 위한 설정
      debug: true,
      // 중력 설정 하향식 게임이 아니기 때문에
      gravity: { y: 0 },
    },
  },
  // 사용 할 플러그인 결정
  plugins: {
    scene: [
      {
        plugins: PhaserMatterCollisionPlugin,
        key: "matterCollision",
        mapping: "matterCollision",
      },
    ],
  },
};

// 설정에 따른 phaser game정보를 전달 해 준다.
new Phaser.Game(config);
