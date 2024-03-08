"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navbarText } from "@/content/navbar/navbar";
import { navbarLinks } from "@/content/navbar/navbar-links";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import ThemeToggle from "../theme/ThemeToggle";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex z-50 justify-between px-4 py-2 items-center bg-background text-foreground border-b">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/logo.jpg"
          alt="logo bde"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="text-xl font-semibold">{navbarText.title}</span>
      </Link>
      <div className="hidden md:flex">
        {navbarLinks.map(({ label, links }, index) => (
          <Fragment key={index}>
            {label ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex gap-1">
                    {label} <ChevronDown size={20} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {links.map(({ href, icon: Icon, label }, index) => (
                    <DropdownMenuItem asChild key={index}>
                      <Link href={href} className="flex gap-2 items-center">
                        {Icon && <Icon />}
                        {label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                href={links[0].href}
                className={cn(buttonVariants({ variant: "ghost" }))}
              >
                {links[0].label}
              </Link>
            )}
          </Fragment>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="block md:hidden">
            <Button variant="ghost" className="flex gap-1">
              <Menu size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {navbarLinks.map(({ links }, index) => (
              <Fragment key={index}>
                {links.map(({ href, icon: Icon, label }, index) => (
                  <DropdownMenuItem key={index} asChild>
                    <Link href={href} className="flex gap-2 items-center">
                      {Icon && <Icon />}
                      {label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                {index < navbarLinks.length - 1 && <DropdownMenuSeparator />}
              </Fragment>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
