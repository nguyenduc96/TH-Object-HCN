class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }
    getPerimeter(){
        return (this.width + this.height)*2;
    }
    drawCanvas(){
        let draw = document.getElementById('myCanvas').getContext('2d');
        draw.fillStyle = "blueviolet";
        draw.fillRect(50, 50, this.width, this.height);
    }
}

function pRint() {
    let width = parseInt(document.getElementById('chieuDai').value);
    let height = parseInt(document.getElementById('chieuRong').value);
    let rectangle = new Rectangle(width, height);
    rectangle.drawCanvas();
    document.getElementById('output').innerHTML = "Diện tích = " + rectangle.getArea() + "px" + "<sup>2</sup>" + "<br>"
        + "Chu vi = " + rectangle.getPerimeter() + "px";

}
