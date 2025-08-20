# RideIt Frontend

RideIt is a full-stack ride-hailing application built using the **MERN stack** (MongoDB, Express.js, React, Node.js).  
It allows users to book rides, captains to accept rides, and provides real-time ride updates with Socket.IO.

## Getting Started

1. Clone the repository:  
   ```bash
   git clone https://github.com/mukulBhardwaj-24/RideIt.git
   cd frontend

2. Install dependencies:
    npm install

3. Run the app:
    npm start

4. Open in browser:
    http://localhost:3000



## Frontend Structure

src/
│── App.jsx                      # Main app router
│── pages/                       # All main pages
│── components/                  # Reusable UI components
│── assets/                      # Images, icons, etc.
│── context/                      # (if using context for auth/state)
│── utils/                        # Utility/helper functions
public/                           # Static assets


#### App.jsx (`src/App.jsx`)

The `App.jsx` file defines the main routing structure of the application using **React Router DOM**.  

- Maps user and captain authentication flows.  
- Wraps protected routes with `UserProtectedWrapper` and `CaptainProtectedWrapper`.  
- Defines key paths:  
  - `/` → Start page  
  - `/login` & `/signup` → User login/signup  
  - `/captain-login` & `/captain-signup` → Captain login/signup  
  - `/home` → User dashboard (protected)  
  - `/captain-home` → Captain dashboard (protected)  
  - `/riding` → User’s active ride view  
  - `/captain-riding` → Captain’s active ride view  


### Key Pages

#### CaptainHome (`src/pages/CaptainHome.jsx`)

The `CaptainHome` page is the main dashboard for captains (drivers). It provides the following features:

- Real-time location updates using WebSockets.
- Receives new ride requests and displays them in a popup.
- Allows captains to confirm rides and update ride status.
- Integrates with components like `CaptainDetails`, `RidePopUp`, and `ConfirmRidePopUp`.
- Uses GSAP for smooth popup animations.

#### CaptainLogin (`src/pages/CaptainLogin.jsx`)

The `CaptainLogin` page allows captains (drivers) to log in to their accounts. It provides the following features:

- Collects email and password from the captain.
- Sends login credentials to the backend API for authentication.
- Stores the authentication token and captain data on successful login.
- Navigates to the captain dashboard upon successful login.
- Provides a link to register as a new captain and a link to sign in as a user.

#### CaptainSignup (`src/pages/CaptainSignup.jsx`)

The `CaptainSignup` page allows new captains (drivers) to register for an account. It provides the following features:

- Collects personal details (name, email, password) and vehicle information (color, plate, capacity, type).
- Sends registration data to the backend API to create a new captain account.
- Stores the authentication token and captain data on successful registration.
- Navigates to the captain dashboard upon successful signup.
- Provides a link to log in if the captain already has an account.

#### CaptainLogout (`src/pages/CaptainLogout.jsx`)

The `CaptainLogout` page handles the logout process for captains (drivers). It provides the following features:

- Sends a logout request to the backend API using the stored authentication token.
- Removes the captain's token from local storage upon successful logout.
- Redirects the captain to the login page after logout.


#### Home (`src/pages/Home.jsx`)

The `Home` page is the main interface for users to book rides. It provides the following features:

- Allows users to enter pickup and destination locations with real-time suggestions.
- Displays panels for vehicle selection, ride confirmation, and driver search using animated transitions (GSAP).
- Integrates with WebSockets to receive ride status updates in real time.
- Uses components like `LocationSearchPanel`, `VehiclePanel`, `ConfirmRide`, `LookingForDriver`, and `WaitingForDriver`.
- Handles ride creation and fare calculation via API requests.

#### Riding (`src/pages/Riding.jsx`)

The `Riding` page displays the ride details to the user while a trip is in progress. It provides the following features:

- Shows live tracking of the ride using the `LiveTracking` component.
- Displays captain (driver) and vehicle details, including name and plate number.
- Shows pickup and destination information, as well as fare details.
- Listens for the `ride-ended` event via WebSocket and navigates the user back to the home page when the ride is completed.
- Provides a button for payment action.

#### UserLogin (`src/pages/UserLogin.jsx`)

The `UserLogin` page allows users to log in to their accounts. It provides the following features:

- Collects email and password from the user.
- Sends login credentials to the backend API for authentication.
- Stores the authentication token and user data on successful login.
- Navigates to the home page upon successful login.
- Provides a link to register as a new user and a link to sign in as a captain.

#### UserSignup (`src/pages/UserSignup.jsx`)

The `UserSignup` page allows new users to register for an account. It provides the following features:

- Collects personal details (first name, last name, email, password).
- Sends registration data to the backend API to create a new user account.
- Stores the user data on successful registration and navigates to the home page.
- Provides a link to log in if the user already has an account.

#### UserLogout (`src/pages/UserLogout.jsx`)

The `UserLogout` page handles the logout process for users. It provides the following features:

- Sends a logout request to the backend API using the stored authentication token.
- Removes the user's token from local storage upon successful logout.
- Redirects the user to the login page after logout.

### Key Components

#### LocationSearchPanel (`src/components/LocationSearchPanel.jsx`)

- Displays location suggestions for pickup and destination fields.
- Allows users to select a suggestion, updating the corresponding field.
- Receives props for suggestions, field setters, and active field.

#### VehiclePanel (`src/components/VehiclePanel.jsx`)

- Shows available vehicle types (car, moto, auto) with fare and estimated arrival.
- Lets users select a vehicle type and proceed to ride confirmation.
- Receives fare data and selection handlers as props.

#### ConfirmRide (`src/components/ConfirmRide.jsx`)

- Displays ride summary (pickup, destination, fare) before confirmation.
- Lets users confirm the ride, triggering ride creation and searching for a driver.
- Receives ride details and handlers as props.

#### LookingForDriver (`src/components/LookingForDriver.jsx`)

- Shows a searching animation and ride details while matching with a driver.
- Displays pickup, destination, and fare.
- Allows users to cancel the search.

#### WaitingForDriver (`src/components/WaitingForDriver.jsx`)

- Displays driver and vehicle details after a ride is confirmed but before it starts.
- Shows OTP, pickup, destination, and fare.
- Allows users to close the panel.

#### RidePopUp (`src/components/RidePopUp.jsx`)

- Shown to captains when a new ride request is available.
- Displays user info, pickup, destination, and fare.
- Allows captains to accept or ignore the ride.

#### ConfirmRidePopUp (`src/components/ConfirmRidePopUp.jsx`)

- Allows captains to confirm a ride by entering an OTP.
- Displays ride and user details.
- On confirmation, starts the ride and navigates to the riding screen.

#### CaptainDetails (`src/components/CaptainDetails.jsx`)

- Shows captain's profile, earnings, and stats.
- Uses context to access captain data.

#### LiveTracking (`src/components/LiveTracking.jsx`)

- Displays a live Google Map with the user's current location.
- Updates position in real time using browser geolocation.

#### FinishRide (`src/components/FinishRide.jsx`)

- Allows captains to finish a ride and notify the backend.
- Displays ride and user details.
- On completion, navigates back to the captain home page.

