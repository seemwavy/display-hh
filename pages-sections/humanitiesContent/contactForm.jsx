import React, { useState } from "react";
import styles from "/styles/jss/utop/formstyle.js";
import RegularButton from "../../components/CustomButtons/Button";
export default function ContactUtopForm() {
  const [formData, setFormData] = useState({
    project: "",
    deckLink: "",
    linkedin: "",
    cofounder: "",
    website: "",
    email: "",
    telegram: "",
    amount: "",
    description: "",
    why: "",
    history: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const createMailtoLink = () => {
    const subject = "Grant Application";
    const email = "mac450@protonmail.com"; 

    let body = "Project: " + formData.project + "\n";
    body += "Deck Link: " + formData.deckLink + "\n";
    body += "Linkedin: " + formData.linkedin + "\n";
    body += "CoFounder(Optional): " + formData.cofounder + "\n";
    body += "Website(Optional): " + formData.website + "\n";
    body += "Email(Optional): " + formData.email + "\n";
    body += "Telegram(Optional): " + formData.telegram + "\n";
    body += "Amount(Optional): " + formData.amount + "\n";
    body += "Description: " + formData.description + "\n";
    body += "Why Utopos?(Optional): " + formData.why + "\n";
    body += "History(Optional): " + formData.history + "\n";

    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
    
  return (
    <div id="contactForm">
      <form style={styles.formContainer} >
        <h1>Grant Application</h1>
        <label htmlFor="project">Project</label>
        <input style={{...styles.input}} type="text" id="project" 
        name="project" placeholder="Your project's name"  value={formData.project} onChange={handleChange} />
        <label htmlFor="deckLink">Deck Link</label>
        <input style={{...styles.input}} type="text" id="deckLink" name="deckLink" 
        placeholder="Your Google Drive/Dropbox/DocuSend. Must be URL" value={formData.deckLink} onChange={handleChange} />
        <label htmlFor="linkedin">Linkedin</label>
        <input style={{...styles.input}} type="text" id="linkedin" name="linkedin" 
        placeholder="Your Linkedin" value={formData.linkedin} onChange={handleChange} />
        <label htmlFor="cofounder">CoFounder(Optional)</label>
        <input style={{...styles.input}} type="text" id="cofounder" name="cofounder" 
        value={formData.cofounder} onChange={handleChange} placeholder="Your CoFounder" />
        <label htmlFor="website">Website(Optional)</label>
        <input style={{...styles.input}} type="text" id="website" name="website" 
        placeholder="Your Website" value={formData.website} onChange={handleChange} />
        <label htmlFor="email">Email(Optional)</label>
        <input style={{...styles.input}} type="text" id="email" name="email" 
        placeholder="Your Email" value={formData.email} onChange={handleChange} />
        <label htmlFor="telegram">Telegram(Optional)</label>
        <input style={{...styles.input}} type="text" id="telegram" name="telegram" 
        placeholder="Your Telegram" value={formData.telegram} onChange={handleChange} />
        <label htmlFor="amount">Amount(Optional)</label>
        <input style={{...styles.input}} type="text" id="amount" name="amount" 
        placeholder="Explain how much you plan to raise in this current round, amount in $UTOP or USD" value={formData.amount} onChange={handleChange} /><br />
        {/* ... */}
        <label htmlFor="description">Project description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Describe succinctly the problem you wish to solve and who you're trying to solve it for"
          style={{ ...styles.largerTextarea, ...styles.scrollableTextarea }}
          value={formData.description} onChange={handleChange}
        ></textarea>
        {/* ... */}
        <label htmlFor="why">Why Utopos?(Optional)</label>
        <textarea
          id="why"
          name="why"
          placeholder="Why do you think Utopos is the right place for your project?"
          style={{ ...styles.largerTextarea, ...styles.scrollableTextarea }}
          value={formData.why} onChange={handleChange}
        ></textarea>
        {/* ... */}
        <label htmlFor="history">History(Optional)</label>
        <textarea
          id="history"
          name="history"
          placeholder="How much money has been raised already for your project since it's inception?"
          style={{ ...styles.largerTextarea, ...styles.scrollableTextarea }}
          value={formData.history} onChange={handleChange}
        ></textarea>
        {/* ... */}
        <a href={createMailtoLink()}>
          <RegularButton color="info" size="lg">Submit</RegularButton>
        </a>
      </form>
    </div>
  );
}