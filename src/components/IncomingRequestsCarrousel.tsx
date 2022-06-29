import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { requestAskedType } from "../Types/RequestAskedType";
import { IncomingRequest } from "./IncomingRequest";

import "./IncomingRequestsCarrousel.css";

type Props = {};

export const IncomingRequestsCarrousel = (props: Props) => {
  const allHelpRequests = useSelector((state: any) => state.helpRequests.value);
  const user = useSelector((state: any) => state.user.value);
  const userTechs = user.technologies.map((item: any) => item.technologyId);

  const [filteredHRs, setFilteredHRs] = useState([]);

  useEffect(() => {
    const filteredHR = allHelpRequests.filter((helpRequest: any) => {
      for (let i = 0; i < helpRequest.technologies.length; i++) {
        if (userTechs.includes(helpRequest.technologies[i].technologyId)) {
          return true;
        }
      }
      return false;
    });

    setFilteredHRs(filteredHR);
  }, []); //eslint-disable-line

  return (
    <div className="carrousel-outer-container">
      <div className="title">
        <span>Incomming Requests</span>
      </div>
      <div className="request-carrousel">
        {filteredHRs.map((help: requestAskedType) => {
          return (
            <IncomingRequest
              help={help}
              key={help.id}
              //    handleDelete={() => {
              //   const newHRs = filteredHRs.filter((item: any) => {
              //     console.log(item.id, "itemid");
              //     console.log(help.id, "help.id");
              //     return item.id !== help.id;
              //   });

              //   setFilteredHRs([...newHRs]);
              // }}
            ></IncomingRequest>
          );
        })}
      </div>
    </div>
  );
};
