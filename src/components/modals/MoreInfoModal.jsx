import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import LocationIcon from '../../assets/icons/LocationIcon.jsx';
import DepartmentIcon from '../../assets/icons/DepartmentIcon.jsx';
import SeniorityIcon from '../../assets/icons/SeniorityIcon.jsx';
import { useModal } from '../../context/ModalContext.jsx';
import './Modals.scss';

export default function MoreInfoModal({ job, onClose }) {
  const { openShare } = useModal();

  useEffect(() => {
    const onKeyDown = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div className="modal-card card">
          <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>

          <h2 className="modal-title text-primary">{job.title}</h2>
          <p className="modal-summary text-muted">{job.summary}</p>

          <div className="modal-meta">
            <span className="modal-meta-item">
             <LocationIcon />
              <span>{job.location}</span>
            </span>
            <span className="modal-meta-item">
              <DepartmentIcon />
              <span>{job.department}</span>
            </span>
            <span className="modal-meta-item">
              <SeniorityIcon />
              <span>{job.seniority}</span>
            </span>
          </div>

          <div className="modal-section">
            <h3>About the role</h3>
            <p>{job.description}</p>
          </div>

          {job.responsibilities?.length > 0 && (
            <div className="modal-section">
              <h3>Responsibilities</h3>
              <ul>
                {job.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {job.requirements?.length > 0 && (
            <div className="modal-section">
              <h3>Requirements</h3>
              <ul>
                {job.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-actions">
            <button type="button" className="btn-primary" onClick={onClose}>
              Recommend a friend
            </button>
            <button type="button" className="btn-primary" onClick={() => openShare(job)}>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}