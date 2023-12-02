import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js';

const expect = chai.expect;
chai.use(chaiHttp);


describe('User API', () => {
  let token;

  before(async () => {
    // Login to get a JWT token for protected routes
    const response = await chai.request(app)
      .post('/api/auth/login')
      .send({
        email: 'kate@gmail.com',
        password: 'kate',
      });

    token = response.body.token;
  });

  describe('POST /api/users', () => {
    it('registers a new user', async () => {
      const newUser = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123',
        picturePath: '/path/to/picture',
        friends: ['friend1@example.com', 'friend2@example.com'],
        location: 'New York',
        occupation: 'Software Engineer',
      };

      const response = await chai.request(app)
        .post('/api/users')
        .set('Authorization', `Bearer ${token}`)
        .send(newUser);

      expect(response.status).to.equal(201);
      expect(response.body).to.deep.include(newUser);
    });

    it('returns an error if required fields are missing', async () => {
      const newUser = {
        email: 'johndoe@example.com',
        password: 'password123',
      };

      const response = await chai.request(app)
        .post('/api/users')
        .set('Authorization', `Bearer ${token}`)
        .send(newUser);

      expect(response.status).to.equal(400);
      expect(response.body).to.have.property('error');
    });
  });

  describe('POST /api/auth/login', () => {
    it('logs in a user with valid credentials', async () => {
      const credentials = {
        email: 'user@example.com',
        password: 'password123',
      };

      const response = await chai.request(app).post('/api/auth/login').send(credentials);

      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('token');
      expect(response.body).to.have.property('user');
    });

    it('returns an error for invalid credentials', async () => {
      const credentials = {
        email: 'user@example.com',
        password: 'invalidpassword',
      };

      const response = await chai.request(app).post('/api/auth/login').send(credentials);

      expect(response.status).to.equal(400);
      expect(response.body).to.have.property('error');
    });
  });
});
