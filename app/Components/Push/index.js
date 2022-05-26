import React from 'react';
import {Linking, Platform} from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';

const PushController = () => {
  PushNotification.configure({
    onRegister: function () {},
    onNotification: function (notification) {
      if (notification.foreground === true) {
        if (
          notification.title !== undefined &&
          notification.message !== undefined
        ) {
          if (notification?.userInteraction === true) {
            console.log(' 11111111');
            console.log(' goijg to open url');
            var url = notification?.data?.link ?? notification?.message;
            Linking.openURL(url);
          } else {
            PushNotification.localNotification(notification);
          }

          //
          console.log(' show the local notif....');
        }
        if (Platform.OS === 'ios') {
          //for removing badge number. Dont know if it works.
          notification.finish(PushNotificationIOS.FetchResult.NoData);
        }
      } else {
        if (notification?.userInteraction === true) {
          console.log(' ///////');
          console.log(notification?.data);
          console.log(notification?.data?.link);
          if (notification?.data?.link !== undefined) {
            Linking.openURL(notification?.data?.link);
          }
        }
      }
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
  });

  PushNotification.createChannel(
    {
      channelId: 'fcm_fallback_notification_channel',
      channelName: 'Test Channel',
    },
    created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  );
  return null;
};

export default PushController;
