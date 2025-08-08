import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const projectData: Record<string, { title: string; description: string; }> = {
  'project-one': { title: 'Project One', description: 'Description of project one.' },
  'project-two': { title: 'Project Two', description: 'Description of project two.' },
};

export default function ProjectPage() {
  const { slug } = useRouter().query;
  const project = slug && projectData[slug as string];
  if (!project) return <Layout><p>Project not found.</p></Layout>;
  return (
    <Layout>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </Layout>
  );
}