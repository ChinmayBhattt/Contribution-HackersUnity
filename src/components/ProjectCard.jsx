import { ExternalLink, Code2, ArrowUp } from 'lucide-react';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  const getBadge = () => {
    switch (project.badge) {
      case 'winner':
        return <span className="badge badge-winner">🏆 Winner</span>;
      case 'editors-pick':
        return <span className="badge badge-new">✨ Editor&apos;s Pick</span>;
      case 'most-upvoted':
        return <span className="badge badge-hot">🔥 Most Upvoted</span>;
      default:
        return null;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        {getBadge()}
        <div className={styles.upvotes}>
          <ArrowUp size={14} />
          <span>{project.upvotes}</span>
        </div>
      </div>

      <h3 className={styles.title}>{project.name}</h3>
      <p className={styles.team}>{project.team}</p>
      <p className={styles.description}>{project.description}</p>

      <div className={styles.techStack}>
        {project.techStack.map((tech) => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>

      <div className={styles.hackathon}>
        <span className={styles.hackathonLabel}>Built at</span>
        <span className={styles.hackathonName}>{project.hackathon}</span>
      </div>

      <div className={styles.links}>
        <a href={project.github} className={styles.link} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
          <Code2 size={16} />
          <span>Code</span>
        </a>
        <a href={project.demo} className={styles.link} target="_blank" rel="noopener noreferrer" aria-label="View demo">
          <ExternalLink size={16} />
          <span>Demo</span>
        </a>
      </div>
    </div>
  );
}
