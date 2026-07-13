import ShareIcon from '../../assets/icons/ShareIcon.jsx';
import { useModal } from '../../context/ModalContext.jsx';
import './JobCard.scss';

export default function JobCard({ job }) {
  const { openMoreInfo, openShare } = useModal();

  return (
    <article className="job-card card">
      <h3 className="job-card-title text-primary">{job.title}</h3>

      <p className="job-card-field">
        <span className="bold">Location:</span> {job.location}
      </p>
      <p className="job-card-field">
        <span className="bold">Department:</span> {job.department}
      </p>
      <p className="job-card-field">
        <span className="bold">Seniority:</span> {job.seniority}
      </p>

      <div className="job-card-actions">
        <button type="button" className="job-card-action" onClick={() => openMoreInfo(job)}>
          More Info
        </button>
        <button type="button" className="job-card-action" onClick={() => openShare(job)}>
          Share
        </button>
      </div>
    </article>
  );
}