define(function() {
  'use strict';  return function(match) {
    match('!/swings', 'swings#index');
    match('!/swings/:club', 'swings#index');
    return match('', 'hello#show');
  };
});
