import { Teams } from "./Teams";
import "./AboutUsStyles.css";

function AboutUs() {
  return (
    <div className="About-Container">
      <div className="aim">
        <h1 className="headings-title"><b>Our Aim</b></h1>
        <p>From the pioneer 

To make articles & Videos on early stage startups founder 

Unblue Introduce 

The story of Bharat

Story of Bharat Founder

A Bharatiya dream

An Initiative for  "Bharatiya" bring stories of early stage startup so that everyone knows the journey
<br/>
<b>Industry</b>
<br/>
Broadcast Media Production and Distribution
<br/>
<b>Company size</b>
<br/>
2-10 employees
<br/>
<b>Headquarters</b>
<br/>
Gaya, Bihar
<br/>
Founded
2023</p>
      </div>
      <br/>
      <h1 className="headings-title" ><b>Teams</b></h1>
      <div className="team-members">
        {Teams.map((teamMember) => (
          <div className="team-member" key={teamMember.id}>
            <div className="member-info">
              <img src={teamMember.image} alt={teamMember.name} />
              <h3>{teamMember.name}</h3>
              <p>{teamMember.position}</p>
              <a
                href={teamMember.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
