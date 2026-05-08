import bcrypt from "bcryptjs";

export async function registerRequest(data) {
  const { login, password } = data;
  const salt = await bcrypt.genSalt(10);
  const password_hash = await bcrypt.hash(password, salt);

  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify({
      email: login,
      salt,
      password_hash,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("oops");
  }
}
