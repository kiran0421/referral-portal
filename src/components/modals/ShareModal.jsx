import { X, Link2, Check, Mail } from 'lucide-react';
import './Modals.scss';

function buildJobUrl(job) {
  return window.location.href;
}

export default function ShareModal({ job, onClose }) {
  const [copied, setCopied] = useState(false);
  const jobUrl = useMemo(() => buildJobUrl(job), [job]);
  const shareText = `Check out this opening: ${job.title} (${job.location})`;

  useEffect(() => {
    const onKeyDown = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: job.title, text: shareText, url: jobUrl });
      } catch {
      }
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(jobUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const shareLinks = [
    { label: 'WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${jobUrl}`)}` },
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(jobUrl)}` },
    { label: 'X / Twitter', href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(jobUrl)}` },
  ];

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div className="modal-card card modal-card-sm">
          <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>

          <h2 className="modal-title text-primary">Share this role</h2>
          <p className="modal-summary text-muted">
            {job.title} &middot; {job.location}
          </p>

          <div className="share-link-row">
            <input
              className="share-link-input"
              type="text"
              readOnly
              value={jobUrl}
              onFocus={(e) => e.target.select()}
            />
            <button type="button" className="btn-primary btn-sm" onClick={handleCopy}>
              {copied ? <Check size={16} /> : <Link2 size={16} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

          <div className="share-options">
            {shareLinks.map((option) => (
              <a
                key={option.label}
                className="share-option badge-pill"
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {option.label}
              </a>
            ))}
            <a
              className="share-option badge-pill"
              href={`mailto:?subject=${encodeURIComponent(job.title)}&body=${encodeURIComponent(`${shareText} ${jobUrl}`)}`}
            >
              <Mail size={12} /> Email
            </a>
          </div>

          {typeof navigator !== 'undefined' && navigator.share && (
            <button type="button" className="btn w-100 mt-4" onClick={handleNativeShare}>
              More sharing options
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 