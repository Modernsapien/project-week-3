DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS tokens CASCADE;
DROP TABLE IF EXISTS verification_tokens CASCADE;
DROP TABLE IF EXISTS event CASCADE;
DROP TABLE IF EXISTS todo CASCADE;


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
    user_id INT REFERENCES users(user_id)  ON DELETE CASCADE NOT NULL,
    token VARCHAR(255) NOT NULL
);

CREATE TABLE event(
    event_id SERIAL PRIMARY KEY,
    event_title TEXT NOT NULL,
    event_description TEXT,
    date_time TIMESTAMP NOT NULL,
    duration INT,
    reminder BOOLEAN NOT NULL DEFAULT true,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    todo_title TEXT NOT NULL,
    date_time TIMESTAMP NOT NULL,
    is_finished BOOLEAN NOT NULL,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE
);

