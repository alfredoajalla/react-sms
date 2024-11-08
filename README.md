This is a [Next.js] SMS Sender App bootstrapped with [`create-next-app`] using the Twilio API.
With this app, users can easily input a phone number and message, and then send SMS directly using Twilio's robust messaging capabilities.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Features

 - Send SMS messages to any valid phone number.
 - Built with React for a dynamic and user-friendly interface.
 - Integrates with the Twilio API for seamless SMS delivery.


## Prerequisites
To run this application, you'll need:

 - A Twilio account with an active SID and Auth Token.
 - A Twilio phone number (for sending SMS).
 - Node.js and npm (or yarn) installed on your machine.


## Configure Environment Variables
Create a .env file in the root of your project and set the following environment variables with your Twilio credentials:

 - REACT_APP_TWILIO_ACCOUNT_SID=your_twilio_account_sid
 - REACT_APP_TWILIO_AUTH_TOKEN=your_twilio_auth_token
 - REACT_APP_TWILIO_PHONE_NUMBER=your_twilio_phone_number


## Technologies Used
 - React - For building the user interface.
 - Twilio API - For handling SMS functionality.