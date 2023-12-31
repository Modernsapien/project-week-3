const db = require("../database/db");

require("dotenv").config();

class User {
  constructor({
    user_id,
    first_name,
    last_name,
    email,
    username,
    password,
    is_verified,
  }) {
    this.id = user_id;
    this.firstName = first_name;
    this.lastName = last_name;
    this.email = email;
    this.username = username;
    this.password = password;
    this.isVerified = is_verified;
  }

  static async getAll() {
    const response = await db.query("SELECT * FROM users");
    return response.rows.map((row) => new User(row));
  }

  static async getById(id) {
    const response = await db.query("SELECT * FROM users WHERE user_id = $1", [
      id,
    ]);
    if (response.rows.length !== 1) {
      throw new Error("Unable to locate user.");
    }
    return new User(response.rows[0]);
  }

  static async getByUsername(username) {
    const response = await db.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    if (response.rows.length !== 1) {
      throw new Error("Unable to locate user.");
    }
    console.log(response.rows);
    return new User(response.rows[0]);
  }

  static async getByEmail(email) {
    const response = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (response.rows.length !== 1) {
      throw new Error("Unable to locate user.");
    }
    return new User(response.rows[0]);
  }

  static async create(data) {
    const {
      firstName: first_name,
      lastName: last_name,
      email: userEmail,
      username: username,
      password,
    } = data;
    const query =
      "INSERT INTO users (first_name, last_name, email, username, password) " +
      "VALUES ($1, $2, $3, $4, $5) RETURNING user_id";
    const values = [first_name, last_name, userEmail, username, password];
    const response = await db.query(query, values);
    const newId = response.rows[0].user_id;
    return User.getById(newId);
  }

  async update() {
    const query =
      "UPDATE users SET first_name = $1, last_name = $2, username = $3, password = $4 " +
      "WHERE user_id = $5";
    const values = [
      this.firstName,
      this.lastName,
      this.username,
      this.password,
      this.id,
    ];
    await db.query(query, values);
    return this;
  }

  async delete() {
    await db.query("DELETE FROM users WHERE user_id = $1", [this.id]);
  }

  static async verifyUser(id) {
    const response = await db.query(
      `UPDATE users SET is_verified = true WHERE user_id = $1 RETURNING *`,
      [id]
    );

    return response.rows[0];
  }
}

module.exports = User;
