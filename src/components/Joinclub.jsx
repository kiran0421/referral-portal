import Plancard from "./Plancard";
import { MailIcon } from "./Icons";
import { ChartIcon } from "./Icons";
function Joinclub(){
    const plans=[
        {
            name:"Monthly",
            price:"$10.00 USD",
            period:"monthly",
            benefits: [{ icon: <MailIcon/>, label: "Weekly newsletter" }],
            podcast:["mic"],
            btn:"Subscribe"
        },
        {
            name:"Semi-annual",
            price:"$60.00 USD",
            period:"every 6months",
            benefits:[
              { icon:<MailIcon/>, label: "Weekly newsletter" },
              { icon: <ChartIcon/>, label: "Forum access" },
            ],
            podcast:["Coffee","mic"],
            btn:"Subscribe"
        },
        {
            name:"Free signup",
            price:"Free",
            period:"",
            free:true,
            benefits:[],
            podcast:[],
            btn:"Sign up"
        }
    ]
    return(
        <>
        <div className="join-club">
            <h1 className="join-club-title">Join our club</h1>
            <p className="join-club-subtitle">Subscribe today for acces to special members-only benefits</p>
            <div className="plan-grid">
                {plans.map((plan)=>(
                    <Plancard key={plan.name} plan={plan}/>
                ))}
            </div>
        </div>
        </>
    );
}
export default Joinclub;