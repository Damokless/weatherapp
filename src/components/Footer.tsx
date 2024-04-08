import { Button, Divider, Link } from "@nextui-org/react";

export default function Footer() {
	return (
		<div className="w-full flex flex-col justify-center items-center my-16 gap-8 absolute bottom-0">
			<div className="flex justify-center items-center gap-2">
				<p className="font-bold text-inherit">
					Weather App By{" "}
					<Link isExternal href="https://github.com/Damokless">
						Damokles
					</Link>
				</p>
			</div>
			<div className="flex gap-4 mb-16">
				<Button
					startContent={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							className=" w-6 h-6 fill-white"
						>
							<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
						</svg>
					}
					aria-label="Github icon"
					as={Link}
					href="https://github.com/Damokless"
					isExternal
				>
					Github Profile
				</Button>
				<Button
					startContent={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
							className="w-6 h-6"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
							/>
						</svg>
					}
					aria-label="Folder icon"
					as={Link}
					href="https://github.com/Damokless/weatherapp"
					isExternal
				>
					Repository
				</Button>
				<Button
					startContent={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className=" w-6 h-6 fill-white"
							viewBox="0 0 24 24"
						>
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
						</svg>
					}
					aria-label="Linkedin icon"
					as={Link}
					href="https://www.linkedin.com/in/alexandre-bouzon/"
					isExternal
				>
					Linkedin Profile
				</Button>
			</div>
			<Divider className="w-11/12 bg-white" />
			<div className="w-full flex justify-center items-center px-16">
				<h2 className="text-sm">
					&copy;{" "}
					{new Date().toLocaleDateString("fr-fr", {
						year: "numeric",
					})}{" "}
					Damokles Project, ALL RIGHTS RESERVED
				</h2>
			</div>
		</div>
	);
}
