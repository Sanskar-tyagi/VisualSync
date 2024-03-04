import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from "../ui/button"
import { useRenameModal } from "@/store/use-rename-modal"
import { FormEventHandler, useEffect, useState } from "react"
import { Input } from "../ui/input"
import { useApiMutation } from "@/hooks/use-api-mutation"
import { api } from "@/convex/_generated/api"
import { toast } from "sonner"
import SimpleLoader from "../Loaders/simple-loader"
export const RenameModal = () => {
  const {mutate,pending}=useApiMutation(api.board.update)
  const{isOpen,onClose,initialValues}=useRenameModal()
  const [title,setTitle]=useState(initialValues.title);

  useEffect(()=>{
    setTitle(initialValues.title)
  },[initialValues.title])

    const onSubmit:FormEventHandler<HTMLFormElement>=(e)=>{
     e.preventDefault();
     toast.promise(() =>
     mutate({
       id: initialValues.id,
       title
     }), {
     loading: 'Saving Updates...',
     success: () => {
       onClose()
       return`${title} Board has been renamed`},
     error: 'Oops! Something went wrong'
   })

      
    }
  return (
    <Drawer onDrag={onClose} open={isOpen}> 
  <DrawerContent  style={{background:"rgb(9,9,11)"}}>
  <div className="mx-auto w-full max-w-sm" style={{background:"rgb(9,9,11)"}}>
    <DrawerHeader>
      <DrawerTitle className="text-white">Are you absolutely sure?</DrawerTitle>
      <DrawerDescription className=" text-muted-foreground">This action cannot be undone.</DrawerDescription> 
    </DrawerHeader>
    <form onSubmit={onSubmit}>
      <div className="p-4">

        <Input required
        maxLength={60} 
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}} 
        disabled={pending}/> 
        </div>
    <DrawerFooter>
      <Button className="relative" disabled={pending} type="submit">
      {
        pending ?<>
        <SimpleLoader color="white"/>
        </>:"Save"
      }

      </Button>
      <DrawerClose asChild> 
      <Button type="button" variant="outline" onClick={onClose}>Cancel</Button> 
            </DrawerClose>
    </DrawerFooter>
    </form>
    </div>
  </DrawerContent>
</Drawer>
  )
}
