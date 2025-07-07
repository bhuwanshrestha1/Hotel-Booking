# QuickStay - Hotel Booking Application

![License](https://img.shields.io/badge/License-MIT-yellow.svg)

QuickStay is a full-stack hotel booking platform built with the MERN stack. It allows users to search, book, and manage hotel reservations easily, while hotel owners can manage their listings and bookings through an admin dashboard.

## Features

### User Features

- Secure Authentication with email and Google (via Clerk)
- Search hotels by destination, dates, and guests
- Filter and sort hotels by price, room type, and amenities
- Detailed hotel and room information
- Easy booking and payment (Stripe integration)
- User dashboard to view/manage bookings
- Responsive and mobile-friendly UI
- **Booking Confirmation Email:** Sends an automatic confirmation email to users after a successful booking.

### Admin / Hotel Owner Features

- Admin dashboard with analytics (total bookings, revenue)
- Manage rooms: add, update, activate/deactivate listings
- Booking management with payment status tracking
- Hotel registration for new property owners

## Technology Stack

- **Frontend:** React.js, React Router, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** Clerk
- **Payment:** Stripe
- **Image Hosting:** Cloudinary
- **Deployment:** Vercel / Netlify (Frontend), Heroku / Render (Backend)

## Screenshots

![1](https://github.com/user-attachments/assets/de877b97-3cde-434c-822f-e8aecdbd4637)
![2](https://github.com/user-attachments/assets/b505b07a-0ae0-45d0-8efd-094a727aea70)
![3](https://github.com/user-attachments/assets/0a1ee37b-55e4-48a8-8b72-e07fa0b5c6fd)
![4](https://github.com/user-attachments/assets/2859de3b-3a0f-443a-a31b-0f8c1e80cc8b)
![8](https://github.com/user-attachments/assets/9fbf9424-4a02-4870-875a-91e46d238e2d)
![5](https://github.com/user-attachments/assets/cf2b9782-ac07-413e-b6dc-bea8348ab6af)
![6](https://github.com/user-attachments/assets/448128c7-4466-4893-8145-4ba02232d3be)
![7](https://github.com/user-attachments/assets/882a2c95-34ae-44c3-8199-1748fada9a4b)
![9](https://github.com/user-attachments/assets/dd57d206-61b6-49c0-9929-44bdd3a9e849)
![10](https://github.com/user-attachments/assets/f95b459b-2eeb-4099-b47a-4417e7557a5c)

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- MongoDB (local or Atlas account)

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/quickstay.git
cd quickstay

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```
