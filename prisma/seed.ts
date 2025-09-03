import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  // // ... you will write your Prisma Client queries here
  // const emailsData = await prisma.user.createMany({
  //   data: Array.from({ length: 10 }, () => {
  //     return {
  //       email: faker.internet.email(),
  //       name: faker.internet.displayName(),
  //     };
  //   }),
  // });

  // return emailsData;

  const todoData = await prisma.todo.createMany({
    data: Array.from({ length: 10 }, () => {
      return {
        title: faker.lorem.text(),
        body: faker.lorem.paragraph(),
      };
    }),
  });
  return todoData;
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
