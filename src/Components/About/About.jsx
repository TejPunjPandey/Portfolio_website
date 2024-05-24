import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                      React developers are driven by a relentless pursuit of innovative solutions to complex problems. They thrive on finding elegant ways to tackle challenges and push the boundaries of what's possible in web development.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Passionate React developers actively engage with the vibrant community surrounding the framework. They eagerly participate in forums, contribute to open-source projects, and attend meetups and conferences to share knowledge and learn from others.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
