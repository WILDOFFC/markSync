import bcrypt from "bcryptjs";

export async function loginRequest({ login, password }, onAuthSuccess) {
  const userData = { login, password };
  const response = await fetch(
    `http://localhost:3000/users?email=${userData.login}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error("oops");
  }

  const data = await response.json();
  if (data.length === 0) {
    throw new Error("Введен неправильный логин или пароль");
    return;
  }
  const isValid = await bcrypt.compare(
    userData.password,
    data[0].password_hash,
  );
  if (!isValid) {
    throw new Error("Введен неправильный логин или пароль");
  }

  return data[0];
}
