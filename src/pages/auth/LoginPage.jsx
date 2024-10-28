
import LoginForm from '@/components/auth/LoginForm'
import LoginIntro from '@/components/auth/LoginIntro'
import Breadcrumb3 from '@/components/Breadcrumbs/Breadcrumb'

export default function LoginPage() {
  return (
    <section className="relative py-20 2xl:py-10 overflow-hidden">

      <div className="container px-4 mx-auto">
        
        <div className="max-w-7xl mx-auto">
        <Breadcrumb3/>
          <div className="flex flex-wrap -mx-4">
            {/* Image and Content Block */}
            <LoginIntro/>
            {/* Sign In Form Block */}
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <div className="max-w-lg lg:pt-8 2xl:pt-24 lg:pb-8 mx-auto 2xl:mr-0">
                <h3 className="text-5xl sm:text-4xl text-primary font-bold mb-4">
                  Sign To Your Account
                </h3>
                <p className="text-lg text-gray-500 mb-10">
                  See our software in action with the demo version.
                </p>
                {/* <div className="flex flex-wrap mb-6 items-center -mx-2">
                  <div className="w-full md:w-1/2 px-2 mb-3 md:mb-0">
                    <a
                      className="inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition duration-100"
                      href="#"
                    >
                      <img
                        src="saturn-assets/images/sign-up/icon-facebook.svg"
                        alt=""
                      />
                      <span className="ml-4 text-sm font-semibold text-gray-500">
                        Login with Facebook
                      </span>
                    </a>
                  </div>
                  <div className="w-full md:w-1/2 px-2">
                    <a
                      className="inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition duration-100"
                      href="#"
                    >
                      <img
                        src="saturn-assets/images/sign-up/icon-apple.svg"
                        alt=""
                      />
                      <span className="ml-4 text-sm font-semibold text-gray-500">
                        Login with Apple
                      </span>
                    </a>
                  </div>
                </div> */}
                <div className="flex mb-6 items-center">
                  <div className="w-full h-px bg-gray-300"></div>
                  {/* <span className="mx-4 text-sm font-semibold text-gray-500">Or</span> */}
                  <div className="w-full h-px bg-gray-300"></div>
                </div>
                <LoginForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
