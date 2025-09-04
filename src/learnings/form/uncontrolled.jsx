import { useCallback, useRef, useState } from "react";

export const UnControlledFormInput = (props) => {
  const emailRef = useRef(null);
  const formRef = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current, e.target);
  };

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      {props.MailElement && <props.MailElement />}
      <label htmlFor="name">Name</label>
      <input name="name" placeholder="Ex: John" />
      <label htmlFor="email">Email</label>
      <input ref={emailRef} name="email" placeholder="Ex: email@mail.com" />
      <label htmlFor="password">password</label>
      <input name="password" placeholder="password" />
      <button type="submit">Submit</button>
    </form>
  );
};
