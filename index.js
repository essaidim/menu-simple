var readline = require('readline');

var SimpleMenu = function(){
	this.items = [];
};

SimpleMenu.prototype.add = function(title, handler) {
    this.items.push({
    	title : title,
    	handler : handler
    });
    return this;
};

SimpleMenu.prototype.show = function(config = {}){
	this.config = {
		title : config.title || 'Menu',
		selectMessage : config.selectMessage || 'Your choice : ',
		closeMessage : config.closeMessage || 'Bye Bye.',
		errorMessage : config.errorMessage || "Please choose a valid item!"
	}

	console.log();
	console.log('---------- ' + this.config.title + ' ----------');
	console.log();

	for(var i = 0; i < this.items.length; i++){
		var item = this.items[i];
		console.log((i+1) + '- ' + item.title + '.');
	}

	var delimiter = '';
	for(var i = 0; i < this.config.title.length + 22 ; i++){
		delimiter += '-';
	}
	console.log(delimiter);
	console.log((this.items.length + 1) + '- Exit.');
	console.log();

	this.askToSelectItem();
};

SimpleMenu.prototype.askToSelectItem = function(){
	var that = this;

	var LineReader = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout
	});

	LineReader.question(that.config.selectMessage, function(answer){
		LineReader.close();
		var answer = parseInt(answer);
		if ( !isNaN( answer ) && answer <= that.items.length + 1 &&  answer > 0) {
	      	if(answer === that.items.length + 1){
	      		console.log(that.config.closeMessage);
	      	}else{
	      		that.items[answer - 1].handler();
	      	}
	    }else{
	    	console.log(that.config.errorMessage);
	    	that.askToSelectItem();
	    }
	});
};

module.exports = new SimpleMenu();