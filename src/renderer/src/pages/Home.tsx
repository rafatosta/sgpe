import { DarkThemeToggle } from "flowbite-react";
import { Button } from "flowbite-react";

import patternLight from '../assets/pattern-light.svg'
import patternDark from '../assets/pattern-dark.svg'

function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-24 dark:bg-gray-900">
            <div className="absolute inset-0 size-full">
                <div className="relative h-full w-full select-none">
                    <img
                        className="absolute right-0 min-w-dvh dark:hidden"
                        alt="Pattern Light"
                        src={patternLight}
                    />
                    <img
                        className="absolute right-0 hidden min-w-dvh dark:block"
                        alt="Pattern Dark"
                        src={patternDark}
                    />
                </div>
            </div>
            <div className="absolute top-4 right-4">
                <DarkThemeToggle />
            </div>

            <div className="relative flex w-full max-w-5xl flex-col items-center justify-center gap-12">

                <Button>Click me</Button>

            </div>
        </main>);
}

export default Home;