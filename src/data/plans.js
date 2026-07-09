
const plans=[
        {
            name:"Monthly",
            price:"$10.00 USD",
            period:"monthly",
            benefits: [{ icon: "mail", label: "Weekly newsletter" }],
            podcast:["mic"],
            btn:"Subscribe"
        },
        {
            name:"Semi-annual",
            price:"$60.00 USD",
            period:"every 6months",
            benefits:[
              { icon: "mail", label: "Weekly newsletter" },
              { icon: "chart", label: "Forum access" },
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
export default plans;