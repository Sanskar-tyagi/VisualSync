"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard, Star } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
const OrgSidebar = () => {
const params = useSearchParams();
const favorites = params.get("favorites"); 
  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image src="logo.svg" width={45} height={45} alt="Logo" />
          <span className={cn("font-semibold text-xl", font.className)}>
            VisualSync
          </span>
        </div>
      </Link>
      <OrganizationSwitcher
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              justifyContent: "space-between",
              backgroundColor: "white",
            },
          },
        }}
      />
      <div className="space-y-1 w-full">
        <Button asChild  size={"lg"} 
        variant={favorites?"ghost":"secondary"}
        className="font-normal justify-start px-2  w-full">
          <Link href="/">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Team Board
          </Link>
        </Button>
        <Button asChild  size={"lg"} 
          variant={favorites ? "secondary":"ghost"}

        className="font-normal justify-start px-2  w-full">
          <Link href={
            {pathname:"/",query:{favorites:"true"}}
          }>
            <Star className="h-4 w-4 mr-2" />
            Fav Board
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default OrgSidebar;
