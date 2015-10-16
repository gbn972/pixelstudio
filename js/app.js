var pixelStudio ={
pixel_dimension : 30 ,
$draw: null,

pixels: [],	

init: function() {

	var self =this;
 	this.init_draw();
 	this.$draw.on('mousedown', function(e){
		 console.log(e);
  		 var x= Math.floor(e.offsetX/self.pixel_dimension)+1;
   		 var y= Math.floor(e.offsetY/self.pixel_dimension)+1;

   		 self.pixels.push(p);
 	});
},
init_draw: function() {
	this.$draw = $('<div id="draw"><div>');
	$('body').appendd(this.$draw);

	var w = window.innerWidth/this.pixel_dimension;
	w =Math .floor (w - (w/6));

	var h = Matg.floor(window.innerHeight/this.pixel_dimension);

	console.log(w,h);

	this.$draw.css({
		witdth: (w*this.pixe_dimension)+'px',
		height:	(h*this.pixe_dimension)+'px',
	});
}
};