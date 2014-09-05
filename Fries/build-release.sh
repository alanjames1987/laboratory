#!/bin/bash

#keytool -genkey -v -keystore something.keystore -alias something -keyalg RSA -keysize 2048 -validity 10000

bower install

cordova build --release
