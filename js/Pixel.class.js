// pixel  represente  un pixel  dans le  cadre  de dessin 
param

function Pixel(size, color, x, y){
	this.$el  = $('<div class="pixel"></div>');

	this.set_color(color);
	this.set_position(x,y);
	this.set_size(size);

	pixelstudio.$draw.append(this.$el);
}

Pixel.prototype = {
	set_color:function (color) {
		this.color= color || 'red';
		this.$el.css('background-color' , this.color);
	},

	// permet de changer  la position 
	set_position:function (x,y) {
		this.x= x;
		this.y= y;
		this.$el.css({
			left: (this.x-1) *this.size  +'px',
			top: (this.y -1) *this .size  +'px,',	
		});
	},
	set_size:function (size) {
		this.size= size  || '50';;
		this.$el.css({
		width: this.size  + 'px',
		height: this.size + 'px',
		});
	}
}


function Tools(pen)
