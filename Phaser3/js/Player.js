// physics 단계의 matter를 가진 물질을 형성시켜줍니다.
// player의 동작과 관련된 js 파일

export default class Player extends Phaser.Physics.Matter.Sprite {
  constructor(data) {
    let { scene, x, y, texture, frame } = data;
    super(scene.matter.world, x, y, texture, frame);
    // 장면에 물질 스프라이트를 추가 해 준다.
    this.scene.add.existing(this);

    // 레이저 물리학에서 몸체와 몸체를 꺼내줍니다.
    const { Body, Bodies } = Phaser.Physics.Matter.Matter;
    //
    var playerCollider = Bodies.circle(this.x, this.y, 12, {
      isSensor: false,
      label: "playerCollider",
    });
    var playerSensor = Bodies.circle(this.x, this.y, 24, {
      isSensor: true,
      label: "playerSensor",
    });
    // 두가지의 센서로 구성된 복합 몸체 만들기
    const compoundBody = Body.create({
      parts: [playerCollider, playerSensor],
      frictionAir: 0.35,
    });
    this.setExistingBody(compoundBody);
    // this.setFixedRotation();
  }

  // static 키워드로 정적 메서드 생성
  static preload(scene) {
    // 기본 정적틀 제공
    scene.load.atlas(
      "female",
      "assets/images/female.png",
      "assets/images/female_atlas.json"
    );
    // animation 적용 된 파일 불러오기
    scene.load.animation("female_anim", "assets/images/female_anim.json");
  }
  get velocity() {
    return this.body.velocity;
  }

  update() {
    // 스피드 설정 : 상수형
    const speed = 4;

    // 벡터를 통한 이동 Phaser.Math.Vector2 --> 2는 2차원이기 때문에
    let playerVelocity = new Phaser.Math.Vector2();
    if (this.inputKeys.left.isDown) {
      playerVelocity.x = -1;
    } else if (this.inputKeys.right.isDown) {
      playerVelocity.x = 1;
    } else if (this.inputKeys.up.isDown) {
      playerVelocity.y = -1;
    } else if (this.inputKeys.down.isDown) {
      playerVelocity.y = 1;
    }
    // 대각선 속도문제를 해결해줌 normalize()
    playerVelocity.normalize();
    playerVelocity.scale(speed);
    this.setVelocity(playerVelocity.x, playerVelocity.y);
    if (Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y) > 0.1) {
      this.anims.play("female_walk", true);
    } else {
      this.anims.play("female_idle", true);
    }
  }
}
