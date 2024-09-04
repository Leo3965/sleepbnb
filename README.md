## Mono Repo
```bash
$ nest generate library common
```

**creating a new app (service) inside mono repo**
```bash
$ nest g app reservations
```

**creating a new module at common project**
```bash
$ nest generate module database -p common
```

**creating a new resource (REST, GraphQL)**
```bash
$ nest g resource reservations
```

## Description

This backend application facilitates property reservations, offering functionalities similar to Airbnb. It manages user
authentication, property listings, bookings, payments, and reviews.

**Key Features:**

1. **User Authentication:** Secure registration and login processes for both guests and hosts.
2. **Property Listings:** Hosts can create, update, and manage property listings, including photos, descriptions,
   amenities, and pricing.
3. **Search and Filtering:** Guests can search for properties based on location, dates, price range, and specific
   amenities.
4. **Bookings:** Real-time availability checks and reservation management for guests, including booking confirmation and
   cancellation.
5. **Payments:** Integration with payment gateways for secure transactions, including booking payments and host payouts.
6. **Reviews and Ratings:** Guests can leave reviews and ratings for properties, helping future guests make informed
   decisions.
7. **Notifications:** Email and push notifications for booking confirmations, reminders, and updates.
8. **Admin Panel:** Tools for managing users, properties, bookings, and reviews, ensuring smooth platform operations.

**Technologies Used:**

- **Backend:** Node.js/Express or Python/Django
- **Database:** PostgreSQL or MongoDB
- **Authentication:** JWT (JSON Web Tokens) or OAuth
- **Payments:** Stripe or PayPal API
- **Notifications:** SendGrid or Twilio
- **Cloud Storage:** AWS S3 or Google Cloud Storage for storing property images

This backend app ensures a seamless and secure reservation experience for both guests and hosts, mirroring the
functionalities of popular platforms like Airbnb.

---

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
### CLI commands used on the project
1. nest new sleepbnb
2. nest generate library common
3. nest generate module database -p common
4. nest generate module config -p common