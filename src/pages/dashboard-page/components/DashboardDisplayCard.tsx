import React from "react";

const DashboardDisplayCard = ({cardData} : any) => {
    const {id , title ,  icon , value} = cardData;
  return (<div className=" flex flex-col gap-4 border border-gray-300 p-4 bg-gray-50 h-[120px] rounded-md shadow-sm  w-[230px] ">
      <div className="">{icon}</div>
        <p >{title} :  <span className="text-gray-600">{value}</span> </p>
    </div>)
};

export default DashboardDisplayCard;
