const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const products = [
  {
    title: "Dobok Infantil",
    slug: "dobok-infantil",
    description: "Uniforme de Taekwondo leve e confortável para crianças.",
    price: 129.90,
    images: ["https://raw.githubusercontent.com/DavyDevcosmo/tkd-shop/master/public/img/AboutUsSection2.jpg"],
    category: "DOBOK"
  },
  {
    title: "Dobok Adulto",
    slug: "dobok-adulto",
    description: "Uniforme de Taekwondo leve e confortável para crianças.",
    price: 129.90,
    images: ["https://raw.githubusercontent.com/DavyDevcosmo/tkd-shop/master/public/img/dobok-masculinp.jpg"],
    category: "DOBOK"
  },
  {
    title: "Faixa Amarela",
    slug: "faixa-amarela-ponta-verde",
    description: "Faixa de graduação em algodão reforçado.",
    price: 29.90,
    images: ["https://raw.githubusercontent.com/DavyDevcosmo/tkd-shop/master/public/img/faixas-coloridas-2.jpg"],
    category: "TAEKWONDOBELT"
  },
  {
    title: "Faixa Amarela teste de cor",
    slug: "faixa-amarela1",
    description: "Faixa de graduação em algodão reforçado.",
    price: 29.90,
    images: ["https://raw.githubusercontent.com/DavyDevcosmo/tkd-shop/master/public/img/faixas-coloridas.jpeg"],
    category: "TAEKWONDOBELT",
   
  },
  {
    title: "Protetor de Tórax Reversível",
    slug: "protetor-torax",
    description: "Protetor com cores azul/vermelho para treinos e competições.",
    price: 159.00,
    images: ["https://raw.githubusercontent.com/DavyDevcosmo/tkd-shop/master/public/img/kit-proteção-lutas-azul.webp"],
    category: "PROTECTION"
  },
  {
    title: "Protetor ",
    slug: "protetor-de-tronco",
    description: "Protetor com cores azul/vermelho para treinos e competições.",
    price: 159.00,
    images: ["https://raw.githubusercontent.com/DavyDevcosmo/tkd-shop/master/public/img/kit-proteção-lutas.webp"],
    category: "PROTECTION"
  },
  {
    title: "Luva de Taekwondo",
    slug: "luva-taekwondo",
    description: "Luva de treino com fechamento em velcro.",
    price: 79.90,
    images: ["https://raw.githubusercontent.com/DavyDevcosmo/tkd-shop/master/public/img/protetor-canela.webp"],
    category: "TAEKWONDO"
  },
  {
    title: "Raquete de Chute Dupla",
    slug: "raquete-chute",
    description: "Ideal para treinar precisão e velocidade dos chutes.",
    price: 89.90,
    images: ["https://raw.githubusercontent.com/DavyDevcosmo/tkd-shop/master/public/img/raquete-de-treino.jpg"],
    category: "TAEKWONDO"
  }
];

async function main() {
  console.log('Start seeding products...');

   await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();

   const categoriesToCreate = [
  { name: "DOBOK" },
  { name: "PROTECTION" },
  { name: "TAEKWONDOBELT" },
  { name: "TAEKWONDO" }
];

  await prisma.category.createMany({
    data: categoriesToCreate,
    skipDuplicates: true,
  });

  console.log('Categories created:', categoriesToCreate.map(c => c.name));
  
  for (const product of products) {
    await prisma.product.create({
      data: {
        name: product.title,
        slug: product.slug,
        description: product.description,
        price: product.price,
          images: {
          create: product.images?.map(url => ({ url })) || []
        },
        category: {
          connect: { name: product.category }
        }
      }
    });
  }

  console.log('Steu certo eu acho.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });