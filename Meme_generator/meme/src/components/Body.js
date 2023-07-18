import { useState } from "react";

function Body() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employmentStatus: "",
    favColor: "",
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
    //event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>

      <input
        id="firstName"
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        onChange={handleChange}
        value={formData.email}
      />
      <textarea
        name="comments"
        placeholder="Comments"
        value={formData.comments}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        id="isFriendly"
        name="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
      />
      <label htmlFor="isFriendly">Are you Friendly</label>

      <fieldset>
        <legend>Current employment status</legend>

        <input
          type="radio"
          id="unemployed"
          name="employmentStatus"
          value="unemployed"
          checked={formData.employmentStatus === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input
          type="radio"
          id="partTime"
          name="employmentStatus"
          value="partTime"
          checked={formData.employmentStatus === "partTime"}
          onChange={handleChange}
        />
        <label htmlFor="partTime">Part time</label>
        <br />

        <input
          type="radio"
          id="fullTime"
          name="employmentStatus"
          value="fullTime"
          checked={formData.employmentStatus === "fullTime"}
          onChange={handleChange}
        />
        <label htmlFor="fullTime">Full time</label>
        <br />
      </fieldset>

      <label htmlFor="favColor">What is your favorite color?</label>
      <br />
      <select
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>

      <button>Submit</button>
    </form>
  );
}

export default Body;
