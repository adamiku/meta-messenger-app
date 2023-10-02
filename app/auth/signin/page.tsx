import SignInComponent from "@/components/SignInComponent";
import { getProviders } from "next-auth/react";
import Image from "next/image";

export const metadata = {
  title: "Messenger App",
};

async function SignInPage() {
  const providers = await getProviders();

  return (
    <div className="grid justify-center">
      <div className="">
        <Image
          className="rounded-full mx-2 object-cover"
          width={700}
          height={700}
          src="https://links.papareact.com/161"
          alt="Profile Picture"
        />
      </div>
      <SignInComponent providers={providers} />
    </div>
  );
}

export default SignInPage;
