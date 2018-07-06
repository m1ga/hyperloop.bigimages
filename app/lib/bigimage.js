var SubsamplingScaleImageView = require("com.davemorrissey.labs.subscaleview.SubsamplingScaleImageView");
var ImageSource = require("com.davemorrissey.labs.subscaleview.ImageSource");
var ImageViewState = require("com.davemorrissey.labs.subscaleview.ImageViewState");
var PointF = require("android.graphics.PointF");
var ssi = new SubsamplingScaleImageView(Ti.Android.currentActivity);

exports.SCALE_TYPE_CENTER_INSIDE = SubsamplingScaleImageView.SCALE_TYPE_CENTER_INSIDE;
exports.SCALE_TYPE_CENTER_CROP = SubsamplingScaleImageView.SCALE_TYPE_CENTER_CROP;
exports.SCALE_TYPE_CUSTOM = SubsamplingScaleImageView.SCALE_TYPE_CUSTOM;
exports.SCALE_TYPE_START = SubsamplingScaleImageView.SCALE_TYPE_START;

exports.setImage = function(uri) {
	if (uri != undefined && uri != "") {
		ssi.setImage(ImageSource.uri(uri));
	}
}

exports.setMinimumScaleType = function(val) {
	ssi.setMinimumScaleType = val;
}

exports.setMinScale = function(val) {
	ssi.setMinScale = val;
}

exports.getView = function(opts) {
	return ssi;
}
