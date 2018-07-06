var SubsamplingScaleImageView = require("com.davemorrissey.labs.subscaleview.SubsamplingScaleImageView");
var ImageSource = require("com.davemorrissey.labs.subscaleview.ImageSource");
var ssi = new SubsamplingScaleImageView(Ti.Android.currentActivity);
var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "luca-bravo-112050-unsplash.jpg");
ssi.setImage(ImageSource.uri(f.nativePath));
$.index.add(ssi);
$.index.open();
