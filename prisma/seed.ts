import { PrismaClient } from '@prisma/client';

// Inicializar el Prisma Client
const prisma = new PrismaClient();

async function main() {
  try {
    // Crear dos productos ficticios
    const product1 = await prisma.product.upsert({
      where: { id: 1 }, // Puedes cambiar esto según tus necesidades de búsqueda
      update: {},
      create: {
        name: 'Aliens',
        code: 'ALN001',
        sellingPrice: 19.99,
        stockQuantity: 50,
        expirationDate: new Date('2023-12-31'),
        createdAt: new Date(),
      },
    });

    const product2 = await prisma.product.upsert({
      where: { id: 2 }, // Puedes cambiar esto según tus necesidades de búsqueda
      update: {},
      create: {
        name: 'Vampires',
        code: 'VMP002',
        sellingPrice: 24.99,
        stockQuantity: 30,
        expirationDate: new Date('2023-11-30'),
        createdAt: new Date(),
      },
    });

    // Imprimir los resultados en la consola
    console.log({ product1, product2 });
  } catch (error) {
    console.error(error);
  } finally {
    // Cerrar el Prisma Client al finalizar
    await prisma.$disconnect();
  }
}

// Ejecutar la función principal
main();
