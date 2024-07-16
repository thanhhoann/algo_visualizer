import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

export default function NavBar() {
	return (
		<header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="lg:hidden">
						<MenuIcon className="h-6 w-6" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<Link href="#" prefetch={false}>
						<h1>thanhhoan@algo_visual</h1>
						<span className="sr-only">Acme Inc</span>
					</Link>
					<div className="grid gap-2 py-6">
						<Link
							href="#"
							className="flex w-full items-center py-2 text-lg font-semibold"
							prefetch={false}
						>
							About
						</Link>
						<Link
							href="#"
							className="flex w-full items-center py-2 text-lg font-semibold"
							prefetch={false}
						>
							Data Structures
						</Link>
						<Link
							href="#"
							className="flex w-full items-center py-2 text-lg font-semibold"
							prefetch={false}
						>
							Algorithms
						</Link>
					</div>
				</SheetContent>
			</Sheet>
			<div className="w-[150px]">
				<Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
					<h1>thanhhoan@algo_visual</h1>
					<span className="sr-only">Acme Inc</span>
				</Link>
			</div>
			<div className="flex w-full justify-center">
				<NavigationMenu className="hidden lg:flex">
					<NavigationMenuList>
						<NavigationMenuLink asChild />
						<NavigationMenuLink asChild>
							<Link
								href="#"
								className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
								prefetch={false}
							>
								About
							</Link>
						</NavigationMenuLink>
						<NavigationMenuLink asChild>
							<Link
								href="#"
								className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
								prefetch={false}
							>
								Data Structures
							</Link>
						</NavigationMenuLink>
						<NavigationMenuLink asChild>
							<Link
								href="#"
								className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
								prefetch={false}
							>
								Algorithms
							</Link>
						</NavigationMenuLink>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
			<div className="ml-auto w-[150px]">
				<Button>Get Started</Button>
			</div>{" "}
		</header>
	);
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
}
