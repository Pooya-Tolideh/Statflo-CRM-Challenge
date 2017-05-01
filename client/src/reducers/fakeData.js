//dataHolder

export default {
        contacts:
            [ {id:1,hovered:false,firstName:"Robert",lastName:"Smith",phone:"(663)946-0305",email:"robert@example.com",city:"Toronto",type:"ACCOUNT",industry:"IT",company:"TechRadar"},
              {id:2,hovered:false,firstName:"Sheryl",lastName:"Hamway",phone:"(647)934-0305",email:"sheryl@example.com",city:"Vancouver",type:"ACCOUNT",industry:"Sales",company:"JumboSales"},
              {id:3,hovered:false,firstName:"Mark",lastName:"Ramtin",phone:"(617)454-0205",email:"mark@example.com",city:"New York",type:"LEAD",industry:"Marketing",company:"XDesign"}
            ],

        calls: [
            {
              id:1,subject:"Sales follow up",type:"Negotiation",fromORto:"From",hovered:false,
              person:"Jerry Gardner",date:"6/25/2016",start:"1:30 PM",finish:"1:45 PM",result:"Setup another appointment"
            },
            {
              id:2,subject:"About new orders",type:"Project",fromORto:"To",hovered:false,
              person:"Mark Ramtin",date:"7/9/2016",start:"2:30 PM",finish:"3:00 PM",result:"New Orders determined"
            },
            {
              id:3,subject:"Fixing the database",type:"Support",fromORto:"From",hovered:false,
              person:"Chris Balmer",date:"5/11/2016",start:"10:30 AM",finish:"11:00 AM",result:"Need to check with developers"
            }
        ],

        appointments: [
            {
               id:1,date:"7/9/2016",time:"10:30 AM",name:"Chris Balmer",duration:"30 min",
               email:"chris.b@gmail.com",phone:"(663)946-0305",hovered:false
            },
            {  id:2,date:"6/25/2016",time:"12:00 PM",name:"Jerry Gardner",duration:"15 min",
               email:"j.smith@gmail.com",phone:"(647)934-0305",hovered:false
            },
            {  id:3,date:"5/11/2016",time:"1:00 PM",name:"Jenna Sam",duration:"1 hour",
               email:"j.sam@gmail.com",phone:"(617)454-0205",hovered:false
            }
        ]
    }