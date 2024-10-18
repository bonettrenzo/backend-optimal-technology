import supertest from 'supertest';
import { app } from '../../index.js';
import { sequelize } from '../infrastructure/sequelize.js';


const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});


/* crear usuario */
describe('POST /v1/users', () => {

  it('should return a success message', async () => {
    const createNewUser = {
      nombre: 'Juan',
    }

    const response = await request.post('/v1/users').send(createNewUser);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      data: expect.objectContaining({
        id: expect.any(Number),
        nombre: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),

      }),
      success: true,
    });
  })
});


/* validar que el campo no llegue null en la creacion */
describe('POST /v1/users', () => {

  it('should return a success message', async () => {
    const createNewUser = {
      nombre: null,
    }

    const response = await request.post('/v1/users').send(createNewUser);
    expect(response.status).toBe(500);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toContain('notNull Violation: Usuarios.nombre cannot be null');


  })
});



/* ELIMINAR USUARIO */
describe('DELETE /v1/users/:id', () => {

  it('should return an error if the id is not a number', async () => {
    const response = await request.delete('/v1/users/abc');
    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toContain('El id debe ser un número entero');
  });

});

/* VALIDAR EL TRAER TODA LA INFORMACIÓN */
describe('GET /v1/users', () => {
  it('should return a list of users', async () => {
    const response = await request.get('/v1/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      data: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          nombre: expect.any(String),
        })
      ]),
      success: true
    });
  });
});

/* VALIDAR EL TRAER TODA LA INFORMACIÓN POR ID */


describe('GET /v1/users (error handling)', () => {
  it('should return a list of users', async () => {
    const response = await request.get('/v1/users');
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      success: true,
      data: expect.any(Array)
    });
  });
});

