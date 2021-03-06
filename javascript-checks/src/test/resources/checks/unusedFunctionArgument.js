each(function fun(a, b) {    // NOK
  a = 1;
});

each(function fun(a, b, c) { // NOK
  a = 1;
});

each(function fun(p1) {      // NOK
});

each(function fun(a, b, c) { // NOK
  b =1;
});

each(function fun(a, b) {    // OK
  b = 1;
});

each(function fun(a) {       // OK
  a = 1;
});

each(function fun(a) {       // OK
  return o.call(arguments);
});


function fun(a, b) {         // NOK
    a = 1;
}

function fun(a, b, c) {      // NOK
  a = 1;
  c = 1;
}

function fun(a, b) {         // OK
  a = 1;
  o.call(arguments);
}

function fun(a) {            // OK
  function nested() {
    a = 1;
  }
}
