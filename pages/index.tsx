import fakeapi from "@/scripts/fakeapi";

export async function getStaticProps(context) {
  const data = await fakeapi();

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

export default function Home(props) {
  const { data } = props;

  // TODO
  return (
    <div className="bg-gray-50 min-w-screen min-h-screen flex lg:py-16">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 bg-white rounded-lg my-auto w-full">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            TODO: List all sections as headers
            <p className="text-xl font-medium">
              + Allow expanding and closing of sections
            </p>
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            <div className="pt-6">
              <dt className="text-lg">
                <button className="text-left w-full flex justify-between items-start text-gray-400">
                  <span className="font-medium text-gray-900">
                    EXAMPLE SECTION 1
                  </span>
                  <span className="ml-6 h-7 flex items-center">
                    <svg
                      className="-rotate-180 h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
              </dt>
              <span className="text-gray-700">Subtitle here</span>
              <dd className="mt-2 pr-12">
                <ul className="text-base text-gray-500 list-disc pl-5">
                  <li>TODO: Make a list of links to articles in the section</li>
                  <li>TODO: Make a list of links to articles in the section</li>
                  <li>TODO: Make a list of links to articles in the section</li>
                </ul>
              </dd>
            </div>
            <div className="pt-6">
              <dt className="text-lg">
                <button className="text-left w-full flex justify-between items-start text-gray-400">
                  <span className="font-medium text-gray-900">
                    EXAMPLE SECTION 2
                  </span>
                  <span className="ml-6 h-7 flex items-center">
                    <svg
                      className="-rotate-180 h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
              </dt>
              <span className="text-gray-700">Subtitle here</span>
              <dd className="mt-2 pr-12">
                <ul className="text-base text-gray-500 list-disc pl-5">
                  <li>TODO: Make a list of links to articles in the section</li>
                  <li>TODO: Make a list of links to articles in the section</li>
                  <li>TODO: Make a list of links to articles in the section</li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
