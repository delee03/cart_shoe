import {
    Avatar,
    Blockquote,
    Rating,
    RatingStar,
    Carousel,
    Card,
    Accordion,
    AccordionContent,
    AccordionPanel,
    AccordionTitle,
} from "flowbite-react";

const TrangChu = () => {
    return (
        <>
            <div
                className="h-56 sm:h-64 xl:h-90 2xl:h-100"
                style={{ minHeight: "70vh" }}
            >
                <Carousel pauseOnHover>
                    <img
                        src="banner3.jpg"
                        alt="..."
                        className="object-cover w-full"
                    />
                    <img
                        src="banner1.jpg"
                        alt="..."
                        className="object-cover w-full"
                    />
                    <img
                        src="banner2.jpg"
                        alt="..."
                        className="object-cover w-full"
                    />

                    <img
                        src="banner4.jpg"
                        alt="..."
                        className="object-cover w-full"
                    />
                </Carousel>
            </div>

            <figure className="max-w-screen-md py-20 mx-auto">
                <div className="mb-4 flex items-center ">
                    <Rating size="md">
                        <RatingStar />
                        <RatingStar />
                        <RatingStar />
                        <RatingStar />
                        <RatingStar />
                    </Rating>
                </div>
                <Blockquote>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                        "Happiness depends on your mindset and attitude."
                    </p>
                </Blockquote>
                <figcaption className="mt-6 flex items-center space-x-3 justify-center">
                    <Avatar
                        rounded
                        size="xs"
                        img="react.svg"
                        alt="profile picture"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                        <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                            -Thuận Phát."
                        </cite>
                        <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                            CEO FuderrDev
                        </cite>
                    </div>
                </figcaption>
            </figure>
            <h2 className="py-5 text-center text-4xl text-sky-500 font-bold">
                Impressive In FuderrDev
            </h2>
            <div className="flex justify-center align-top pb-20 gap-10">
                <Card className="max-w-sm">
                    <div className="mb-4 flex items-center justify-between">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                            Latest Customers
                        </h5>
                        <a
                            href="#"
                            className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                            View all
                        </a>
                    </div>
                    <div className="flow-root">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0">
                                        <Avatar
                                            alt="Neil image"
                                            height="32"
                                            src="/images/people/profile-picture-1.jpg"
                                            width="32"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                            Neil Sims
                                        </p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        $320
                                    </div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0">
                                        <Avatar
                                            alt="Bonnie image"
                                            height="32"
                                            src="/images/people/profile-picture-3.jpg"
                                            width="32"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                            Bonnie Green
                                        </p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        $3467
                                    </div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0">
                                        <Avatar
                                            alt="Michael image"
                                            height="32"
                                            src="/images/people/profile-picture-2.jpg"
                                            width="32"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                            Michael Gough
                                        </p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        $67
                                    </div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0">
                                        <Avatar
                                            alt="Lana image"
                                            height="32"
                                            src="/images/people/profile-picture-4.jpg"
                                            width="32"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                            Lana Byrd
                                        </p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        $367
                                    </div>
                                </div>
                            </li>
                            <li className="pb-0 pt-3 sm:pt-4">
                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0">
                                        <Avatar
                                            alt="Thomas image"
                                            height="32"
                                            src="/images/people/profile-picture-5.jpg"
                                            width="32"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                            Thomes Lean
                                        </p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        $2367
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Card>
                <Card className="max-w-sm">
                    <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                        Work fast from anywhere
                    </h5>
                    <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
                        Stay up to date and move work forward with Flowbite on
                        iOS & Android. Download the app today.
                    </p>
                    <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                        <a
                            href="#"
                            className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
                        >
                            <svg
                                className="mr-3 h-7 w-7"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="apple"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                                />
                            </svg>
                            <div className="text-left">
                                <div className="mb-1 text-xs">
                                    Download on the
                                </div>
                                <div className="-mt-1 font-sans text-sm font-semibold">
                                    Mac App Store
                                </div>
                            </div>
                        </a>
                        <a
                            href="#"
                            className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
                        >
                            <svg
                                className="mr-3 h-7 w-7"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="google-play"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                                />
                            </svg>
                            <div className="text-left">
                                <div className="mb-1 text-xs">Get in on</div>
                                <div className="-mt-1 font-sans text-sm font-semibold">
                                    Google Play
                                </div>
                            </div>
                        </a>
                    </div>
                </Card>
            </div>
            <h2 className="py-5 text-center text-4xl text-sky-500 font-bold">
                Curious about FuderrDev
            </h2>
            <div>
                <Accordion className="pb-20">
                    <AccordionPanel>
                        <AccordionTitle>
                            What is the most important in this Company Tech?
                        </AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                FuderrDev is an open-source library of
                                interactive components built on top of Tailwind
                                CSS including buttons, dropdowns, modals,
                                navbars, and more.
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                Check out this guide to learn how to&nbsp;
                                <a
                                    href="https://flowbite.com/docs/getting-started/introduction/"
                                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                                >
                                    get started&nbsp;
                                </a>
                                and start developing websites even faster with
                                components on top of Tailwind CSS.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle>
                            Is there a Figma file available?
                        </AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Flowbite is first conceptualized and designed
                                using the Figma software so everything you see
                                in the library has a design equivalent in our
                                Figma file.
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                Check out the
                                <a
                                    href="https://flowbite.com/figma/"
                                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                                >
                                    Figma design system
                                </a>
                                based on the utility classes from Tailwind CSS
                                and components from Flowbite.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle>
                            What are the differences between Flowbite and
                            Tailwind UI?
                        </AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                The main difference is that the core components
                                from Flowbite are open source under the MIT
                                license, whereas Tailwind UI is a paid product.
                                Another difference is that Flowbite relies on
                                smaller and standalone components, whereas
                                Tailwind UI offers sections of pages.
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                However, we actually recommend using both
                                Flowbite, Flowbite Pro, and even Tailwind UI as
                                there is no technical reason stopping you from
                                using the best of two worlds.
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Learn more about these technologies:
                            </p>
                            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                                <li>
                                    <a
                                        href="https://flowbite.com/pro/"
                                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                                    >
                                        Flowbite Pro
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://tailwindui.com/"
                                        rel="nofollow"
                                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                                    >
                                        Tailwind UI
                                    </a>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </div>
        </>
    );
};

export default TrangChu;
