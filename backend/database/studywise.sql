DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS tokens CASCADE;
DROP TABLE IF EXISTS verification_tokens CASCADE;
DROP TABLE IF EXISTS events CASCADE;
DROP TABLE IF EXISTS todos CASCADE;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR (255) UNIQUE NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    is_verified BOOLEAN DEFAULT false
);

CREATE TABLE tokens (
    token_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
    token VARCHAR(255) NOT NULL
);

CREATE TABLE verification_tokens(
    token_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE NOT NULL,
    token VARCHAR(255) NOT NULL
);

CREATE TABLE events(
    event_id SERIAL PRIMARY KEY,
    event_title TEXT NOT NULL,
    event_description TEXT,
    date_time TIMESTAMP NOT NULL,
    duration INT,
    reminder BOOLEAN NOT NULL DEFAULT true,
    colour VARCHAR(7),
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE todos(
    todo_id SERIAL PRIMARY KEY,
    todo_title TEXT NOT NULL,
    todo_description TEXT NOT NULL,
    is_finished BOOLEAN NOT NULL,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE
);

-- Sample Data --

INSERT INTO users (user_id, first_name, last_name, email, username, password, is_verified)
VALUES
    (1, 'Michael', 'Lee', 'yfchauhk@gmail.com', 'mlee', '$2b$10$WxMO5IfOSvvsNi4rDsPc9uEH.I4y1MuGj6W8.sFyTEq48.maIVuLu', true);

INSERT INTO events (event_title, event_description, date_time, duration, reminder, colour, user_id)
VALUES
    ('Birthday Party', 'John birthday celebration', '2023-07-28 18:00:00', 3, true, '#FF5733', 1),
    ('Meeting with Client', 'Discuss project requirements', '2023-08-02 10:00:00', 2, true, '#3366CC', 1),
    ('Conference Talk', 'Speaking at Tech Conference', '2023-08-15 14:30:00', 1, true, '#00AA00', 1);

INSERT INTO todos (todo_title, todo_description, is_finished, user_id) VALUES
    ('Buy groceries', 'Lots of stuff to buy', false, 1),
    ('Finish report', 'Pull a all-nighter', false, 1),
    ('Call mom', 'To say happy birthday', false, 1);




    (8, 'Michael', 'Lee', 'yfchauhk@gmail.com', 'mlee', '$2b$10$WxMO5IfOSvvsNi4rDsPc9uEH.I4y1MuGj6W8.sFyTEq48.maIVuLu', true),
    (1, 'Anthony', 'Chan', 'anthonychan1211@gmail.com', 'anthony', '$2b$10$ESylvA.25PVWUQQk/jLfd.FHiju/U.mxb4pnKxevyY0OYtj8dO3a6', true);
