import { useCallback, useState } from "react";

/**
 *
 * @returns
 * name - min 3 chars
 * email - valid email
 * password - min 8 chars one spacial char one number one lowercase one uppercase
 */

export const ControlledFormInput = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorDetails, setErrorDetails] = useState({});

  const checkValidFieldOrNot = (inputItemKey, value) => {
    switch (inputItemKey) {
      case "name":
        return [value.length >= 3, "Invalid name"];
      case "email":
        return [value.includes("@"), "Invalid email"];
      case "password":
        return [value.length >= 8, "Invalid password"];
      default:
        return [false];
    }
  };

  const onSubmit = async () => {
    const response = await fetch("https://softwium.com/api/books");
    const data = await response.json();
    console.log(data);
  };

  const onInputValueChange = useCallback((inputItemKey, event) => {
    const [isValid, errorMessage] = checkValidFieldOrNot(
      inputItemKey,
      event.target.value
    );
    setUserDetails({
      ...userDetails,
      [inputItemKey]: event.target.value,
    });
    if (isValid) {
      setErrorDetails({
        ...errorDetails,
        [inputItemKey]: undefined,
      });
    } else {
      setErrorDetails({
        ...errorDetails,
        [inputItemKey]: errorMessage,
      });
    }
  }, []);

  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          placeholder="Ex: John"
          value={userDetails.name}
          onChange={(event) => onInputValueChange("name", event)}
          type="text"
          required
        />
        {errorDetails.name && <p>{errorDetails.name}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          placeholder="Ex: email@mail.com"
          value={userDetails.email}
          onChange={onInputValueChange.bind(null, "email")}
          required
        />
        {errorDetails.email && <p>{errorDetails.email}</p>}
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          name="password"
          placeholder="password"
          value={userDetails.password}
          onChange={onInputValueChange.bind(null, "password")}
          required
        />
        {errorDetails.password && <p>{errorDetails.password}</p>}
      </div>
      <button onClick={onSubmit}>Submit</button>
    </form>
  );
};
