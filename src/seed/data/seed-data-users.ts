interface SeedUser {
  nombre: string;
  apellido: string;
  edad: number;
  ciudad: string;
  correo: string;
  genero: 'masculino' | 'femenino' | 'prefiero no decirlo';
}

interface SeedDataUsers {
  users: SeedUser[];
}

export const initalDataUser: SeedDataUsers = {
  users: [
    {
      nombre: 'Pedro',
      apellido: 'González',
      edad: 32,
      ciudad: 'Bogotá',
      correo: 'pedro.gonzalez@yopmail.com',
      genero: 'masculino',
    },
    {
      nombre: 'Laura',
      apellido: 'Ramos',
      edad: 23,
      ciudad: 'Medellín',
      correo: 'laura.ramos@yopmail.com',
      genero: 'femenino',
    },
    {
      nombre: 'Gabriel',
      apellido: 'Silva',
      edad: 41,
      ciudad: 'Cali',
      correo: 'gabriel.silva@yopmail.com',
      genero: 'masculino',
    },
    {
      nombre: 'Ana',
      apellido: 'García',
      edad: 29,
      ciudad: 'Barranquilla',
      correo: 'ana.garcia@yopmail.com',
      genero: 'femenino',
    },
    {
      nombre: 'Luis',
      apellido: 'Martínez',
      edad: 37,
      ciudad: 'Cartagena',
      correo: 'luis.martinez@yopmail.com',
      genero: 'masculino',
    },
    {
      nombre: 'María',
      apellido: 'Hernández',
      edad: 26,
      ciudad: 'Bucaramanga',
      correo: 'maria.hernandez@yopmail.com',
      genero: 'femenino',
    },
    {
      nombre: 'Andrés',
      apellido: 'Pérez',
      edad: 45,
      ciudad: 'Pereira',
      correo: 'andres.perez@yopmail.com',
      genero: 'masculino',
    },
    {
      nombre: 'Sofía',
      apellido: 'Ramírez',
      edad: 18,
      ciudad: 'Santa Marta',
      correo: 'sofia.ramirez@yopmail.com',
      genero: 'femenino',
    },
    {
      nombre: 'Miguel',
      apellido: 'Gómez',
      edad: 33,
      ciudad: 'Manizales',
      correo: 'miguel.gomez@yopmail.com',
      genero: 'masculino',
    },
    {
      nombre: 'Camila',
      apellido: 'Torres',
      edad: 20,
      ciudad: 'Ibagué',
      correo: 'camila.torres@yopmail.com',
      genero: 'femenino',
    },
    {
      nombre: 'David',
      apellido: 'Silva',
      edad: 42,
      ciudad: 'Villavicencio',
      correo: 'david.silva1@yopmail.com',
      genero: 'masculino',
    },
    {
      nombre: 'Ana',
      apellido: 'Rojas',
      edad: 27,
      ciudad: 'Cúcuta',
      correo: 'ana.rojas1@yopmail.com',
      genero: 'femenino',
    },
    {
      nombre: 'Daniel',
      apellido: 'Ortega',
      edad: 38,
      ciudad: 'Pasto',
      correo: 'daniel.ortega@yopmail.com',
      genero: 'masculino',
    },
    {
      nombre: 'Laura',
      apellido: 'Jiménez',
      edad: 19,
      ciudad: 'Neiva',
      correo: 'laura.jimenez1@yopmail.com',
      genero: 'femenino',
    },
    {
      nombre: 'Carlos',
      apellido: 'Moreno',
      edad: 31,
      ciudad: 'Armenia',
      correo: 'carlos.moreno@yopmail.com',
      genero: 'masculino',
    },
    {
      nombre: 'Juan',
      apellido: 'Álvarez',
      edad: 24,
      ciudad: 'Popayán',
      correo: 'juan.alvarez@yopmail.com',
      genero: 'masculino',
    },
    {
      nombre: 'Fernando',
      apellido: 'Ramos',
      edad: 35,
      ciudad: 'Valledupar',
      correo: 'fernando.ramos@yopmail.com',
      genero: 'masculino',
    },
    {
      nombre: 'María',
      apellido: 'Cruz',
      edad: 17,
      ciudad: 'Montería',
      correo: 'maria.cruz1@yopmail.com',
      genero: 'femenino',
    },
    {
      nombre: 'Javier',
      apellido: 'González',
      edad: 28,
      ciudad: 'Sincelejo',
      correo: 'javier.gonzalez1@yopmail.com',
      genero: 'masculino',
    },
    {
      nombre: 'Sofía',
      apellido: 'Tunja',
      edad: 46,
      ciudad: 'Tunja',
      correo: 'sofia.tunja@yopmail.com',
      genero: 'femenino',
    },
    {
      nombre: 'Pedro',
      apellido: 'Gómez',
      edad: 16,
      ciudad: 'Bogotá',
      correo: 'pedro.gomez1@yopmail.com',
      genero: 'masculino',
    },
    {
      nombre: 'Laura',
      apellido: 'Rodríguez',
      edad: 30,
      ciudad: 'Medellín',
      correo: 'laura.rodriguez1@yopmail.com',
      genero: 'femenino',
    },
    {
      nombre: 'Gabriel',
      apellido: 'González',
      edad: 39,
      ciudad: 'Cali',
      correo: 'gabriel.gonzalez1@yopmail.com',
      genero: 'masculino',
    },
    {
      nombre: 'Ana',
      apellido: 'López',
      edad: 22,
      ciudad: 'Barranquilla',
      correo: 'ana.lopez1@yopmail.com',
      genero: 'femenino',
    },
    {
      nombre: 'Luis',
      apellido: 'Martínez',
      edad: 40,
      ciudad: 'Cartagena',
      correo: 'luis.martinez1@yopmail.com',
      genero: 'masculino',
    },
    {
      nombre: 'María',
      apellido: 'Hernández',
      edad: 25,
      ciudad: 'Bucaramanga',
      correo: 'maria.hernandez1@yopmail.com',
      genero: 'femenino',
    },
    {
      nombre: 'Andrés',
      apellido: 'Pérez',
      edad: 48,
      ciudad: 'Pereira',
      correo: 'andres.perez1@yopmail.com',
      genero: 'masculino',
    },
    {
      nombre: 'Sofía',
      apellido: 'Ramírez',
      edad: 16,
      ciudad: 'Santa Marta',
      correo: 'sofia.ramirez1@yopmail.com',
      genero: 'femenino',
    },
    {
      nombre: 'Miguel',
      apellido: 'Gómez',
      edad: 43,
      ciudad: 'Manizales',
      correo: 'miguel.gomez1@yopmail.com',
      genero: 'masculino',
    },
    {
      nombre: 'Camila',
      apellido: 'Torres',
      edad: 19,
      ciudad: 'Ibagué',
      correo: 'camila.torres1@yopmail.com',
      genero: 'masculino',
    },
  ],
};
