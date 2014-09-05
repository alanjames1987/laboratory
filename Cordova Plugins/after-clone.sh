#!/bin/bash

mkdir platforms
mkdir plugins

# this has to be done twice
cordova platform add android

cordova plugin add https://github.com/alanjames1987/Cordova-Test.git

# cordova-gen-icon

bower install

# update versionCode before release

# adb logcat | grep -i "Console"