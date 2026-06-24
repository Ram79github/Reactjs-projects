import React from "react";
import { Bookmark } from "lucide-react";

export default function Card(props) {
  return (
    <div className="card">
      <div>
        <div className="top">
          <img src={props.logo} alt="User" />
          <button>
            save <Bookmark size={20} />
          </button>
        </div>
        <div className="center">
          <h3>
            {props.company} <span>{props.posted}</span>
          </h3>
          <h2>{props.title}</h2>
          <div className="tag">
            <h4>{props.type}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{props.salary}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
}
