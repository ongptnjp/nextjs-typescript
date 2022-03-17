
import { NextPage } from "next";
import { RedirectableProviderType } from "next-auth/providers";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

type LoginFormElement = {
  username: HTMLInputElement,
  password: HTMLInputElement
} & HTMLFormControlsCollection

type AuthResponse = {
  status: number,
  ok: boolean,
  url? : string,
  error?: string,
} & RedirectableProviderType

const SignInPage: NextPage = () => {

    const [error, setError] = useState("");
    const router = useRouter()

    const onSignOn = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const loginForm = (event.currentTarget as HTMLFormElement).elements as LoginFormElement;

      const res = await signIn<AuthResponse>("credentials", {
        username: loginForm.username.value,
        password: loginForm.password.value,
        redirect: false
      });

      if (res?.error) return setError(res?.error);

      if (res?.url) router.push("/protected")

      console.log("res", res);
    }

      return (
        <form onSubmit={onSignOn}>
          <label data-for="username">username:</label>
          <input type="text" id="username" name="username" />
          <label data-for="password">password:</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Sign in</button>

          {
            error ? <div>Error is {error}</div> : ""
          }
        </form>
      )
}

export default SignInPage