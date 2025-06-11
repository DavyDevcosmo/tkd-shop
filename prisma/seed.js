const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const products = [
  {
    name: "Dobok Infantil",
    slug: "dobok-infantil",
    description: "Uniforme de Taekwondo leve e confortável para crianças.",
    price: 129.90,
    images: ["https://raw.githubusercontent.com/DavyDevcosmo/tkd-shop/master/public/img/cadastro2.png"],
    category: "Doboks"
  },
  {
    name: "Faixa Amarela",
    slug: "faixa-amarela",
    description: "Faixa de graduação em algodão reforçado.",
    price: 29.90,
    images: ["https://raw.githubusercontent.com/DavyDevcosmo/tkd-shop/master/public/img/dobok.jpg"],
    category: "Faixas"
  },
  {
    name: "Protetor de Tórax Reversível",
    slug: "protetor-torax",
    description: "Protetor com cores azul/vermelho para treinos e competições.",
    price: 159.00,
    images: ["https://raw.githubusercontent.com/DavyDevcosmo/tkd-shop/master/public/img/cadastro2.png"],
    category: "Proteções"
  },
  {
    name: "Luva de Taekwondo",
    slug: "luva-taekwondo",
    description: "Luva de treino com fechamento em velcro.",
    price: 79.90,
    images: ["https://raw.githubusercontent.com/DavyDevcosmo/tkd-shop/master/public/img/dobok.jpg"],
    category: "Equipamentos"
  },
  {
    name: "Raquete de Chute Dupla",
    slug: "raquete-chute",
    description: "Ideal para treinar precisão e velocidade dos chutes.",
    price: 89.90,
    images: ["https://raw.githubusercontent.com/DavyDevcosmo/tkd-shop/master/public/img/dobok.jpg"],
    category: "Acessórios"
  }
];

async function main() {
  console.log('Start seeding products...');
  
  for (const product of products) {
    await prisma.product.create({
      data: {
        name: product.name, 
        slug: product.slug, 
        description: product.description,
        price: product.price,
        images: product.images,
        category: product.category, 
      }
    });
  }

  console.log('Seed finalizado com sucesso!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });