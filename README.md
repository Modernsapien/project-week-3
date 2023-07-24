# project-week-3

project week

StudyWise is a productivity app designed to support students with their revision and study schedules. It offers a range of features, including a todo list, calendar, Pomodoro timer, and dark/night mode, to help users stay organized, focused, and motivated during their study sessions.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Todo**: Keep track of tasks and topics that need to be revised. Users can mark completed tasks and review their previous completed tasks within a specific period. Additionally, the app allows filtering tasks to help users find their todos effectively.

- **Calendar**: Plan study sessions and topics to review on specific days. Users can add a color code to subjects for easy visual identification. The app also provides filtering options to view all tasks related to a specific subject.

- **Pomodoro Timer**: Enhance productivity with the Pomodoro technique. The app includes a timer that allows users to work in focused sessions and take short or long breaks in between. Users can also enjoy motivational quotes displayed in a carousel to stay inspired and some calming background music.

- **Dark/Night Mode**: Reduce eye strain and study comfortably during low-light conditions. The app offers a Dark/Night mode toggle that changes the color scheme throughout the app.

## Demo

Image here

## Getting Started

To run StudyWise locally, follow these steps:

1. Clone the repository:
   git clone git@github.com:Modernsapien/project-week-3.git

2. Install the required dependencies for backend:
   cd backend
   npm install

3. Start the backend development server:
   npm run setup-db
   npm run dev

4. Install the required dependencies for client:
   cd ../client
   npm install

5. Start the client development server:
   npm run dev

6. Create a .env file in the backend folder and add the following:

7. create instance on ElephantSql and add to .env file
   PORT=3000
   DB_URL="yourLink"

The app should now be running on http://localhost:3000.

## Usage

- **Todo Page**: Add, edit, and mark completed tasks. Filter tasks by priority to focus on high-priority study topics.

- **Calendar Page**: Add study sessions and topics for specific days. Use color codes to organize subjects. Filter tasks by subject to view relevant study topics.

- **Pomodoro Page**: Use the Pomodoro timer to work in focused sessions. Enjoy motivational quotes displayed in a carousel. Optionally, play background music during study sessions.

- **Dark/Night Mode**: Toggle the Dark/Night mode switch to change the app's color scheme for comfortable study sessions during low-light conditions.

## Technologies Used

- React
- HTML5
- CSS
- Bootstrap
- JavaScript
- ElephantSQL

## Contributing

Contributions to StudyWise are welcome! If you find any bugs or have suggestions for new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code. Attribution is appreciated but not required.
