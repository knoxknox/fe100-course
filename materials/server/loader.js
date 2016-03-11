/**
 * Allows to require files from root.
 */
global.include = function(name) {
  return require(__dirname + '/app/' + name);
};

/**
 * Allows to require routes from root.
 */
global.includeRoute = function(name) {
  return require(__dirname + '/app/routes/' + name);
};
