import {
  CredentialsSignInButton,
  GithubSignInButton,
  GoogleSignInButton,
} from "../components/authButtons";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";
import { CredentialsForm } from "../components/CredentialsForm";

const LoginPage = async () => {
    const session = await getServerSession(authOptions);

    console.log("Session: ", session);
  
    if (session) return redirect("/dashboard");

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
    <div className="flex flex-col items-center mt-10 p-10 shadow-md">
      <h1 className="mt-10 mb-4 text-4xl font-bold ">Sign In</h1>
      <GoogleSignInButton />
      <GithubSignInButton />
      <span className="text-2xl font-semibold text-white text-center mt-8">
        Or
      </span>
      <CredentialsSignInButton />
      <CredentialsForm />
    </div>
  </div>
  );
};

export default LoginPage;