import Benefit from "./Benefit";
import PodcastIcon from "./Podcasticon";
import {ArrowIcon} from "./icons";

export default function PlanCard({ plan }) {
  const { name, price, period, benefits, podcast, btn, free } = plan;

  return (
    <div className="plan-card">
      <div className="plan-header">
        <p className="plan-name">{name}</p>
        <p className="plan-price">{price}</p>
        {period && <p className="plan-period">{period}</p>}
      </div>
      {free ? (
        <div className="plan-free-text">
          <span >You can sign up for free!</span>
        </div>
      ) : (
        <>
          <div className="plan-benefits">
            {benefits.map((b) => (
              <Benefit  icon={b.icon} label={b.label} />
            ))}
          </div>

          
          {podcast.length > 0 && (
            <div className="plan-podcasts">
              <p className="plan-podcasts-title">
                Included podcast{podcast.length > 1 ? "s" : ""}
              </p>
              <div className="plan-podcasts-row">
                {podcast.map((p) => (
                  <PodcastIcon key={p} type={p} />
                ))}
                <ArrowIcon/>
              </div>
            </div>
          )}
        </>
      )}

      <button className="plan-button">{btn}</button>
    </div>
  );
}