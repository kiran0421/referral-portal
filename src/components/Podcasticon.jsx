import {MicIcon} from "./Icons";
import {CoffeeIcon} from  "./Icons";

function PodcastIcon({ type }) {
  return (
    <div className={`podcast-icon podcast-icon--${type}`}>
      {type === "mic" ? <MicIcon/> : <CoffeeIcon/>}
    </div>
  );
}
export default PodcastIcon;