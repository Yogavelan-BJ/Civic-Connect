import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const nav = useNavigate()
  return (
    <div className=" bg-gray-50 flex flex-col w-full">
      <header className="bg-blue-700 text-white py-12 h-96">
        <div className="container mx-auto text-center">
          <h1 className="text-9xl font-bold">CIVIC-CONNECT</h1>
          <p className="mt-4 font-normal text-4xl">Connect, Contribute, and Be Rewarded</p>
        </div>
        <div className="flex items-start justify-center my-4" >
        <button onClick={()=>(nav("/login"))} className="h-12 w-24 bg-blue-300 rounded-lg mx-2 " >LOGIN</button>
        <button onClick={()=>(nav("/signup"))} className="h-12 w-24 bg-blue-300 rounded-lg mx-2" >REGISTER</button>
        </div>
       
      </header>

      <main className="flex-grow container mx-auto p-6">
        <section className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li><strong>Sign Up:</strong> Create an account and join our community.</li>
            <li><strong>Connect:</strong> Find and connect with NGOs or individuals in need.</li>
            <li><strong>Contribute:</strong> Volunteer your time or resources.</li>
            <li><strong>Earn Civic Points:</strong> Receive points for your contributions.</li>
            <li><strong>Redeem Rewards:</strong> Convert your points into monetary benefits or other rewards.</li>
          </ol>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-6">Benefits of Participation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">For Volunteers</h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-700">
                <li>Make a real impact in your community.</li>
                <li>Gain valuable experience.</li>
                <li>Earn rewards for your efforts.</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">For Society</h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-700">
                <li>Get access to a network of dedicated volunteers.</li>
                <li>Utilize resources to help your cause.</li>
                <li>Boosts community engagement by connecting volunteers with local NGOs.</li>
                <li>Increases civic participation through a rewarding system that encourages more volunteering and donations.</li>
              </ul>
            </div>
          </div>
        </section>

      

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6">Rewards and Incentives</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="mb-4 text-gray-700">Earn points for every hour you volunteer or every donation you make. Redeem them for:</p>
          <ul className="list-disc pl-5 space-y-3 text-gray-700">
            <li>Gift Cards</li>
            <li>Special Event Access</li>
            <li>Exclusive Rewards</li>
          </ul>
          </div>
        </section>
      </main>

      <footer className="bg-blue-700 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; - By Team Maniacs</p>
        </div>
      </footer>
    </div>
  );

}

export default Welcome;
