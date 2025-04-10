// test.js
import request from "supertest";
import app from "./app.js"; // Tu archivo que tiene `const app = express()`

describe("🧪 Test de login y rutas protegidas", () => {
  let token;

  test("Login exitoso devuelve token", async () => {
    const response = await request(app)
      .post("/api/login")
      .send({ email: "fernando@gmail.com", password: "123456" });

    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBeDefined();
    token = response.body.token; // Guardamos token para siguiente test
  });

  test("Acceso a /api/usuarios/perfil con token válido", async () => {
    const response = await request(app)
      .get("/api/usuarios/perfil")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.usuario.email).toBe("fernando@gmail.com");
  });

  test("Acceso denegado sin token", async () => {
    const response = await request(app)
      .get("/api/usuarios/perfil");

    expect(response.statusCode).toBe(401);
  });
});
