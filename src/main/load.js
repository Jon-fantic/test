// preload.js
var _setImmediate = setImmediate;
var _clearImmediate = clearImmediate;
process.once('loaded', function() {
    global.setImmediate = _setImmediate;
    global.clearImmediate = _clearImmediate;
    console.log('asdad')
});