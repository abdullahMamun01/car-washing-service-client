import RegistrationForm from "@/components/auth/RegistrationForm";

function RegistrationPage() {
  return (
    <section className="relative py-20 xl:py-10 overflow-hidden ">
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <div className="max-w-md mx-auto lg:mx-0">
                <h3 className="font-heading text-4xl text-primary font-semibold mb-4">
                  Sign up to your account
                </h3>
                <p className="text-lg text-gray-500 mb-10">
                  See our software in action with the demo version
                </p>
                <RegistrationForm/>
              </div>
            </div>
            <div className="w-full lg:w-1/2 h-full px-4 ">
              
                <img
                  className="block h-full w-full opacity-65"
                  src="https://static.shuffle.dev/components/preview/2f808e47-944e-42cf-b821-2358251e0600/assets/public/saturn-assets/images/sign-up/image-funny.png"
                  alt=""
                />
         
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistrationPage;
