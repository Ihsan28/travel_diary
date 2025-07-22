# Traveler Diary App

## Overview
The Traveler Diary App is a React application designed to allow users to create and manage diary entries with a staggered view layout. Each entry can include a primary image, multiple smaller images, and text, providing a visually appealing way to document travel experiences.

## Features
- **Staggered Layout**: Diary entries are displayed in a staggered format for an engaging visual experience.
- **Image Management**: Utilizes a custom hook to maintain image aspect ratios and sizes within fixed containers.
- **Responsive Design**: The application is designed to be responsive, ensuring a good user experience across devices.

## Project Structure
```
traveler-diary-app
├── src
│   ├── components
│   │   ├── DiaryEntry.tsx
│   │   ├── ImageContainer.tsx
│   │   ├── ImageGallery.tsx
│   │   └── StaggeredLayout.tsx
│   ├── hooks
│   │   └── useImageRatio.ts
│   ├── utils
│   │   ├── imageHelpers.ts
│   │   └── ratioCalculator.ts
│   ├── types
│   │   └── index.ts
│   ├── styles
│   │   ├── globals.css
│   │   └── components.css
│   └── App.tsx
├── public
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd traveler-diary-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the application, run:
```
npm start
```
This will launch the app in your default web browser.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.