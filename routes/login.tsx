import { useState, useRef } from "preact/hooks";

export default function Page() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormDataEvent) {
    event.preventDefault();

    fetch("/api/login", {
      method: "POST",
      body: {
        email: emailRef?.current?.value as string,
        password: passwordRef?.current?.value as string,
      },
    });
  }

  return (
    <div class="h-screen bg-gray-100 w-full p-4">
      <div class="flex flex-col items-center justify-center">
        <div class="bg-white shadow rounded lg:w-1/3 md:w-1/2 w-full p-10 mt-16">
          <p class="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
            Login to your account
          </p>
          <p class="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
            Dont have account?{" "}
            <a
              href="javascript:void(0)"
              class="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"
            >
              {" "}
              Sign up here
            </a>
          </p>
          <button
            aria-label="Continue with github"
            role="button"
            class="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
          >
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg3.svg"
              alt="github"
            />
            <p class="text-base font-medium ml-4 text-gray-700">
              Continue with Github
            </p>
          </button>
          <div class="w-full flex items-center justify-between py-5">
            <hr class="w-full bg-gray-400" />
            <p class="text-base font-medium leading-4 px-2.5 text-gray-400">
              OR
            </p>
            <hr class="w-full bg-gray-400" />
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label class="text-sm font-medium leading-none text-gray-800">
                Email
              </label>
              <input
                ref={emailRef}
                required
                aria-labelledby="email"
                type="email"
                class="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            <div class="mt-6 w-full">
              <label class="text-sm font-medium leading-none text-gray-800">
                Password
              </label>
              <div class="relative flex items-center justify-center">
                <input
                  ref={passwordRef}
                  required
                  type="password"
                  class="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
                <div class="absolute right-0 mt-2 mr-3 cursor-pointer">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg"
                    alt="viewport"
                  />
                </div>
              </div>
            </div>
            <div class="mt-8">
              <button
                role="button"
                type="submit"
                class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
