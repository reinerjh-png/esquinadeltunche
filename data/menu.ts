export type DishTag = "recomendado" | "picante" | "amazonico" | "marino" | "nuevo";

export type DishOption = {
  id: string;
  label: string;
  choices: string[];
  min: number;
  max: number;
};

export type DishVariant = {
  id: string;
  name: string;
  price: number;
};

export type Dish = {
  id: string;
  name: string;
  description?: string;
  price: number | null;
  image?: string;
  tags?: DishTag[];
  options?: DishOption[];
  variants?: DishVariant[];
};

export type Category = {
  id: string;
  name: string;
  icon: string;
  subtitle: string;
  note?: string;
  dishes: Dish[];
};

export const menu: Category[] = [
  // ─── DESAYUNOS ────────────────────────────────────────────────────────────
  {
    id: "desayunos",
    name: "Desayunos",
    icon: "🌿",
    subtitle: "Sabores amazónicos para empezar el día",
    dishes: [
      {
        id: "combito-del-tunche",
        name: "Combito del Tunche",
        description: "Tacacho con juanecito y tu proteína a elegir: cecina ahumada, chorizo artesanal o chicharrón.",
        price: 15,
        image: "/img/dishes/combito-del-tunche.jpg",
        tags: ["recomendado", "amazonico"],
        options: [
          {
            id: "proteina",
            label: "Elige tu proteína",
            choices: ["Cecina ahumada", "Chorizo artesanal", "Chicharrón"],
            min: 1,
            max: 1,
          },
        ],
      },
      {
        id: "juanecito",
        name: "Juanecito",
        description: "Tamal amazónico de arroz con cecina, envuelto en hoja de bijao y cocido a vapor. Sabor auténtico de la selva.",
        price: 5,
        tags: ["amazonico"],
      },
      {
        id: "tacacho-amazonico",
        name: "Tacacho amazónico",
        description: "Plátano verde majado con manteca y la proteína regional que prefieras.",
        price: 14,
        tags: ["amazonico"],
        variants: [
          { id: "cecina", name: "Con cecina", price: 14 },
          { id: "chorizo", name: "Con chorizo", price: 14 },
          { id: "chicharron", name: "Con chicharrón", price: 16 },
        ],
      },
      {
        id: "tacacho-combinado",
        name: "Tacacho combinado",
        description: "Tacacho con 2 presas a elección entre cecina, chorizo y chicharrón.",
        price: 18,
        tags: ["amazonico"],
        options: [
          {
            id: "presas",
            label: "Elige 2 presas",
            choices: ["Cecina ahumada", "Chorizo artesanal", "Chicharrón"],
            min: 2,
            max: 2,
          },
        ],
      },
      {
        id: "tacacho-mixto",
        name: "Tacacho mixto",
        description: "La versión completa: tacacho con 3 presas a elección. Para el hambre de la selva.",
        price: 22,
        tags: ["amazonico"],
        options: [
          {
            id: "presas",
            label: "Elige 3 presas",
            choices: ["Cecina ahumada", "Chorizo artesanal", "Chicharrón"],
            min: 3,
            max: 3,
          },
        ],
      },
    ],
  },

  // ─── POKÉ BOWLS ───────────────────────────────────────────────────────────
  {
    id: "poke-bowls",
    name: "Poké Bowls",
    icon: "🥗",
    subtitle: "Frescos, ligeros y armados a tu gusto",
    note: "Arma tu bowl a tu gusto — ingredientes y opciones se actualizarán pronto.",
    dishes: [
      {
        id: "poke-bowl",
        name: "Poké Bowl \"Arma el tuyo\"",
        description: "Crea tu bowl personalizado eligiendo base, proteína, toppings y salsa al gusto.",
        price: 16,
        tags: ["nuevo", "marino"],
        options: [
          {
            id: "base",
            label: "Elige tu base",
            choices: ["Arroz blanco", "Arroz integral", "Quinua"],
            min: 1,
            max: 1,
          },
          {
            id: "proteina",
            label: "Elige tu proteína",
            choices: ["Salmón", "Atún", "Langostinos", "Tofu"],
            min: 1,
            max: 1,
          },
          {
            id: "toppings",
            label: "Elige toppings (hasta 3)",
            choices: ["Aguacate", "Edamame", "Pepino", "Zanahoria", "Cebolla morada", "Mango"],
            min: 1,
            max: 3,
          },
          {
            id: "salsa",
            label: "Elige tu salsa",
            choices: ["Teriyaki", "Spicy Mayo", "Ponzu", "Sesame"],
            min: 1,
            max: 1,
          },
        ],
      },
    ],
  },

  // ─── PESCADOS Y MARISCOS ──────────────────────────────────────────────────
  {
    id: "pescados-mariscos",
    name: "Pescados y Mariscos",
    icon: "🐟",
    subtitle: "Frescura marina con sazón peruana",
    dishes: [
      {
        id: "leche-de-tigre",
        name: "Leche de tigre carretillero",
        description: "Cremosa leche de tigre con trozos de pescado fresco y crujiente chicharrón de pota.",
        price: 20,
        tags: ["marino", "picante"],
      },
      {
        id: "ceviche-barrio",
        name: "Ceviche de barrio",
        description: "Ceviche de pescado con crocante chicharrón de pota, ají amarillo y cebolla morada.",
        price: 24,
        tags: ["marino"],
      },
      {
        id: "causa-de-tigre",
        name: "Causa de tigre",
        description: "Causa rellena con leche de tigre y chicharrón de pota. Fusión limeña con alma marina.",
        price: 22,
        tags: ["marino"],
      },
      {
        id: "causa-acevichada",
        name: "Causa acevichada",
        description: "Causa rellena de palta acompañada de ceviche de pescado fresco al limón.",
        price: 24,
        tags: ["marino"],
      },
      {
        id: "causa-langostinos",
        name: "Causa de langostinos",
        description: "Roll de causa con langostinos frescos, salsa golf y cremosa palta.",
        price: 25,
        tags: ["marino"],
      },
      {
        id: "arroz-mariscos",
        name: "Arroz con mariscos",
        description: "Cremoso arroz con mistura marina y salsa criolla. El mar en cada cucharada.",
        price: 25,
        tags: ["marino"],
      },
      {
        id: "chaufa-mariscos",
        name: "Chaufa de mariscos",
        description: "Arroz frito al wok con mistura marina y maduros fritos. Fusión chifa y mar.",
        price: 22,
        tags: ["marino"],
      },
      {
        id: "chaufa-langostinos",
        name: "Chaufa de langostinos",
        description: "Arroz frito al wok con langostinos y maduros fritos. Sabor intenso y perfumado.",
        price: 25,
        tags: ["marino"],
      },
      {
        id: "chicharron-pescado",
        name: "Chicharrón de pescado",
        description: "Pesca del día crocante, con yucas fritas, chifles dorados y salsa criolla.",
        price: 25,
        tags: ["marino"],
      },
      {
        id: "jalea-mixta",
        name: "Jalea mixta",
        description: "Pesca del día y mistura marina crocante, con yucas fritas, chifles y salsa criolla.",
        price: 30,
        image: "/img/dishes/jalea-mixta.jpg",
        tags: ["marino", "recomendado"],
      },
      {
        id: "chicharron-pota",
        name: "Chicharrón de pota",
        description: "Crocante de pota dorada, con yucas fritas y salsa criolla de la casa.",
        price: 15,
        tags: ["marino"],
      },
      {
        id: "duo-marino",
        name: "Dúo marino",
        description: "Elige 2 opciones del combo marino para compartir o disfrutar solo.",
        price: 30,
        tags: ["marino"],
        options: [
          {
            id: "opciones",
            label: "Elige 2 opciones",
            choices: [
              "Chicharrón de pota",
              "Chicharrón de pescado",
              "Chaufa de mariscos",
              "Arroz con mariscos",
              "Causa rellena",
              "Ceviche clásico",
              "Leche de tigre",
            ],
            min: 2,
            max: 2,
          },
        ],
      },
      {
        id: "trio-marino",
        name: "Trío marino",
        description: "Elige 3 opciones del combo marino. La experiencia completa del mar peruano.",
        price: 40,
        tags: ["marino"],
        options: [
          {
            id: "opciones",
            label: "Elige 3 opciones",
            choices: [
              "Chicharrón de pota",
              "Chicharrón de pescado",
              "Chaufa de mariscos",
              "Arroz con mariscos",
              "Causa rellena",
              "Ceviche clásico",
              "Leche de tigre",
            ],
            min: 3,
            max: 3,
          },
        ],
      },
    ],
  },

  // ─── DE LA CASA ───────────────────────────────────────────────────────────
  {
    id: "de-la-casa",
    name: "De la Casa",
    icon: "🌿",
    subtitle: "Los sabores que cuentan nuestra historia",
    dishes: [
      {
        id: "chaufa-del-tunche",
        name: "Chaufa del Tunche",
        description: "Arroz frito con cecina ahumada, chorizo artesanal, langostinos y un toque de mishquina.",
        price: 25,
        image: "/img/dishes/chaufa-del-tunche.jpg",
        tags: ["recomendado", "amazonico"],
      },
      {
        id: "fetuccini-del-tunche",
        name: "Fetuccini del Tunche",
        description: "Cecina ahumada, chorizo artesanal y langostinos en salsa de la casa sobre fetuccini al dente.",
        price: 25,
        tags: ["amazonico"],
      },
      {
        id: "saltado-del-tunche",
        name: "Saltado del Tunche",
        description: "Cecina ahumada y langostinos flameados al wok, con yucas fritas y patacones dorados.",
        price: 25,
        tags: ["amazonico", "marino"],
      },
      {
        id: "saltado-amazonico",
        name: "Saltado amazónico",
        description: "Cecina ahumada y chorizo regional flameados al wok, con patacones y yucas fritas.",
        price: 25,
        image: "/img/dishes/saltado-amazonico.jpg",
        tags: ["recomendado", "amazonico"],
      },
      {
        id: "ceviche-del-tunche",
        name: "Ceviche del Tunche",
        description: "Pesca local con limón mandarina y leche de tigre amazónica, con yucas fritas y chicharrón de pescado.",
        price: 30,
        image: "/img/dishes/ceviche-del-tunche.jpg",
        tags: ["recomendado", "marino", "amazonico"],
      },
      {
        id: "costillas-bbq",
        name: "Costillas BBQ",
        description: "Costillas de cerdo ahumadas bañadas en salsa BBQ de la casa, con papas nativas doradas.",
        price: 28,
      },
      {
        id: "costillas-maracuya",
        name: "Costillas en miel de maracuyá",
        description: "Costillas ahumadas en salsa de miel de maracuyá, caramelizadas al horno, con papas nativas.",
        price: 28,
        image: "/img/dishes/costillas-maracuya.jpg",
        tags: ["recomendado"],
      },
    ],
  },

  // ─── SALTEADOS AL WOK ─────────────────────────────────────────────────────
  {
    id: "salteados-wok",
    name: "Salteados al Wok",
    icon: "🔥",
    subtitle: "Fuego alto, aroma intenso y mucho sabor",
    dishes: [
      {
        id: "lomo-saltado",
        name: "Lomo saltado",
        description: "200 g de lomo fino salteado con cebolla, tomate y ají amarillo, con papas fritas y arroz.",
        price: 35,
      },
      {
        id: "tallarines-lomo",
        name: "Tallarines saltados de lomo fino",
        description: "Tallarines salteados al wok con lomo fino, verduras crujientes y salsa de soya.",
        price: 35,
      },
      {
        id: "tallarines-pollo",
        name: "Tallarines saltados de pollo",
        description: "Tallarines salteados al wok con pechuga de pollo, verduras y toque de jengibre.",
        price: 22,
      },
      {
        id: "saltado-pollo",
        name: "Saltado de pollo",
        description: "Pollo saltado con cebolla, tomate y ají amarillo, servido con papas fritas y arroz.",
        price: 22,
      },
      {
        id: "chaufa-clasico",
        name: "Chaufa",
        description: "Arroz frito al wok con huevo, cebollita china y la proteína que prefieras.",
        price: 17,
        variants: [
          { id: "pollo", name: "De pollo", price: 17 },
          { id: "cecina", name: "De cecina", price: 20 },
          { id: "chancho", name: "De chancho", price: 20 },
        ],
      },
      {
        id: "chaufa-amazonico",
        name: "Chaufa amazónico",
        description: "Arroz frito con cecina ahumada, chorizo artesanal y chicharrón. Sabores de la selva en un wok.",
        price: 22,
        tags: ["amazonico"],
      },
      {
        id: "chaufa-mar-selva",
        name: "Chaufa mar y selva",
        description: "Lo mejor del mar y la selva en un wok: mariscos y cecina ahumada con arroz frito.",
        price: 25,
        tags: ["marino", "amazonico"],
      },
    ],
  },

  // ─── PASTAS Y AL GRILL ────────────────────────────────────────────────────
  {
    id: "pastas-grill",
    name: "Pastas y al Grill",
    icon: "🍝",
    subtitle: "Pastas cremosas y carnes a la parrilla",
    dishes: [
      {
        id: "fetuccini-alfredo",
        name: "Fetuccini Alfredo",
        description: "Fetuccini al dente en cremosa salsa Alfredo. Elige tu acompañamiento.",
        price: 20,
        variants: [
          { id: "clasico", name: "Clásico", price: 20 },
          { id: "pechuga", name: "Con pechuga al grill", price: 25 },
          { id: "brochetas", name: "Con brochetas de pollo", price: 25 },
          { id: "lomo", name: "Con lomo fino al grill", price: 37 },
        ],
      },
      {
        id: "fetuccini-huancaina",
        name: "Fetuccini a la Huancaína",
        description: "Fetuccini en cremosa salsa huancaína. Elige tu acompañamiento.",
        price: 25,
        variants: [
          { id: "pechuga", name: "Con pechuga al grill", price: 25 },
          { id: "brochetas", name: "Con brochetas de pollo", price: 26 },
          { id: "lomo", name: "Con lomo fino al grill", price: 37 },
        ],
      },
      {
        id: "pechuga-grill",
        name: "Pechuga al grill",
        description: "Jugosa pechuga de pollo a la plancha, sazonada con hierbas frescas.",
        price: 22,
      },
      {
        id: "lomo-grill",
        name: "Lomo fino al grill",
        description: "Corte de lomo fino sellado a la plancha, jugoso y sazonado al punto.",
        price: 35,
      },
      {
        id: "brochetas-pollo",
        name: "Brochetas de pollo",
        description: "Brochetas de pollo marinado a las brasas, doradas y jugosas.",
        price: 24,
      },
    ],
  },

  // ─── DEL BARRIO ───────────────────────────────────────────────────────────
  {
    id: "del-barrio",
    name: "Del Barrio",
    icon: "🍗",
    subtitle: "Antojos contundentes para compartir",
    dishes: [
      // ALITAS
      {
        id: "alitas-personal",
        name: "Alitas Personal",
        description: "6 alitas crocantes con 1 solo sabor a elegir. Perfectas para picar.",
        price: 20,
        tags: ["nuevo"],
        options: [
          {
            id: "sabor",
            label: "Elige 1 sabor",
            choices: ["Lemon Nikkei", "Acevichadas", "BBQ", "Maracuyá", "Mango hot", "Crispi", "Anticucheras"],
            min: 1,
            max: 1,
          },
        ],
      },
      {
        id: "alitas-para-picar",
        name: "Alitas Para picar",
        description: "12 alitas con hasta 3 sabores a elegir. La opción ideal para compartir.",
        price: 35,
        tags: ["recomendado"],
        options: [
          {
            id: "sabores",
            label: "Elige hasta 3 sabores",
            choices: ["Lemon Nikkei", "Acevichadas", "BBQ", "Maracuyá", "Mango hot", "Crispi", "Anticucheras"],
            min: 1,
            max: 3,
          },
        ],
      },
      // HAMBURGUESAS
      {
        id: "hamburguesas",
        name: "Hamburguesas",
        description: "Elige tu favorita, preparada al momento y servida en pan artesanal.",
        price: 15,
        variants: [
          { id: "clasica", name: "Clásica", price: 16 },
          { id: "doble", name: "Doble", price: 27 },
          { id: "palteada", name: "Palteada", price: 17 },
          { id: "hawaiana", name: "Hawaiana", price: 18 },
          { id: "a-lo-pobre", name: "A lo pobre", price: 18 },
          { id: "crispi", name: "Crispi", price: 15 },
        ],
      },
      // SALCHIPAPAS
      {
        id: "salchipapas",
        name: "Salchipapas",
        description: "Papas nativas doradas con la combinación que más te provoque.",
        price: 16,
        tags: ["amazonico"],
        variants: [
          { id: "clasica", name: "Clásica", price: 16 },
          { id: "parrillera", name: "Parrillera", price: 18 },
          { id: "amazonica", name: "Amazónica", price: 20 },
          { id: "crispi", name: "Crispi Chicken", price: 18 },
        ],
      },
    ],
  },
];


