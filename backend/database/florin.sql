DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS tokens CASCADE;
DROP TABLE IF EXISTS verification_tokens CASCADE;


CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR (255) UNIQUE NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    is_verified BOOLEAN DEFAULT true
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
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE
)

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    todo_title TEXT NOT NULL,
    date_time TIMESTAMP NOT NULL,
    is_finished BOOLEAN NOT NULL,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE
)


INSERT INTO users (first_name, last_name, email, username, password, is_verified)
VALUES 
    ('John', 'Doe', 'user1@example.com', 'user1', 'password1',true),
    ('Jane', 'Smith', 'user2@example.com', 'user2', 'password2', true),
    ('Mike', 'Johnson', 'user3@example.com', 'user3', 'password3',true),
    ('Emily', 'Davis', 'user4@example.com', 'user4', 'password4',true);

