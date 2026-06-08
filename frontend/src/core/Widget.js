
export default class Widget {

    constructor(xporcentaje, yporcentaje, ancho,alto) {   
     this.xporcentaje = xporcentaje;
     this.yporcentaje = yporcentaje;
     this.ancho = ancho;
     this.alto = alto;

    } 

    getX(canvaWidth) {
        return canvaWidth * this.xporcentaje;
    }   

    getY(canvaHeight) {
        return canvaHeight * this.yporcentaje;
    }


    //aqui tendremos la logica de cada widget
    update() {  

    }

    draw(ctx, canvaWidth, canvaHeight) {
       const xreal = this.getX(canvaWidth);
       const yreal = this.getY(canvaHeight);
       ctx.fillStyle = 'rgba(255, 255, 255, 0.07)';
       ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
       ctx.lineWidth = 1.5;

       ctx.beginPath();
       ctx.roundRect(xreal, yreal, this.ancho, this.alto, 12);
       ctx.fill();
       ctx.stroke();

    }
}           