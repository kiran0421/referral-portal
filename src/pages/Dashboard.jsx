import HotJobsCarousel from '../components/hotjobs/HotJobsCarousel.jsx';
import MyReferrals from '../components/myreferrals/MyReferrals.jsx';
import  jobs  from '../data/jobs.js';
import referrals from '../data/referrals.js';
import './Dashboard.scss';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <section className="dashboard-hero gradient-hero">
  <div className="eoe-container dashboard-hero-inner">
    <h1>Referrals Portal</h1>
  </div>
</section>

      <section className="dashboard-cta">
        <div className="eoe-container dashboard-cta-inner card">
          <p className="bold">Do you know our next employee?</p>
          <button type="button" className="btn-primary">
            Recommend a friend
          </button>
        </div>
      </section>

      <HotJobsCarousel jobs={jobs.filter((job) => job.hot)} />

      <MyReferrals referrals={referrals} />
    </div>
  );
}