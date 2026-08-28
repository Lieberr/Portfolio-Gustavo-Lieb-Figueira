import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  // Limpa os dados existentes
  await prisma.projectTechnology.deleteMany();
  await prisma.projectFeature.deleteMany();
  await prisma.project.deleteMany();
  await prisma.technology.deleteMany();

  for (const project of sampleData.projects) {
    // 1. Cria/reutiliza as tecnologias
    const technologies = [];

    for (const technology of project.technologies) {
      const tech = await prisma.technology.upsert({
        where: {
          slug: technology.slug,
        },
        update: {
          name: technology.name,
        },
        create: {
          name: technology.name,
          slug: technology.slug,
        },
      });

      technologies.push(tech);
    }

    // 2. Cria o projeto
    const createdProject = await prisma.project.create({
      data: {
        num: project.num,
        tag: project.tag,
        title: project.title,
        subtitle: project.subtitle,
        description: project.description,
        github: project.github ?? null,
        demo: project.demo ?? null,
        accent: project.accent,
        featured: project.featured,

        // 3. Cria as features
        features: {
          create: project.features.map((feature) => ({
            feature,
          })),
        },

        // 4. Cria os relacionamentos com Technology
        technologies: {
          create: technologies.map((technology) => ({
            technologyId: technology.id,
          })),
        },
      },
    });

    console.log(`✅ Created project: ${createdProject.title}`);
  }

  console.log("🎉 Database seeded successfully!");
}

main()
  .catch((error) => {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });