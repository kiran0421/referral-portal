import Plancard from "./Plancard";
import plans from "../data/plans";
import { MailIcon ,ChartIcon } from "../icons/Icons";
function Joinclub(){
    const icons = {
    mail: <MailIcon />,
    chart: <ChartIcon />
  };
    return(
        <>
        <div className="join-club rounded-xl">
            <h1 className="join-club-title text-primary">Join our club</h1>
            <p className="join-club-subtitle text-secoundary">Subscribe today for acces to special members-only benefits</p>
            <div className="plan-grid d-flex flex-wrap justify-center">
                {plans.map((plan)=>(
                    <Plancard key={plan.name} plan={plan}/>
                ))}
            </div>
        </div>
        </>
    );
}
export default Joinclub;