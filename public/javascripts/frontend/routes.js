define(function() {
  'use strict';  return function(match) {
    match('swings', 'swings#index');
    return match('', 'hello#show');
  };
});
