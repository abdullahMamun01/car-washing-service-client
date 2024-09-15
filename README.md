# Car Washing Service - Client

## Overview

This is the client-side implementation of the **Car Washing Service** application built using **React.js**, **TypeScript**, and **Tailwind CSS**. It connects to a backend API to provide car washing services to users. The client allows users to sign up, log in, browse available services, check slot availability, and make bookings. Additional features include countdowns for booked slots, profile management, and feedback functionality.

## Features

- **User Authentication**: Users can sign up and log in to access the service.
- **Service Browsing**: Users can view all available car washing services.
- **Slot Availability**: Users can check time slot availability for booking services.
- **Service Booking**: Users can book available services based on available time slots.
- **Booking Countdown**: Users can view a countdown timer for their upcoming booked time slots.
- **Profile Management**: Users can update their personal information such as name, email, and contact details.
- **Feedback**: Users can provide feedback for services they have booked and completed.
- **Booking Management**: Users can view their booking history.
- **Stripe Payment Integration**: Users can make payments securely using Stripe.
- **Admin Dashboard**: Admins can manage services, time slots, and view all bookings.
- **Form Handling & Validation**: Forms are handled with **React Hook Form** and validated with **Zod** schemas.

## Pages and Routes

### Home
- **Route**: `/`
- **Description**: Displays the available car washing services and an introduction to the service.

### Sign Up
- **Route**: `/signup`
- **Description**: Allows new users to register for the car washing service using form validation.

### Log In
- **Route**: `/login`
- **Description**: Authenticates users and provides them access to protected routes.

### Services
- **Route**: `/services`
- **Description**: Lists all available car washing services with an option to book a service.

### Booking Page
- **Route**: `/bookings`
- **Description**: Allows users to view all their previous and current bookings. It also includes a countdown for upcoming bookings.

### Profile
- **Route**: `/profile`
- **Description**: Allows users to update their personal profile information such as name, email, and phone number.

### Feedback
- **Route**: `/feedback`
- **Description**: Provides a form for users to submit feedback about the car washing services they received.

### Admin Dashboard (Admin Only)
- **Route**: `/admin`
- **Description**: Admin access to manage services, time slots, and view all bookings.

## Technology Stack

### Frontend

- **React.js**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript for static typing.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.
- **ShadCN UI**: A customizable UI library for modern web interfaces.
- **Redux Toolkit**: For state management across the application.
- **React Router DOM**: For client-side routing and navigation.
- **React Hook Form**: For managing form state and handling user inputs.
- **Zod**: Schema validation library for validating form data.
- **Moment.js**: Library for parsing, validating, manipulating, and displaying dates and times.
- **Stripe Payment**: Integrated for secure payments.

### Backend

The backend API for this client is implemented with **Node.js**, **Express**, **MongoDB**, **JWT**, and **Zod**. Please refer to the backend repository for API documentation.

## Installation and Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-repo-url.git
    ```

2. **Navigate to the client directory:**

    ```bash
    cd car-wash-client
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Configure environment variables:**

    Create a `.env` file in the root directory and add the following environment variables:
    ```bash
    REACT_APP_API_BASE_URL=https://car-washing-service-client.vercel.app/
    REACT_APP_STRIPE_PUBLIC_KEY=your-stripe-public-key
    ```

5. **Run the client application:**

    ```bash
    npm start
    ```

6. **The application should be available at:**
   - `https://car-washing-service-client.vercel.app/` (by default)

