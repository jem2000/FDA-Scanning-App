# FDA-Scanning-App
This is the repo for our Senior Design Software Mini-Project, created by Justin Melville and Justin Lam

This app was designed for EC463, Senior Design. Its purpose is for a user to be able to track their daily nutrition totals. It accomplishes this by scanning barcodes using the FDC (FoodData Center) RESTful API. This API is only compatible with UPC barcodes. Scanning another barcode will not return results from our app. After scanning, users can view the nutritional information (calories, fats, & sugars) of the scanned product. They can also adjust the default portion size to better match the level of consumption. After scanning at least one item, users can then view their nutrition totals as well as the names and info of individual products by navigating to the history page.

## Loading Screen
This screen only appears in-between screens, such as when a user has entered their email and password and are waiting for the backend to authenticate their information.

## Sign-Up/Login Screen
For the sign-up and login screens, the user needs to be mindful if they've already created an account with our app before. If they do not have an account, they can enter their email and a new password on the sign-up page, and then press on the create account button. This will create a new user in Firebase backend service. If you already have an account, instead navigate to the login page where you can enter a previously-used email along with the corresponding password. Whether signing up or logging in, users will be brought to the main page of the app.

## Main Menu
While on the main menu page, users will be able to view the email they are currently logged in with, to ensure they are logging to the correct account. They will also see three buttons; 'logout,' 'scan barcode,' & 'history'. Logout allows them to sign out of their account. Scan Barcode will navigate to a camera screen where users can scan products. History allows them to view previously logged projects.


## Barcode Scanner
While on the barcode scanner screen, users will see two things, their camera and an exit scanning button. The exit scanning button will bring users back to the home screen. For the camera, users simply need to point their phone at a valid barcode. This will cause a popup to appear with the type of barcode scanned, as well as the number of the code. Additionally, users will be brought to the Info page. If an invalid barcode was scanned, the app will remain on the barcode scanner page and users should exit back to the menu and re-enter the barcode scanner page to try again. 


## Info Screen
The info page will automatically be accessed upon scanning a valid barcode. On top of the page, users will see the name/description of the scanned item, below which will be the calorie, fat, and sugar totals. Beneath those, is the input box where users enter the number of servings they have consumed. While editing this value, they will be able to see the nutrition values update synchronously. Finally, users will see three buttons at the bottom of this page. The 'Rescan' button will bring them back to the barcode scanner. The 'Add to daily intake totals' button will log the scanned item and servings value to the user's history. Finally, they can view this history by pressing on the 'History' button. 


## History Screen
The History screen is where users can access their previously scanned items. At the top, they will see the nutrition totals of all their scanned items. Beneath that, will be records of each individual item. Finally, once users scroll to the bottom they will see a button that allows them to return to the main page.

