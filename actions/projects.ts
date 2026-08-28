'use server';

import { prisma } from "@/lib/prisma";
import { ProjectTechnology } from "@prisma/client";

interface ProjectTechnologyInput {
    name: string;
    slug: string;
};

interface CreateProjectInput {
    num: number;
    tag: string;
    title: string;
    subtitle: string;
    description: string;
    github?: string | null;
    demo?: string | null;
    accent: string;
    featured?: boolean;
    features: string[];
    technologies: ProjectTechnologyInput[];
}

interface UpdateProjectInput {
    num: number;
    tag: string;
    title: string;
    subtitle: string;
    description: string;
    github?: string | null;
    demo?: string | null;
    accent: string;
    featured?: boolean;
    features: string[];
    technologies: ProjectTechnologyInput[];
}

// Get all projects
export async function getAllProjects() {
    try {
        const projects = await prisma.project.findMany({
            orderBy: {
                num: 'asc'
            },
            include: {
                features: true,
                technologies: {
                    include: {
                        technology: true
                    }
                }
            }
        })

        return projects;

    } catch (error) {
        console.error("Error fetching projects:", error);

        throw new Error("Failed to fetch projects");
    }
}

//Get project by id
export async function getProjectById(id: string) {
    try {
        const project = await prisma.project.findUnique({
            where: {
                id
            },
            include: {
                features: true,
                technologies: {
                    include: {
                        technology: true
                    }
                }
            }
        })

        return project;
        
    } catch (error) {
        console.error("Error fetching project:", error); 
        
        throw new Error("Failed to fetch project");
    }
}