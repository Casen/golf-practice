define(function() {
  'use strict';  return function(match) {
    match('!/swings', 'swings#index');
    match('!/swings/:club', 'swings#index');
    match('!/stats/:club', 'swings#stats');
    return match('!/upload', 'swings#upload');
  };
});
