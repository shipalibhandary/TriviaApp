# Trivia Quiz App (React Native + Expo)

## Project Overview
Trivia Quiz App is a simple mobile application built using React Native and Expo.
The app fetches quiz questions from a public API and allows users to answer MCQ-based questions.

This project was created as part of a mobile app assignment to demonstrate:

- API integration
- Navigation flow
- Basic state management
- Mobile UI development

## ✨ Features
- Login Screen (UI only)
- Home Screen with navigation cards
- Trivia Quiz (MCQ with 4 options)
- Result Screen
- Profile Screen
- Splash Screen
- API Integration (Open Trivia API)
- Android APK build using Expo EAS

## 📂 App Flow
Splash Screen -> Login Screen -> Home Screen -> Trivia Quiz Screen -> Result Screen

## 🔌 API Used
Open Trivia Database API

Example endpoint:
https://opentdb.com/api.php?amount=5&type=multiple

The app fetches:
- Question
- Correct Answer
- Incorrect Answers

## ⚙️ Installation & Setup
1. Clone the project
```
git clone <repository-link>
cd TriviaApp
```
2. Install dependencies
```
npm install
```

3. Start development server
```
npx expo start
```

Scan the QR code using:
- Expo Go OR

## 📦 Build APK (EAS)
- Development build
  ```
  eas build -p android --profile development
  ```

- Production APK
  ```
  eas build -p android --profile production
  ```
  After build completes, Expo provides a link/QR code to install the app.

## 👩‍💻 Author
Developed by Shipali
