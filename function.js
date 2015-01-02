for (num = 0; num < 101; num++) { 
	if (num % 3 === 0 && num % 5 === 0) {
	  $(".list").prepend('<li>' + "fizzbuzz" + '</li>');
	}
	else if ( num % 3 === 0 ) {
	  $(".list").prepend('<li>' + "fizz" + '</li>');
	}
	else if ( num % 5 === 0 ) {
	  $(".list").prepend('<li>' + "buzz" + '</li>');
	}
	else {
	  $(".list").prepend('<li>' + num + '</li>');
	}
}												