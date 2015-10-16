function Pixel(size, color, x, y){

	this.size = size  || '50';
	this.color= color || '#FEFEFE';
	this.x    = x     || '0'; 
	this.y    = y     || '0';
	this.$el  = $('<div class="pixel"></div>');

	this.$el.css({
		width: this.size  + 'px',
		height: this.size + 'px',
		backgroundColor: this.color,
		left: (this.x*this.size) +'px',
		top: (this.y *this .size) +'px,'
	});

	$('body').append(this.$el);
}




function Tools(pen)
