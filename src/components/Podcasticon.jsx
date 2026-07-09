import {MicIcon} from "../icons/Icons";
import {CoffeeIcon} from  "../icons/Icons";

function PodcastIcon({ type }) {
  return (
    <div className={`podcast-icon podcast-icon--${type}`}>
      {type === "mic" ? <MicIcon/> : <CoffeeIcon/>}
    </div>
  );
}
export default PodcastIcon;