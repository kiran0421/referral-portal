import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import JobCard from './JobCard.jsx';
import './HotJobsCarousel.scss';

export default function HotJobsCarousel({ jobs }) {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = () => {
    const track = trackRef.current;
    if (!track) return;
    setCanScrollLeft(track.scrollLeft > 4);
    setCanScrollRight(
      track.scrollLeft + track.clientWidth < track.scrollWidth - 4
    );
  };

  useEffect(() => {
    updateArrows();
    const track = trackRef.current;
    if (!track) return undefined;
    track.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      track.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, [jobs]);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.job-card');
    const amount = card ? card.offsetWidth + 20 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * amount, behavior: 'smooth' });
  };

  return (
    <section className="hot-jobs eoe-container">
      <div className="hot-jobs-header">
        <h2>Hot Jobs</h2>
        <button
           type="button"
           className="view-all-btn"
         >
        View all jobs
        </button>
      </div>

      <div className="hot-jobs-carousel">
        <button
          type="button"
          className="hot-jobs-arrow hot-jobs-arrow-left"
          onClick={() => scrollByCard(-1)}
          disabled={!canScrollLeft}
          aria-label="Scroll hot jobs left"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="hot-jobs-track" ref={trackRef}>
          {jobs.map((job) => (
            <div className="hot-jobs-slide" key={job.id}>
              <JobCard job={job} />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="hot-jobs-arrow hot-jobs-arrow-right"
          onClick={() => scrollByCard(1)}
          disabled={!canScrollRight}
          aria-label="Scroll hot jobs right"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}