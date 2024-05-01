"use client"

import { OrganizationSwitcher, UserButton, useOrganization } from "@clerk/nextjs"
import SearchInput from "./_components/searchInput"
import InviteButton from "./_components/inviteButton";
import Image from "next/image";

const Navbar = () => {
  const { organization } = useOrganization();
  return (
    <div className="flex items-center gap-x-4 p-4 ">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>

      <img onClick={() => { window.open("https://rzathere.itch.io/adiwashere", "_blank") }} className="rounded-xl cursor-pointer hover:scale-105 transition-all delay-150" width={"64"} alt="GamingZone" src={"https://assets-global.website-files.com/618d852d383de946ce0e3fa5/6495da7241185414c12ddc02_videoGamePlanet.PNG"} />
      <div className="block lg:hidden flex-1">
        <OrganizationSwitcher
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: '376px'
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
      </div>

      {organization && (
        <InviteButton />
      )}

      <UserButton />
    </div>
  )
}

export default Navbar