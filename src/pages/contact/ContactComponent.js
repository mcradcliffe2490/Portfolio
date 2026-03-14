import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import BlogsImg from "./BlogsImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import {
  greeting,
  contactPageData,
  freelanceFormData,
} from "../../portfolio.js";
import { style } from "glamor";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

function Contact(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                alt=""
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />
              <br />
              <br />
              <a {...styles} className="general-btn" href={greeting.resumeLink}>
                See my Resume
              </a>
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="40px">
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {blogSection["title"]}
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {blogSection["subtitle"]}
              </p>
              <div className="blogsite-btn-div">
                <a {...styles} className="general-btn" href={blogSection.link}>
                  Medium Blog
                </a>
              </div>
            </div>
            <div className="blog-heading-img-div">
              <BlogsImg theme={theme} />
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="40px">
          <div className="freelance-heading-div">
            <div className="freelance-form-div">
              <h1
                className="freelance-heading-text"
                style={{ color: theme.text }}
              >
                {freelanceFormData.title}
              </h1>
              <p
                className="freelance-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {freelanceFormData.subtitle}
              </p>
              <form
                action={freelanceFormData.formspreeEndpoint}
                method="POST"
                className="freelance-form"
              >
                <input
                  type="text"
                  name="_gotcha"
                  style={{ display: "none" }}
                  tabIndex="-1"
                  autoComplete="off"
                />
                <div className="form-group">
                  <label style={{ color: theme.text }}>Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    style={{
                      backgroundColor: theme.projectCard,
                      color: theme.text,
                      borderColor: theme.secondaryText,
                    }}
                  />
                </div>
                <div className="form-group">
                  <label style={{ color: theme.text }}>Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    style={{
                      backgroundColor: theme.projectCard,
                      color: theme.text,
                      borderColor: theme.secondaryText,
                    }}
                  />
                </div>
                <div className="form-group">
                  <label style={{ color: theme.text }}>Project Type</label>
                  <select
                    name="projectType"
                    required
                    style={{
                      backgroundColor: theme.projectCard,
                      color: theme.text,
                      borderColor: theme.secondaryText,
                    }}
                  >
                    <option value="">Select a project type</option>
                    {freelanceFormData.projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label style={{ color: theme.text }}>Budget Range</label>
                  <select
                    name="budgetRange"
                    style={{
                      backgroundColor: theme.projectCard,
                      color: theme.text,
                      borderColor: theme.secondaryText,
                    }}
                  >
                    <option value="">Select a budget range</option>
                    {freelanceFormData.budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label style={{ color: theme.text }}>
                    Project Description
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell me about your project..."
                    style={{
                      backgroundColor: theme.projectCard,
                      color: theme.text,
                      borderColor: theme.secondaryText,
                    }}
                  />
                </div>
                <button type="submit" {...styles} className="general-btn">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;
