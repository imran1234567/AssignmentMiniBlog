# Mini Blogs App

Mini Blogs App is a React Native application built with Expo and TypeScript that allows users to either post or view blogs. The app implements role-based onboarding, a blogs listing with search and filtering, blogger profiles, a blog posting page, and optional features like a map view of blog writers and a chat interface.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Onboarding Screen**  
  Role-based onboarding for:
  - Blog Poster (Can create and post blogs)
  - Blog Viewer / Subscriber (Can view and interact with blogs)

- **Blogs Listing**  
  - Display a list of blogs published by bloggers.
  - Select a blog writer to view all their blogs.
  - Each blog includes:
    - Blog writer's image and name
    - Tags (categories/topics)
    - Blog content (with support for multiple images)
  - Search and filtering options:
    - Search by writer name
    - Filter by expertise
    - Filter by language

- **Blogger’s Profile Page**  
  - Detailed profile including:
    - Profile picture
    - Name, bio, and expertise
    - Total blogs posted
    - Followers count

- **Blog Posting Page**  
  - A dedicated page for blog posters to create new blogs.
  - Input fields for:
    - Title
    - Content (text & images)
    - Tags
    - Image upload using Expo Image Picker

- **Optional Features**
  - **Map Page:**  
    - Uses React Native Maps to show blog writers across India.
    - Each pin on the map represents a blog writer.
    - Tap a pin to view basic details and navigate to their profile.
  - **Chat Page:**  
    - A simple chat interface for blog subscribers to send messages to bloggers.
    - Supports pre-defined questions or open chat.

## Tech Stack

- **React Native (Expo)**
- **TypeScript**
- **React Navigation**  
  (Stack and Tab Navigators)
- **Context API**  
  (for state management)
- **Mock API / JSON Data**  
  (for blogs and blogger data)
- **React Native Maps**  
  (for displaying blog writer locations)
- **Expo Image Picker**  
  (for uploading images)

## Project Structure

```plaintext
MiniBlogsApp/
├── assets/                # Images, fonts, etc.
├── components/            # Reusable UI components (BlogCard, ProfileHeader, etc.)
├── context/               # Context providers (AuthContext, etc.)
├── data/                  # Mock JSON data (blogs.json, bloggers.json)
├── navigation/            # Navigation setup (RootNavigator, MainNavigator, BlogsStackNavigator)
├── screens/               # Screen components (Onboarding, BlogList, BlogDetail, Profile, CreateBlog, Map, Chat)
├── App.tsx                # App entry point
└── README.md              # Project documentation

Install Dependencies

Use npm or yarn to install all required packages:
npm install
# or
yarn install
Install Additional Expo Dependencies

Some packages might need installation via Expo CLI:
npx expo install react-native-maps react-native-screens react-native-safe-area-context expo-image-picker
npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs
Running the App
Start the Expo Server -
npx expo start
Launch on Device or Simulator

On your mobile device:
Install the Expo Go app (available on iOS and Android), then scan the QR code displayed in the terminal or browser.

On an iOS Simulator:
Press i in the terminal after starting Expo.

On an Android Emulator:
Press a in the terminal after starting Expo.


