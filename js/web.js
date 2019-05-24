var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var x = 100;
var y = 100;
var x1 = 100;
var y1 = 100;

setInterval(function () {
  ctx.clearRect(0, 0, 200, 200);

  drawBee(x,y);
  drawBee(x + 50,y1);
  drawBee(x1 -25,y1);
  x = update(x);
  y = update(y);
  x1 = update1(x1);
  y1 = update1(y1);

  ctx.strokeRect(0, 0, 200, 200);
}, 30);
//end
//circle function start
  var circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
      ctx.fill();
    } else {
      ctx.stroke();
    }
  }; //end
//drawing the bee start
    var drawBee = function (x, y) {
      ctx.lineWidth = 2;
      ctx.strokeStyle = "Black";
      ctx.fillStyle = "Gold";

      circle(x, y, 8, true);
      circle(x, y, 8, false);
      circle(x - 5, y - 11, 5, false);
      circle(x + 5, y - 11, 5, false);
      circle(x - 2, y - 1, 2, false);
      circle(x + 2, y - 1, 2, false);
    }; //end

  //updating the bee's location
  var update = function(coordinate) {
    var offset = Math.random() * 4 -2;
    coordinate +=offset;

    if (coordinate > 200) {
      coordinate = 200;
    }

    if (coordinate < 0) {
      coordinate = 0;
    }

    return coordinate;
  };
  var update1 = function(coordinate) {
    var offset = Math.random() * 4 -2;
    coordinate +=offset;

    if (coordinate > 200) {
      coordinate = 200;
    }

    if (coordinate < 0) {
      coordinate = 0;
    }

    return coordinate;
  };
