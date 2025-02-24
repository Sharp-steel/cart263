class RectangularObj {
  constructor(x, y, w, h, f_color, s_color, context) {
    // We write instructions to set up a Flower here
    // Position and size information
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.fill_color = f_color;
    this.stroke_color = s_color;
    this.startAngle = 0;
    this.endAngle = Math.PI * 2; //full rotation
    this.context = context;
  }

  display() {
    this.context.fillStyle = this.fill_color; // change the color we are using
    this.context.fillRect(this.x, this.y,this.width, this.height);
    this.context.strokeStyle = this.stroke_color; // change the color we are using
    this.context.lineWidth = 2; //change stroke
    this.context.strokeRect(this.x, this.y,this.width, this.height);
  }

  update(){
    //update freestyle
   // this.x+=1;
    //console.log("rectangle update")
    this.y += Math.cos(Date.now() * 0.005) * 1.5;
    this.x += Math.sin(Date.now() * 0.005) * 1.5;
    this.width = 25 + this.volume * 200;
    this.height = 50 + this.volume * 200;
}

  setInputVolume(v) {
    this.volume = v;
  }
}
