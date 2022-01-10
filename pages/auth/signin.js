import { getProviders, signIn as SignInAsProvider } from "next-auth/react";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

function signin({ providers }) {
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center flex-col w-full h-[80vh]">
        <div className="flex justify-center flex-col items-center mb-10">
          <img className=" w-40" src="/img/pizza.png" alt="signIn_Icon" />
          <p>☑️ This is made for Education Purpose</p>
        </div>
        <div>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-lg p-2 text-sm font-bold bg-blue-400 text-white"
                onClick={() =>
                  SignInAsProvider(provider.id, {
                    callbackUrl: "/",
                  })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default signin;
