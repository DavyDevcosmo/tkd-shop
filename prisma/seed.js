const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const products = [
  {
    title: "Dobok Infantil",
     "slug": "dobok-infantil",
    description: "Uniforme de Taekwondo leve e confortável para crianças.",
    price: 129.90,
    images: ["/images/dobok-infantil.jpg"],
    category: "Doboks"
  },
  {
    title: "Faixa Amarela",
    "slug": "faixa-amarela",
    description: "Faixa de graduação em algodão reforçado.",
    price: 29.90,
    images: ["/images/faixa-amarela.jpg"],
    category: "Faixas"
  },
  {
    title: "Protetor de Tórax Reversível",
    "slug": "protetor-torax",
    description: "Protetor com cores azul/vermelho para treinos e competições.",
    price: 159.00,
    images: ["/images/protetor-torax.jpg"],
    category: "Proteções"
  },
  {
    title: "Luva de Taekwondo",
    "slug": "luva-taekwondo",
    description: "Luva de treino com fechamento em velcro.",
    price: 79.90,
    images: ["/images/luva.jpg"],
    category: "Equipamentos"
  },
  {
    title: "Raquete de Chute Dupla",
    "slug": "raquete-chute",
    description: "Ideal para treinar precisão e velocidade dos chutes.",
    price: 89.90,
    images: ["/images/raquete-chute.jpg"],
    category: "Acessórios"
  }
];

async function main() {
  console.log('Start seeding products...');
  
  for (const product of products) {
    await prisma.product.create({
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        images: product.images,
        category: "Infantil",
        
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
