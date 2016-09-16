#Demo ionic app

##App gets science subreddit from reddit and shows that application on ionic

####Start with

```
npm install -g ionic
ionic start demo-reddit blank
ionic platform add android
```

####code for creating and then releasing a signed package for android

```
ionic build ios --release
ionic build android --release
```

####Create release package for android

```
/Users/abal/Desktop/demo-reddit/platforms/android/build/outputs/apk/android-release-unsigned.apk

cp  /Users/abal/Desktop/demo-reddit/platforms/android/build/outputs/apk/android-release-unsigned.apk /Users/abal/Desktop/demo-reddit/platforms/android/build/outputs/apk/android-release-signed.apk

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ~/isopics.keystore /Users/abal/Desktop/demo-reddit/platforms/android/build/outputs/apk/android-release-signed.apk aridaman

{key_sign_passcode}

~/Library/Android/sdk/build-tools/23.0.1/zipalign -v 4 /Users/abal/Desktop/demo-reddit/platforms/android/build/outputs/apk/android-release-signed.apk  /Users/abal/Desktop/demo-reddit/platforms/android/build/outputs/apk/android-release-signed-aligned.apk

cp /Users/abal/Desktop/demo-reddit/platforms/android/build/outputs/apk/android-release-signed-aligned.apk /Users/abal/Desktop/demo-release/demo-1.0.0.apk
```
