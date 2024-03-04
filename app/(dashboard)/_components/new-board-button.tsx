"use client";
import { toast } from "sonner";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import SimpleLoader from "@/components/Loaders/simple-loader";

interface NewBoardButtonProps{
    orgId:string;
    disabled?:boolean; 
    isLoading?:boolean;
}
const NewBoardButton = ({orgId,disabled ,isLoading}:NewBoardButtonProps) => {
  const router = useRouter();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    mutate({
      orgId,
      title: "New board"
    })
      .then((id) => {
        toast.success("Board created"); 
        router.push(`/board/${id}`) 
      })
      .catch(() => toast.error("Failed to create board"));
  }

  return (
    <button
    disabled={pending || disabled}
    onClick={onClick}
    className={cn(
      "relative col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
      (pending || disabled) && "opacity-75 hover:bg-blue-600 cursor-not-allowed"
    )}
  >
    <div />
      {
        (pending || disabled) ? (
          <>
          <SimpleLoader color={"white"}/>
          {
            isLoading ? <p className="text-sm mt-12 text-white font-light">
          Looking for Your boards...
          </p> :
          <p className="text-sm mt-12 text-white font-light">
          Generating your board...
          </p> 
          }

          </>
        ) : (
        <>
          <Plus className="text-white" />
          <p className="text-sm  text-white font-light">
          New board
        </p>
        </>

        )
      }
   
  </button>
  )
}

export default NewBoardButton