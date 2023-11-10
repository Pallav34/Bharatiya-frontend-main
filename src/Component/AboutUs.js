import { Teams } from "./Teams";
import "./AboutUsStyles.css";

function AboutUs() {
  return (
    <div className="About-Container">
      <div className="aim">
        <h2>Our Aim</h2>
        <p>write company aim / about company</p>
      </div>
      <h2>Teams</h2>
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
