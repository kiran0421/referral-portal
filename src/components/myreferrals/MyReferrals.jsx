import React from 'react';
import './MyReferrals.scss';

const STATUS_CLASS = {
  Screening: 'badge-warning',
  Interviewing: 'badge-primary',
  Submitted: 'badge-secondary',
  Hired: 'badge-success',
  'Not a fit': 'badge-danger',
};

export function StatusBadge({ status }) {
  const cls = STATUS_CLASS[status] || 'badge-primary';
  return <span className={`badge ${cls}`}>{status}</span>;
}

export default function MyReferrals({ referrals, limit }) {
  const rows = limit ? referrals.slice(0, limit) : referrals;

  return (
    <section className="my-referrals eoe-container">
      <div className="my-referrals-header">
        <h2>My Referrals</h2>
         <button
    type="button"
    className="view-all-referrals"
  >
    View all referrals
  </button>
      </div>

      <div className="my-referrals-table-wrap card">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Submitted For</th>
              <th>Submission Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((referral) => (
              <tr key={referral.id}>
                <td className="text-heading">{referral.name}</td>
                <td>{referral.submittedFor}</td>
                <td>
                  <StatusBadge status={referral.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}