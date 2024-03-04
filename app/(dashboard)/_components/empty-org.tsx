"use client"
import { CreateOrganization } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { Player } from "@lottiefiles/react-lottie-player";

export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      {/* <Image
        src="/elements.svg"
        alt="Empty"
        height={200}
        width={200}
      /> */}
      
      {/* <Player src={"/Create-Org.json"} autoplay
  loop 
  style={{ height: '250px', width: '250px' }} /> */}
      <h2 className="text-2xl font-semibold mt-6">
        Welcome to Board
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create an organization to get started
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">
              Create organization
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};