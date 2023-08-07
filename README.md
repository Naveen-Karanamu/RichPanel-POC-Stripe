# RichPanel POC using Stripe

### Page 1: (Login & SignUp page)

Route :

```
/singin
/signup
```

This project includes the Sign Up and Sign In with the proper validations and User Checks

- Checks for the Logging user
- Rejects the request if the user already exists
- New user will be added to the MongoDB
- Existing user will be fetched to the MongoDb and will be verified.

### Page 2: (Subscription Page)

Route :

```
/plans
```

After Sign Up or Sign In the user will be redirected to the Subscriptions Page

- Select the plan (Monthly/ Yearly), Monthly will be selected initially but we can toggle it.
- Select a plan accordingly
- Throws alert if no plan is selected
- Subscription details will be added to the mongoDB.

### Page 3: (Payments Page)

Route :

```
/payment
```

Once the plan is selected, the user will be redirected to the Payments page

- Enter the Card Details, Expiry Month/ Year and CVV.
- It will create a POST Request to the Stripe with the Card Details in it with the enabled configuration.

### Page 4: (Plan Confirmation and deletion page)

Route :

```
/confirm
```

Once the payment is successful, the payment details along with the current plan will be shown

- You can change the plans.
- If you wish to cancel you can. It will delete your subscription both from the MongoDb and the Stripe.
- You can choose a new plan

## Installation

- Clone the Git Repository

```
$ git clone https://github.com/Naveen-Karanamu/RichPanel-POC-Stripe.git
```

### Run the FrontEnd

- Navigate to client folder

```
$ cd client
```

#### Intall the packages
- yarn 
```
$ yarn install
```
- npm 
```
$ npm install
```

#### Run the Frontend
- yarn 
```
$ yarn start
```
- npm 
```
$ npm start
```

### Run the Backend

- Navigate to Server folder

```
$ cd server
```

#### Intall the packages
- yarn 
```
$ yarn install
```
- npm 
```
$ npm install
```

#### Run the Backend
- yarn 
```
$ yarn dev
```
- npm 
```
$ npm dev
```

#### Set the ENV VARIABLES (Root Dir)

- client

```
STRIPE_PUBLISHABLE_API_KEY = ""
STRIPE_SECRET_KEY = ""
```

- server

```
MONGODB_URL = ""
STRIPE_PUBLISHABLE_API_KEY = ""
STRIPE_SECRET_KEY = ""
```
# Screenshots
![img](Asserts\signup.png)
![img](Asserts\login.png)
![img](Asserts\plans.png)
![img](Asserts\payment.png)
![img](Asserts\confirm.png)
![img](Asserts\cancel.png)
![img](Asserts\stripe.png)
![img](Asserts\mongo.png)