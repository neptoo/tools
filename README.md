## Package components based on ElementUI

### Back To Top

keywords:

- Register global components in `index.js`, and import `back-top` in App.vue
- How to make BackTop available on all pages ——`slot`

> <back-top> <router-view /> </back-top>

### Login

#### data

- Form object: username and password
- Input validation rules for the form

Log in and distribute the event: true or false

![login-success](https://raw.githubusercontent.com/neptoo/tools/master/src/assets/login1.PNG)


![login-error](https://raw.githubusercontent.com/neptoo/tools/master/src/assets/login2.PNG)

### Phone verification code

![phone-login](https://raw.githubusercontent.com/neptoo/tools/master/src/assets/login3.PNG)

if phone num is false, change the btnText, timer counts down, btn disabled

The countdown is over, btnText changed, clearInterval