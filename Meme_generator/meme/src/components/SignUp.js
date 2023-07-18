import { useState } from "react";
import "../assets/styles/styles.css";

/**
 * Challenge: Connect the form to local state
 *
 * 1. Create a state object to store the 4 values we need to save.
 * 2. Create a single handleChange function that can
 *    manage the state of all the inputs and set it up
 *    correctly
 * 3. When the user clicks "Sign up", check if the
 *    password & confirmation match each other. If
 *    so, log "Successfully signed up" to the console.
 *    If not, log "passwords to not match" to the console.
 * 4. Also when submitting the form, if the person checked
 *    the "newsletter" checkbox, log "Thanks for signing
 *    up for our newsletter!" to the console.
 */

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    okayToEmail: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    //  * 4. Also when submitting the form, if the person checked
    //  *    the "newsletter" checkbox, log "Thanks for signing
    //  *    up for our newsletter!" to the console.
    if (formData.password === formData.confirmPassword) {
      console.log("Successfully signed up");
    } else {
      console.log("Passwords do not match");
    }

    if (formData.okayToEmail === true) {
      console.log("Thanks for signing up to our whatevs");
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          className="form--input"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          className="form--input"
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          className="form--input"
          onChange={handleChange}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="okayToEmail"
            onChange={handleChange}
            checked={formData.okayToEmail}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignUp;
