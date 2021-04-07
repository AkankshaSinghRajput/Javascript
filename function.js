function checkAge(age) {
//    if (age > 18) {
//      return true;
//    } else {
//      return confirm('Did parents allow you?');
//    }
    return (age>=18) || confirm("Do you have permission of your parents?");
  }

  let age = prompt('How old are you?', 18);

  if ( checkAge(age) ) {
    alert( 'Access granted' );
  } else {
    alert( 'Access denied' );
  }