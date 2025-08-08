import Layout from '../components/Layout';
import Link from 'next/link';

export default function About() {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>Brief bio or introduction here.</p>
      <h2>Documents</h2>
      <ul>
        <li><a href="/resume.pdf" target="_blank">Resume (PDF)</a></li>
      </ul>
      <h2>Links</h2>
      <ul>
        <li><Link href="https://github.com/yourusername">GitHub</Link></li>
        <li><Link href="https://linkedin.com/in/yourusername">LinkedIn</Link></li>
      </ul>
    </Layout>
  );
}