# Wedding guests manager app

_**Android Mobile app to manage wedding guests.**_  

## Walkthrough
- _Add a guest_:  
**Press on the add button** fill the forms then submit the form by pressing the **save button**.  

- _Set a guest_:  
**Long press on one guest**, change the data then submit by pressing the **set button**.  

- _Delete all guests_:  
**Long press on the delete button**.  

- _Filter guests_:  
**Press** on the **status button** or **group button**.

## Design
**Main page** displays list of all guests and 9 buttons to manage guests. 
- List displays for each guest, its name, category, table and invite status.
- [IMG] _Coming soon_
- 3 buttons to filter by invite status:
  - Pending (yellow),
  - Accepted (green),
  - Rejected (red). 
- [IMG] _Coming soon_
- 6 buttons to filter by table (one for each table).
- [IMG] _Coming soon_
- 2 buttons to manage guests:
  - Add (one guest),
  - Delete (all guest, long press).  
- [IMG] _Coming soon_

**Adding page** to add one guest and 2 buttons:
- 3 input texts (firstname, lastname, group, category),
- 2 radio buttons (category, invite status),
- 2 form buttons (save and cancel).
  
**Changing page** to modify information about a guest (on long press):
- All forms are filled,
- Modify button (instead of save).


## Architecture
- **Front-End**: React, ReactNative and Expo.
- **Back-End**: Node.js, Express.js and MongoDB driver.
- **Database**: MongoDB Atlas.

## Server
Check out the [WeddingAPI server page](https://github.com/LoicTramis/weddingAPI).

<!-- 
* EAS Build
?- [Build Production](https://docs.expo.dev/build/setup/#build-for-android-emulatordevice-or-ios-simulator)
eas build --platform android
eas submit --platform android

?- Build APK
eas build -p android --profile preview 
-->