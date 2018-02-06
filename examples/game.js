
var game = new Phaser.Game(640, 480, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.image('alien', 'assets/alien.png');

}

function create() {

    //  This simply creates a sprite using the mushroom image we loaded above and positions it at 200 x 200
    var test = game.add.sprite(200, 200, 'alien');

}
