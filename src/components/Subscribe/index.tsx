import React, { useState, ChangeEvent, FormEvent } from "react";
import { StyledSubscribe } from "./StyledSubscribe";
import Swal from "sweetalert2";

function Subscribe() {
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Your email address was registered.",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const [form, setForm] = useState({
    email: "",
    error: true,
  });

  function validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setForm({
      ...form,
      [name]: value,
    });
    if (name === "email") {
      validateEmail(value) &&
        setForm({
          ...form,
          error: false,
        });
    }
  };
  return (
    <StyledSubscribe id="subscribe">
      <h2>Subscribe to our newsletter</h2>
      <p>
          Receive our latest promos, news, discounts, and more!
        </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="email@address.com"
        ></input>
        <button type="submit" disabled={form.error}>
          Submit
        </button>
      </form>
    </StyledSubscribe>
  );
}

export default Subscribe;
