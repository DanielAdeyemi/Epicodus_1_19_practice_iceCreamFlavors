$(document).ready(function() {
  flavors = [];
  for (i = 0; i < 5; i++) {
    let user = prompt("Ice cream flavor");
    flavors.push(user);
  }

  flavors.forEach(flavor) {
    $(ul).prepend("<li>" + flavor + "</li>");
  }


});