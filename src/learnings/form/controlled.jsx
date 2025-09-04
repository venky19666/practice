import { useCallback, useState } from "react";

export const ControlledFormInput = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onInputValueChange = useCallback((inputItemKey, event) => {
    setUserDetails((prev) => ({
      ...prev,
      [inputItemKey]: event.target.value,
    }));
  }, []);

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        placeholder="Ex: John"
        value={userDetails.name}
        onChange={(event) => onInputValueChange("name", event)}
      />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        placeholder="Ex: email@mail.com"
        value={userDetails.email}
        onChange={onInputValueChange.bind(null, "email")}
      />
      <label htmlFor="password">password</label>
      <input
        name="password"
        placeholder="password"
        value={userDetails.password}
        onChange={onInputValueChange.bind(null, "password")}
      />
      <button>Submit</button>
    </form>
  );
};
