// import request from 'supertest';
// import app from '../index.js';

// describe('POST /posts', () => {
//   it('should create a new post', async () => {
//     const userData = {
//       firstName: 'John',
//       lastName: 'Doe',
//       location: 'New York',
//       picturePath: require('../public/assets/p1.jpeg'),
//     };
//     const user = await request(app)
//       .post('/users')
//       .send(userData);

//     const postData = {
//       userId: user.body._id,
//       description: 'Hello World!',
//       picturePath: 'https://example.com/hello-world.jpg',
//     };
//     const res = await request(app)
//       .post('/posts')
//       .send(postData)
//       .expect(201);
//     expect(res.body.length).toBe(1);
//     expect(res.body[0].description).toBe('Hello World!');
//     expect(res.body[0].likes.size).toBe(0);
//     expect(res.body[0].comments.length).toBe(0);
//   });

//   it('should return 409 if post creation fails', async () => {
//     const postData = {
//       userId: 'invalid-user-id',
//       description: 'Hello World!',
//       picturePath: 'https://example.com/hello-world.jpg',
//     };
//     const res = await request(app)
//       .post('/posts')
//       .send(postData)
//       .expect(409);
//     expect(res.body.message).toMatch(/User validation failed/);
//   });
// });

// describe('GET /posts', () => {
//   it('should get all posts', async () => {
//     const res = await request(app)
//       .get('/posts')
//       .expect(200);
//     expect(res.body.length).toBeGreaterThan(0);
//   });

//   it('should get posts of a user', async () => {
//     const userData = {
//       firstName: 'Jane',
//       lastName: 'Doe',
//       location: 'Los Angeles',
//       picturePath: 'https://example.com/jane-doe.jpg',
//     };
//     const user = await request(app)
//       .post('/users')
//       .send(userData);
//     const postData = [      {        userId: user.body._id,        description: 'Post 1',        picturePath: 'https://example.com/post-1.jpg',      },      {        userId: user.body._id,        description: 'Post 2',        picturePath: 'https://example.com/post-2.jpg',      },    ];
//     await request(app)
//       .post('/posts')
//       .send(postData[0])
//       .expect(201);
//     await request(app)
//       .post('/posts')
//       .send(postData[1])
//       .expect(201);
//     const res = await request(app)
//       .get(`/posts/user/${user.body._id}`)
//       .expect(200);
//     expect(res.body.length).toBe(2);
//     expect(res.body[0].description).toBe('Post 1');
//     expect(res.body[1].description).toBe('Post 2');
//   });

//   it('should return 404 if posts not found', async () => {
//     const res = await request(app)
//       .get('/posts/user/invalid-user-id')
//       .expect(404);
//     expect(res.body.message).toMatch(/User not found/);
//   });
// });

it('should run', () => {
  
})