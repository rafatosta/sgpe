
import { Button } from "flowbite-react";

import Background from "@renderer/components/Background";

function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-24 dark:bg-gray-900">
            <Background />
            <div className="relative flex w-full max-w-5xl flex-col items-center justify-center gap-12">
                <Button>Click me</Button>
            </div>
        </main>);
}

export default Home;