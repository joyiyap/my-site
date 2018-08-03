function Cursor() {
	var canvas = document.createElement('canvas');
    canvas.width = canvas.height = 128;
    var ctx = canvas.getContext("2d");
    // unlike SVG, canvas has only one primitive shape, the rectangle
   
    // rect coords are x,y,width,height
    
// arc coords are x,y,radius,startAngle,endAngle
    // angles are in radians, 0 to 2 pi makes a circle
    ctx.strokeStyle="#FFFFFF";
    ctx.arc(60, 50, 30, 0, 2 * Math.PI);
    ctx.stroke();
    
    document.documentElement.style.cursor = 'url(' + canvas.toDataURL() + ') 64 64, auto';
}

export default Cursor;