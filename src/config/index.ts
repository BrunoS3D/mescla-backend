import type { Algorithm } from 'jsonwebtoken';

// fallback
const port = parseInt(process.env.PORT || '5000', 10);
const protocol = process.env.PROTOCOL || 'https';
const hostname = process.env.HOSTNAME || 'localhost';
const host = process.env.HOST || `${hostname}:${port}`;
const hostUrl = process.env.HOST_URL || `${protocol}://${hostname}:${port}`;

export default {
  /**
   * Where Am I??? ('development' by default)
   */
  nodeEnv: process.env.NODE_ENV || 'development',

  /**
   * Is the server running on development environment (boolean)
   */
  isDev: process.env.NODE_ENV !== 'production',

  server: {
    port,
    protocol,
    hostname,
    host,
    hostUrl,
  },

  client: {
    url: process.env.CLIENT_URL,
  },

  /**
   * Database auth
   */
  database: {
    name: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    schema: process.env.DATABASE_SCHEMA,
    schurlema: process.env.DATABASE_URL,
  },

  /**
   * Your secret sauce
   */
  jwt: {
    secret: process.env.JWT_SECRET,
    algorithm: process.env.JWT_ALGO as Algorithm,
    expiresIn: process.env.JWT_EXPIRATION_TIME,
  },

  github: {
    oauth: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  },

  /**
   * The salt to be used in bcrypt passwaord encryption. If specified as a number then a salt will be generated with the specified number of rounds and used.
   */
  passwordSalt:
    (Number.isInteger(Number(process.env.PASSWORD_SALT))
      ? Number(process.env.PASSWORD_SALT)
      : process.env.PASSWORD_SALT) ?? 7,
};
