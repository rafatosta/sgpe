import { DarkThemeToggle } from "flowbite-react";

function Background(): React.JSX.Element {
  return (
    <>
      <div className="absolute top-4 right-4">
        <DarkThemeToggle />
      </div>
    </>
  )
}

export default Background
