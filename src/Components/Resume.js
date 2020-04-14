import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var profilepic1 = "images/" + this.props.data.kisi1[0].img;
      var kisi1 = this.props.data.kisi1.map(function(education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree}
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var profilepic2 = "images/" + this.props.data.kisi2[0].img;
      var kisi2 = this.props.data.kisi2.map(function(work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
            </p>
            <p>{work.description}</p>
          </div>
        );
      });
      var profilepic3 = "images/" + this.props.data.kisi3[0].img;
      var kisi3 = this.props.data.kisi3.map(function(work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
            </p>
            <p>{work.description}</p>
          </div>
        );
      });
      var profilepic4 = "images/" + this.props.data.kisi4[0].img;
      var kisi4 = this.props.data.kisi4.map(function(work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
            </p>
            <p>{work.description}</p>
          </div>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns">
            <img
              className="profile-pic"
              style={{ width: "120px", height: "120px", borderRadius: "100%" }}
              src={profilepic1}
              alt="Tim Baker Profile Pic"
            />
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{kisi1}</div>
            </div>
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <img
              className="profile-pic"
              style={{ width: "120px", height: "120px", borderRadius: "100%" }}
              src={profilepic2}
              alt="Tim Baker Profile Pic"
            />
          </div>

          <div className="nine columns main-col">{kisi2}</div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <img
              className="profile-pic"
              style={{ width: "120px", height: "120px", borderRadius: "100%" }}
              src={profilepic3}
              alt="Tim Baker Profile Pic"
            />
          </div>

          <div className="nine columns main-col">{kisi3}</div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <img
              className="profile-pic"
              style={{ width: "120px", height: "120px", borderRadius: "100%" }}
              src={profilepic4}
              alt="Tim Baker Profile Pic"
            />
          </div>

          <div className="nine columns main-col">{kisi4}</div>
        </div>
      </section>
    );
  }
}

export default Resume;
