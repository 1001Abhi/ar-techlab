export default function Home() {
  return (
    <>
      <section className="dark:bg-black dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-lg lg:max-w-md xl:max-w-lg lg:text-left">
            <div>
              <h1 className="text-5xl font-bold leading-none sm:text-6xl mb-8">
                Strapi <span className="dark:text-violet-400">Starter</span> with Next JS
              </h1>
            </div>
            <div>
              <p className="mt-6 mb-8 text-lg sm:mb-12">
                This is built with <span className="dark:text-violet-400">Strapi</span> and <span className="dark:text-violet-400">Next</span> JS. A match made in heaven.
              </p>
            </div>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a target="_blank" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100" href="https://discord.com/invite/strapi">Discord</a>
              <a target="_blank" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900" href="https://strapi.io/events">Events</a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img alt="none provided" loading="lazy" width="600" height="600" decoding="async" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" src="https://exciting-gift-8e69796398.media.strapiapp.com/undraw_woman_ffrd_b3ac24fb06.svg" />
          </div>
        </div>
      </section>
      <section className="dark:bg-black dark:text-gray-100 py-12 lg:py-24">
        <div className="container mx-auto py-4 space-y-2 text-center">
          <h2 className="text-5xl font-bold">Features</h2>
          <p className="dark:text-gray-400">Welcome to Strapi Starter</p>
        </div>
        <div className="container mx-auto my-6 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Discover Next.js</h3>
            <div className="space-y-1 leading-tight my-6">
              <p>The React Framework for Production: Explore the future of web development with Next.js, the cutting-edge React framework.</p>
            </div>
            <div>
              <a target="_blank" className="inline-block px-4 py-2 mt-4 text-sm font-semibold text-white transition duration-200 ease-in-out bg-violet-500 rounded-lg hover:bg-violet-600" href="https://vercel.com/">Learn more</a>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Strapi</h3>
            <div className="space-y-1 leading-tight my-6">
              <p>Unleash the power of Strapi, the leading open-source headless CMS that lets you create, manage, and distribute your content across multiple platforms.</p>
            </div>
            <div>
              <a target="_blank" className="inline-block px-4 py-2 mt-4 text-sm font-semibold text-white transition duration-200 ease-in-out bg-violet-500 rounded-lg hover:bg-violet-600" href="https://strapi.io">Learn more</a>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Cloud</h3>
            <div className="space-y-1 leading-tight my-6">
              <p>Simplify your content management experience with Strapi Cloud, the fully-managed hosting solution for your Strapi projects.</p>
            </div>
            <div>
              <a target="_blank" className="inline-block px-4 py-2 mt-4 text-sm font-semibold text-white transition duration-200 ease-in-out bg-violet-500 rounded-lg hover:bg-violet-600" href="https://strapi.io/cloud">Learn more</a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 dark:bg-black dark:text-gray-100 m:py-12 lg:py-24">
        <div className="container px-4 mx-auto "><div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="font-bold tracking-wider uppercase dark:text-violet-400">Pricing</span>
          <h2 className="text-4xl font-bold lg:text-5xl">Our Plans</h2>
        </div><div className="flex flex-wrap items-stretch max-w-5xl mx-auto">
            <div className="w-full p-4 mb-8  sm:mx-40 lg:mx-0 lg:w-1/3 lg:mb-0">
              <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 min-h-[475px] min-w-[300px] dark:bg-gray-800">
                <div className="space-y-2"><h4 className="text-3xl font-bold mb-6">Free</h4><span className="text-6xl font-bold ">0<span className="ml-1 text-sm tracking-wid dark:text-violet-500">monthly</span></span></div><p className="mt-3 leading-relaxed text-lg font-bold dark:text-gray-400">Features</p><ul className="flex-1 mb-6 dark:text-gray-400"><li className="flex mb-2 space-x-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-gray-400"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>Example Feature 1</span></li><li className="flex mb-2 space-x-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-gray-400"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>Example Feature 2</span></li><li className="flex mb-2 space-x-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-gray-400"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>Example Feature 3</span></li></ul><button type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded   dark:bg-violet-400 dark:text-gray-900">Get Started</button></div></div><div className="w-full p-4 mb-8  sm:mx-40 lg:mx-0 lg:w-1/3 lg:mb-0"><div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 min-h-[475px] min-w-[300px] dark:bg-violet-600"><div className="space-y-2"><h4 className="text-3xl font-bold mb-6">Pro</h4><span className="text-6xl font-bold ">9.99<span className="ml-1 text-sm tracking-wid dark:text-gray-900">monthly</span></span></div><p className="mt-3 leading-relaxed text-lg font-bold dark:text-gray-900">Features</p><ul className="flex-1 mb-6 dark:text-gray-900 font-semibold"><li className="flex mb-2 space-x-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-gray-900"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>Example Feature 1</span></li><li className="flex mb-2 space-x-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-gray-900"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>Example Feature 2</span></li><li className="flex mb-2 space-x-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-gray-900"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>Example Feature 3</span></li><li className="flex mb-2 space-x-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-gray-900"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>Example Feature 4</span></li></ul><button type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded   dark:bg-gray-900 dark:text-violet-400">Get Started</button></div></div><div className="w-full p-4 mb-8  sm:mx-40 lg:mx-0 lg:w-1/3 lg:mb-0"><div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 min-h-[475px] min-w-[300px] dark:bg-gray-800"><div className="space-y-2"><h4 className="text-3xl font-bold mb-6">Enterprise </h4><span className="text-6xl font-bold ">19.99<span className="ml-1 text-sm tracking-wid dark:text-violet-500">monthly</span></span></div><p className="mt-3 leading-relaxed text-lg font-bold dark:text-gray-400">Features</p><ul className="flex-1 mb-6 dark:text-gray-400"><li className="flex mb-2 space-x-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-gray-400"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>Example Feature 1</span></li><li className="flex mb-2 space-x-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-gray-400"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>Example Feature 2</span></li><li className="flex mb-2 space-x-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-gray-400"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>Example Feature 3</span></li><li className="flex mb-2 space-x-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-gray-400"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>Example Feature 4</span></li><li className="flex mb-2 space-x-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-gray-400"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>Example Feature 5</span></li></ul><button type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded   dark:bg-violet-400 dark:text-gray-900">Get Started</button></div></div></div></div>
      </section>
      <section className="dark:bg-black dark:text-gray-100  m:py-12 lg:py-24"><div className="container mx-auto py-4 space-y-2 text-center"><h1 className="text-4xl font-semibold leading-none text-center">Testimonials</h1><p className="mt-4 text-lg text-center">Hello</p></div><div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2"><div className="flex flex-col items-center mx-12 lg:mx-0"><div className="flex items-center"><div className="my-6">
        {/* <img alt="none provided" loading="lazy" width="200" height="200" decoding="async" data-nimg="1" className="inline-block h-32 w-32 rounded-full" srcset="/_next/image?url=https%3A%2F%2Fexciting-gift-8e69796398.media.strapiapp.com%2Fpaul_brats_012832af74.jpg&amp;w=256&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fexciting-gift-8e69796398.media.strapiapp.com%2Fpaul_brats_012832af74.jpg&amp;w=640&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fexciting-gift-8e69796398.media.strapiapp.com%2Fpaul_brats_012832af74.jpg&amp;w=640&amp;q=75" style="color: transparent;"> */}
      </div></div><div className="relative text-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"><path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path><path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path></svg><p className="px-6 py-1 text-lg italic">ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"><path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path><path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path></svg></div><span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span><p>Paul Brats</p></div><div className="flex flex-col items-center mx-12 lg:mx-0"><div className="flex items-center"><div className="my-6">
        {/* <img alt="none provided" loading="lazy" width="200" height="200" decoding="async" data-nimg="1" className="inline-block h-32 w-32 rounded-full" srcset="/_next/image?url=https%3A%2F%2Fexciting-gift-8e69796398.media.strapiapp.com%2Fkit_kat_96feba6636.png&amp;w=256&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fexciting-gift-8e69796398.media.strapiapp.com%2Fkit_kat_96feba6636.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fexciting-gift-8e69796398.media.strapiapp.com%2Fkit_kat_96feba6636.png&amp;w=640&amp;q=75" style="color: transparent;"> */}
      </div></div><div className="relative text-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"><path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path><path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path></svg><p className="px-6 py-1 text-lg italic">ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"><path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path><path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path></svg></div><span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span><p>Kit Kat</p></div></div></section>
      <section className="py-6 dark:bg-black dark:text-gray-50"><div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row"><div className="flex flex-col space-y-4 text-center lg:text-left"><h1 className="text-5xl font-bold leading-none">Join our community.</h1><p className="text-lg">Doloribus consectetur quasi ipsa quo neque culpa blanditiis ducimus recusandae a veritatis optio cumque, in harum ad nam!</p></div><div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end"><div className="flex flex-col"><div className="flex flex-row">
        <input placeholder="Enter your email" className="w-3/5 p-3 rounded-l-lg sm:w-2/3 text-gray-700" type="email" value="" /><button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900">Submit</button></div></div></div></div></section>
    </>
  );
}
