## React Native Redux Auth (Login, Logout) Example

An example of token based React Native authentication.

| Library                  | Version |
|:-------------------------|:--------|
| react                    | 16.9.0  |
| redux                    | 4.0.5   |
| react-redux              | 7.2.0   |
| @react-navigation/native | 5.5.1   |
| @react-navigation/stack  | 5.4.2   |
| redux-thunk              | 2.3.0   |

### [Demo](https://expo.io/@raduungurean/react-native-redux-auth-login-logout-example)

- Username: testing@example.com
- Password: test1234

### Installation

`yarn` (or `npm install`)

### How to run

`yarn android` (or `npm run android`) `yarn ios` (or `npm run ios`)
`yarn web` (or `npm run web`)

### APIs

| Endpoint (Request Method: POST) | Response                                                                                                                        |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| `${apiUrl}/login`               | Error Response: `{"success":false, "message":"..."}`                                                                            |
| `${apiUrl}/login`               | Success Response: **Status Code: 200 Ok.** `{"success": true, "token": "...", "user": {"id": "...", "first_name": "...", ...}}` |
| `${apiUrl}/logout`              | Error Response: `{"success":false, "message": "..."`                                                                            |
| `${apiUrl}/logout`              | Success Response: **Status Code: 200 Ok.** `{"success":true,"message":"User logged out successfully"} `                         |

