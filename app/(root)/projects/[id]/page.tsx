import { getProjectById } from "@/actions/projects";
import { notFound } from "next/navigation";
import ProjectDetails from "@/components/shared/projectDetails";

interface ProjectPageProps {
    params: Promise<{
        id: string
    }>
}

export default async function Projectpage({
    params,
}: ProjectPageProps) {
    const {id} = await params;

    const project = await getProjectById(id);

    if(!project) {
        notFound()
    }

    return <ProjectDetails project={project} />
}