#!/bin/bash

mkdir platforms
mkdir plugins

# this has to be done twice
cordova platform add android

cordova-gen-icon

bower install

# update versionCode before release

# adb logcat | grep -i "Console"