import Benefit from "./Benefit";
import PodcastIcon from "./Podcasticon";
import {ArrowIcon} from "../icons/Icons";

export default function PlanCard({ plan }) {
  const { name, price, period, benefits, podcast, btn, free } = plan;

  return (
    <div className="plan-card border rounded-lg d-flex flex-column">
      <div className="plan-header">
        <p className="plan-name text-secondary">{name}</p>
        <p className="plan-price text-primary">{price}</p>
        {period && <p className="plan-period text-muted">{period}</p>}
      </div>
      {free ? (
        <div className="plan-free-text d-flex justify-center items-start">
          <span >You can sign up for free!</span>
        </div>
      ) : (
        <>
          <div className="plan-benefits border-top">
            {benefits.map((b) => (
              <Benefit  icon={b.icon} label={b.label} />
            ))}
          </div>

          
          {podcast.length > 0 && (
            <div className="plan-podcasts border-top">
              <p className="plan-podcasts-title text-primary">
                Included podcast{podcast.length > 1 ? "s" : ""}
              </p>
              <div className="plan-podcasts-row d-flex items-center justify-center">
                {podcast.map((p) => (
                  <PodcastIcon key={p} type={p} />
                ))}
                <ArrowIcon/>
              </div>
            </div>
          )}
        </>
      )}

      <button className="plan-button btn-primary">{btn}</button>
    </div>
  );
}