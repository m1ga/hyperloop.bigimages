var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "luca-bravo-112050-unsplash.jpg");
var bigimage = require("/bigimage");

bigimage.setImage(f.nativePath);

$.index.add(bigimage.getView());
$.index.open();
