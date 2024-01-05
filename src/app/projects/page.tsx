import { MacbookCanvas } from "../components/MacbookCanvas";

export default function Projects() {
  return (
    <main className="w-screen h-screen">
      <div className="px-10 pb-12 text-dark-blue">
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
                className="text-sm"
                href="https://www.harpa.is"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit site
              </a>
            </div>
            <div className="h-60 rounded-sm object-cover w-96 p-0.5">
              <MacbookCanvas
                key={1}
                url="https://harpa.is"
                model="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
              />
            </div>
          </div>
        </div>
        <div className="h-80 w-full rounded p-4 bg-purple-highlight border border-dark-blue mt-14">
          <div className="flex justify-between">
            <div>
              <h1 className="font-gilroy-semibold text-3xl">
                SIV eignastýring
              </h1>
              <p className="text-lg mt-4">
                Role: Front end development, CMS setup
              </p>
              <p className="text-lg mt-4 mb-2">
                Tools: ReactJS, NextJS, TailwindCSS, Prismic
              </p>
              <a
                className="text-sm"
                href="https://siveignastyring.is/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit site
              </a>
            </div>
            <div className="h-60 rounded-sm object-cover w-96">
              <MacbookCanvas
                key={2}
                url="https://siveignastyring.is"
                model="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
              />
            </div>
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
                className="text-sm"
                href="https://arsskyrsla.vis.is/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit site
              </a>
            </div>
            <div className="h-60 rounded-sm object-cover w-96 p-0.5">
              <MacbookCanvas
                key={3}
                url="https://arsskyrsla.vis.is/"
                model="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
