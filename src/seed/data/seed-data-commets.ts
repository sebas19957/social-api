interface SeedComments {
  id: string;
  publication_id: string;
  user_id: string;
  content: string;
}

interface SeedDataComments {
  comments: SeedComments[];
}

export const initalDataComments: SeedDataComments = {
  comments: [
    {
      id: '3ce95b18-e159-4c73-864b-79d42ad9a69f',
      publication_id: 'a06e8dc2-304b-42df-8ed7-89136f6ab19a',
      user_id: 'd8e8e3e1-7e4a-4e4b-8e4c-9e4d8e4e8e4f',
      content: 'Innovar o desaparecer: ¡Totalmente de acuerdo, amigo!',
    },
    {
      id: '5e9f3a8d-3c38-45b4-89ed-eb9d1b248b5f',
      publication_id: '9f89dbd2-78ca-4a01-a289-0c2fba9744f7',
      user_id: 'a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p',
      content: 'Piensa diferente: Eres un rebelde creativo, jaja.',
    },
    {
      id: '64379f90-4e8e-49ab-a23d-098e63a6f46f',
      publication_id: 'b7a9bc95-6831-4e2f-951d-e3987b5e4b28',
      user_id: 'q1w2e3r4-t5y6-u7i8-o9p0-a1s2d3f4g5h',
      content: 'Menos es más: ¡Minimalismo power!',
    },
    {
      id: 'f536b7b4-0376-4e92-b903-7779b59a456c',
      publication_id: 'd6e5f2b3-10a4-4c8f-b926-637e4a8d7b20',
      user_id: 'j1k2l3m4-n5b6-v7c8-x9z0-q1w2e3r4t5y',
      content: 'Conectar el mundo: ¡Dame señal en todo el mundo!',
    },
    {
      id: 'e84f5993-2189-4e63-8a72-05c92c7e4560',
      publication_id: 'e4c3a2f1-7e4a-4e4b-8e4c-9e4d8e4e8e4f',
      user_id: 'u1i2o3p4-a5s6-d7f8-g9h0-j1k2l3m4n5b',
      content: 'La tecnología transforma: ¡Somos testigos del cambio!',
    },
    {
      id: 'c8b72a43-10a1-4e81-8e42-6ac654aaefd2',
      publication_id: 'f1e2d3c4-5298-4c23-ba75-6d98e9c7f8a0',
      user_id: 'c5v6b7n8-m9q0-w1e2-r3t4-y5u6i7o8p9a',
      content: 'Simplifica la complejidad: Nada como simplificar la vida.',
    },
    {
      id: '59a903e1-7d33-4e16-8543-59e3ab1ab6c0',
      publication_id: 'b9a8c7d6-af21-4b3e-8cd9-7ef6ab8cd9ef',
      user_id: 's5d6f7g8-h9j0-k1l2-z3x4-c5v6b7n8m9q',
      content: 'Código y creación: Programando maravillas, ¿no?',
    },
    {
      id: '7aef2bc5-2b16-4059-9ce5-cac3c9ff25c1',
      publication_id: 'd8e9f0a1-526c-4e82-b4a1-589c7d8e9f0a',
      user_id: 'w5e6r7t8-y9u0-i1o2-p3a4-s5d6f7g8h9j',
      content: 'Aprende, adapta, evoluciona: Esa es la clave, bro.',
    },
    {
      id: 'a47c0da3-418e-4f2f-879e-e776c8d7bcca',
      publication_id: 'c9b8a7d6-43ef-4c2b-9a1f-8d7e6c5b4a3',
      user_id: 'k5l6z7x8-c9v0-b1n2-m3q4-w5e6r7t8y9u',
      content: 'La imaginación es el límite: ¡A soñar sin límites!',
    },
    {
      id: '492f90e7-af94-4a2d-9db2-913ad987f7b1',
      publication_id: 'b0c1d2e3-4567-4e98-9f87-6543c2b1a0d9',
      user_id: 'i5o6p7a8-s9d0-f1g2-h3j4-k5l6z7x8c9v',
      content: 'Crear el futuro: ¡El visionario del grupo!',
    },
    {
      id: 'b8dd6742-7084-4c81-983f-66733e635810',
      publication_id: 'e1d2c3b4-7856-4e12-a456-789f0e1d2c3b',
      user_id: 'b5n6m7q8-w9e0-r1t2-y3u4-i5o6p7a8s9d',
      content: 'La máquina es neutra: Menos drama, más ciencia.',
    },
    {
      id: '89b8a746-3c4a-4860-9d48-083fd1f3aa7a',
      publication_id: 'f2e3d4c5-1032-4a7e-8c9d-6e5f4d3c2b1',
      user_id: 'f5g6h7j8-k9l0-z1x2-c3v4-b5n6m7q8w9e',
      content: 'Bits y átomos: Del digital al físico.',
    },
    {
      id: '4cc3ec9b-c0d3-4400-b9d4-132b58b244b2',
      publication_id: 'a1b2c3d4-ebfd-4a3c-8f9d-7e6b5a4c3d2',
      user_id: 'r5t6y7u8-i9o0-p1a2-s3d4-f5g6h7j8k9l',
      content: 'Programa tu mundo: ¡Código mágico en acción!',
    },
    {
      id: '77a0d00f-5d04-47c9-96d5-1aa7b4bf5ec6',
      publication_id: 'b1c2d3e4-5678-4e12-9a8b-7c6d5e4f3g2',
      user_id: 'v5b6n7m8-q9w0-e1r2-t3y4-u5i6o7p8a9s',
      content: 'Virtualidad real: Realidad con toque futurista.',
    },
    {
      id: 'c840df88-05a0-41a2-b620-5998e7e07b57',
      publication_id: 'c1d2e3f4-2198-4b6e-8d7a-6c5f4e3d2c1',
      user_id: 'd5f6g7h8-j9k0-l1z2-x3c4-v5b6n7m8q9w',
      content: 'Construye con código: Arquitecto digital, ¿eh?',
    },
    {
      id: 'a685b09b-7396-47b4-8327-9181ec7bf943',
      publication_id: 'e1f2a3b4-6789-4c12-b3e4-5678d9e0f1a2',
      user_id: 'e5r6t7y8-u9i0-o1p2-a3s4-d5f6g7h8j9k',
      content: 'La tecnología humaniza: ¡Humanos + tecnología = amor!',
    },
    {
      id: '994ebd76-055d-471b-9c6b-c96c1e0e31e4',
      publication_id: 'a2b3c4d5-1234-4a56-8b97-6c58d9e0f1a2',
      user_id: 'l5z6x7c8-v9b0-n1m2-q3w4-e5r6t7y8u9i',
      content: 'Datos, la nueva moneda: Vale más que el oro ahora.',
    },
    {
      id: '4d71e8b6-3ef6-45a0-8aef-29c59c45e0a1',
      publication_id: 'c3d4e5f6-4567-4c23-ba75-6d98e9c7f8a0',
      user_id: 'm5q6w7e8-r9t0-y1u2-i3o4-p5a6s7d8f9g',
      content: 'Hazlo posible: ¡Nada es imposible, colega!',
    },
    {
      id: '15de1f9e-47a4-46ed-bc27-651e2297ecbf',
      publication_id: 'a4b5c6d7-5678-4e12-9a8b-7c6d5e4f3g2',
      user_id: 'h5j6k7l8-z9x0-c1v2-b3n4-m5q6w7e8r9t',
      content: 'Automatiza y prospera: ¡Robots, háganlo por mí!',
    },
    {
      id: 'cf6a41fb-5ee9-4da6-80c6-90d1806d8fa1',
      publication_id: 'e8f9a0b1-5678-4e12-9a8b-7c6d5e4f3g2',
      user_id: 'y5u6i7o8-p9a0-s1d2-f3g4-h5j6k7l8z9x',
      content: 'Internet: la red global: Mi adicción diaria, jaja.',
    },
    {
      id: '79ce22f2-c4c0-48a9-8b24-95a4488f76f5',
      publication_id: 'a0b1c2d3-3456-4a23-b4c5-6d7e8f9a0b1',
      user_id: 'c5v6b7n8m9-q0w1-e2r3-t4y5-u6i7o8p9a0s',
      content: 'Crea el cambio: ¡Líder del cambio, presente!',
    },
    {
      id: '7bb0d138-9353-4fb0-8e76-c841c5fcbe6b',
      publication_id: 'c2d3e4f5-4567-4c23-ba75-6d98e9c7f8a0',
      user_id: 'd5f6g7h8j9-k0l1-z2x3-c4v5-b6n7m8q9w0',
      content: 'Diseña el mañana: Futurista en acción, ¿no?',
    },
    {
      id: '7e15cafa-7fe1-4bcf-bf16-e34d762c647d',
      publication_id: 'e4f5a6b7-5678-4e12-9a8b-7c6d5e4f3g2',
      user_id: 'e5r6t7y8u9-i0o1-p2a3-s4d5-f6g7h8j9k0l',
      content: 'Velocidad y progreso: ¡A toda velocidad hacia el éxito!',
    },
    {
      id: '77d89f94-0832-417d-9157-0b0fe5b3c464',
      publication_id: 'a7b8c9d0-5678-4e12-9a8b-7c6d5e4f3g2',
      user_id: 'q5w6e7r8t9-y0u1-i2o3-p4a5-s6d7f8g9h0j',
      content: 'Conocimiento en línea: Google es mi profe, jaja.',
    },
    {
      id: 'b7ea419a-b687-44e3-b662-5c61e080aecc',
      publication_id: 'c9d0e1f2-5678-4c23-ba75-6d98e9c7f8a0',
      user_id: 'k5l6z7x8c9-v0b1-n2m3-q4w5-e6r7t8y9u0i',
      content: 'Empodera con tecnología: ¡Eres el jefe de la tecnología!',
    },
    {
      id: 'a49edf99-74da-4ca4-a785-5e3621ee5a2b',
      publication_id: 'a0b1c2d3-5678-4e12-9a8b-7c6d5e4f3g2',
      user_id: 'o5p6a7s8-d9f0-g1h2-j3k4-l5z6x7c8v9b0n',
      content: 'Conectados siempre: Siempre online, nunca offline.',
    },
    {
      id: '3b6e7763-5b6b-44f7-80a5-2e7f5e301cc3',
      publication_id: 'c2d3e4f5-5678-4c23-ba75-6d98e9c7f8a0',
      user_id: 'm5q6w7e8r9-t0y1-u2i3-o4p5-a6s7d8f9g0h',
      content: 'Algoritmos que guían: ¡Matemágico en acción!',
    },
    {
      id: '64fb83ac-d880-4da1-bca6-ea637539bf0a',
      publication_id: 'e4f5a6b7-5678-4e12-9a8b-7c6d5e4f3g2',
      user_id: 'n5b6m7q8w9-e0r1-t2y3-u4i5-o6p7a8s9d0f',
      content: 'Tecnología = Oportunidad: ¡Futuro millonario en camino!',
    },
    {
      id: 'e345d40c-3ea3-45d3-ba34-e6f3dd189f08',
      publication_id: 'a7b8c9d0-5678-4e12-9a8b-7c6d5e4f3g2',
      user_id: 'g5h6j7k8-l9z0-x1c2-v3b4-n5m6-q7w8e9r0t',
      content: 'Herramienta de posibilidades: La navaja suiza del siglo XXI.',
    },
    {
      id: '9990b0ea-699d-46f1-949b-7433e070a868',
      publication_id: 'e1f2a3b4-5678-4e12-9a8b-7c6d5e4f3g2',
      user_id: 'e5r6t7y8u9-i0o1-p2a3-s4d5-f6g7h8j9k0l',
      content:
        'Realidad virtual, futuro presente: ¡Estamos en el futuro, amigo!',
    },
    {
      id: '74248a46-0ea7-4cbf-ae81-178f14606557',
      publication_id: 'c2d3e4f5-5678-4c23-ba75-6d98e9c7f8a0',
      user_id: 'q5w6e7r8t9-y0u1-i2o3-p4a5-s6d7f8g9h0j',
      content: 'Máquinas y humanos: ¿Aliados o rivales?',
    },
    {
      id: '0a6eaf6f-81c9-4c34-9f8f-2cc99dd7751a',
      publication_id: 'e4f5a6b7-5678-4e12-9a8b-7c6d5e4f3g2',
      user_id: 'k5l6z7x8c9-v0b1-n2m3-q4w5-e6r7t8y9u0i',
      content: 'Diseño y función: ¡El estilo importa, pero funciona más!',
    },
    {
      id: '571b636f-e20e-40f9-91d2-856d7bf3161a',
      publication_id: 'a7b8c9d0-5678-4e12-9a8b-7c6d5e4f3g2',
      user_id: 'o5p6a7s8-d9f0-g1h2-j3k4-l5z6x7c8v9b0n',
      content: 'Redes cambian todo: ¡Adiós privacidad, hola redes!',
    },
    {
      id: '61426a5b-3e12-48f1-af44-13bc3b48e0ad',
      publication_id: 'c1d2e3f4-5678-4c23-ba75-6d98e9c7f8a0',
      user_id: 'm5q6w7e8r9-t0y1-u2i3-o4p5-a6s7d8f9g0h',
      content: 'Evolución digital constante: ¡Nunca te quedes atrás!',
    },
    {
      id: 'f9f9751d-d95b-439c-91db-28916d0799ad',
      publication_id: 'e1f2a3b4-5678-4e12-9a8b-7c6d5e4f3g2',
      user_id: 'g5h6j7k8-l9z0-x1c2-v3b4-n5m6-q7w8e9r0t',
      content: 'Inteligencia artificial: ¿Amiga o enemiga?',
    },
    {
      id: '6a260bb3-d1b2-4482-8789-911d698b7536',
      publication_id: 'c4d5e6f7-5678-4c23-ba75-6d98e9c7f8a0',
      user_id: 'e5r6t7y8u9-i0o1-p2a3-s4d5-f6g7h8j9k0l',
      content: 'Ciberseguridad esencial: ¡Protege tus datos, protege tu vida!',
    },
    {
      id: '98fb2c4e-bf59-46ab-8d30-74e54f2760c7',
      publication_id: 'e7f8a9b0-5678-4e12-9a8b-7c6d5e4f3g2',
      user_id: 'q5w6e7r8t9-y0u1-i2o3-p4a5-s6d7f8g9h0j',
      content: 'Nanotecnología impactante: ¡Lo pequeño puede ser poderoso!',
    },
    {
      id: '578ed2af-3c4e-4e76-b23a-6eac6fba5227',
      publication_id: 'a1b2c3d4-5678-4e12-9a8b-7c6d5e4f3g2',
      user_id: 'k5l6z7x8c9-v0b1-n2m3-q4w5-e6r7t8y9u0i',
      content: 'Biología y tecnología: ¡Creando vida en el laboratorio!',
    },
    {
      id: 'e872f7ed-d4b8-411a-8bf5-528ba14ad5aa',
      publication_id: 'e1f2a3b4-5678-4e12-9a8b-7c6d5e4f3g2',
      user_id: 'o5p6a7s8-d9f0-g1h2-j3k4-l5z6x7c8v9b0n',
      content: 'Mentes conectadas: ¿Hacia una conciencia compartida?',
    },
    {
      id: 'ea0635b5-dc08-4ac0-bfc0-ead1e46a7b98',
      publication_id: 'c4d5e6f7-5678-4c23-ba75-6d98e9c7f8a0',
      user_id: 'm5q6w7e8r9-t0y1-u2i3-o4p5-a6s7d8f9g0h',
      content: 'Impresión 3D: ¡Materializando tus ideas!',
    },
    {
      id: '9a6de7c9-682f-46fe-8e4d-e7e820869c86',
      publication_id: 'e7f8a9b0-5678-4e12-9a8b-7c6d5e4f3g2',
      user_id: 'g5h6j7k8-l9z0-x1c2-v3b4-n5m6-q7w8e9r0t',
      content: 'Explorando el espacio cibernético: ¡La última frontera!',
    },
  ],
};
