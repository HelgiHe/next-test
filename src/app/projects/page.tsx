export default function Projects() {
  return (
    <main className="w-screen h-screen">
      <div className="px-10 text-dark-blue">
        <div className="h-80 w-full rounded p-4 bg-green-highlight border border-dark-blue mt-44">
          <div className="flex justify-between">
            <div>
              <h1 className="font-gilroy-semibold text-3xl">Harpa</h1>
              <p className="text-lg mt-4">
                Role: Front end development, CMS setup
              </p>
              <p className="text-lg mt-4 mb-2">
                Tools: ReactJS, Gatsby, TailwindCSS, Contentful
              </p>
              <a
                href="https://www.harpa.is"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit site
              </a>
            </div>
            <a
              href="https://www.harpa.is"
              target="_blank"
              rel="noopener noreferrer"
              className='h-60 rounded-sm object-cover w-96 bg-off-white p-0.5'

            >
              <img
                className='h-full w-full rounded-sm object-cover'
                src="/images/harpa.jpg"
                alt="harpa að utan"
              />
            </a>
          </div>
        </div>
        <div className="h-80 w-full rounded p-4 bg-purple-highlight border border-dark-blue mt-14">
          <div className="flex justify-between">
            <div>
              <h1 className="font-gilroy-semibold text-3xl">SIV eignastýring</h1>
              <p className="text-lg mt-4">
                Role: Front end development, CMS setup
              </p>
              <p className="text-lg mt-4 mb-2">
                Tools: ReactJS, NextJS, TailwindCSS, Prismic
              </p>
              <a
                href="https://siveignastyring.is/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit site
              </a>
            </div>
            <a
              href="https://siveignastyring.is/"
              target="_blank"
              rel="noopener noreferrer"
              className='h-60 rounded-sm object-cover w-96 bg-off-white p-0.5'
            >
              <img
                className='h-full w-full rounded-sm object-cover'
                src="/images/siv_fund.png"
                alt="harpa að utan"
              />
            </a>
          </div>
        </div>
        <div className="h-80 w-full rounded p-4 bg-blue-highlight border border-dark-blue mt-14">
          <div className="flex justify-between">
            <div>
              <h1 className="font-gilroy-semibold text-3xl">VÍS 2022</h1>
              <p className="text-lg mt-4">
                Role: Front end development, CMS setup
              </p>
              <p className="text-lg mt-4 mb-2">
                Tools: ReactJS, Gatsby, SCSS, Prismic
              </p>
              <a
                href="https://arsskyrsla.vis.is/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit site
              </a>
            </div>
            <a
              href="https://arsskyrsla.vis.is/"
              target="_blank"
              rel="noopener noreferrer"
              className='h-60 rounded-sm object-cover w-96 bg-off-white p-0.5'
            >
              <img
                className='h-full w-full rounded-sm object-cover'
                src="/images/arsskyrsla_vis.png"
                alt="harpa að utan"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
