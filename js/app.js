// Enemies our player must avoid
var Enemy = function(id) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    //Math.floor(Math.random()*(max-min+1)+min);
    this.x = Math.floor(Math.random() * -600) + -100;
    this.y = Math.floor(Math.random() * 200) + 50;
    this.name = "enemy" + id;
    console.log('Enemy instance created ' + this.name);
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 500) {
        this.x = this.x + (1);
    }
    else
    {
        //So, each time this resets an enemy at a different screen entry point.
        //Randomize the enemy.y for starting point and enemy.x for start delay.
        //If there are less than 5 enemies, add another when one goes off screen.
        //TODO: add difficulty level to control speed and number of enemies.
        //TODO: checkCollisions could destroy enemies that are on top of each other.
        //TODO: create enemy.destroy method then.
        //Math.floor(Math.random()*(max-min+1)+min);
        this.x = Math.floor(Math.random() * -600) + -100;
        this.y = Math.floor(Math.random() * 200) + 50;
        if (allEnemies.length < 5){
            var addEnemy = new Enemy(allEnemies.length);
            allEnemies.push(addEnemy);
        }
    };
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our player, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
    console.log('Player instance created');
}
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
}

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


// Now instantiate your objects.

// Place all enemy objects in an array called allEnemies
var allEnemies = [];
// Create first enemy object
var addEnemy = new Enemy(allEnemies.length);
    allEnemies.push(addEnemy);

// Place the player object in a variable called player
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// Player.handleInput() method. Move 10 at a time and stay in bounds.
Player.prototype.handleInput = function(key) {
switch(key) {
  case 'left':
        if (this.x > 0) {
           this.x = this.x - 10;
        };
        break;
  case 'right':
        if (this.x < 410) {
           this.x = this.x + 10;
        };
        break;
  case 'up':
       if (this.y > 0){
            this.y = this.y - 10;
        };
       break;
  case 'down':
        if (this.y < 430) {
           this.y = this.y + 10;
        };
        break;
    }
}
