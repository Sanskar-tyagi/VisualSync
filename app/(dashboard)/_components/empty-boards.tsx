"use client" 
import SimpleLoader from '@/components/Loaders/simple-loader';
import { Button } from '@/components/ui/button';
import { api } from '@/convex/_generated/api';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { useOrganization } from '@clerk/nextjs';  
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'sonner';

const EmptyBoards = () => {
    const {organization}=useOrganization()
    const router = useRouter(); 
    const {mutate,pending}=useApiMutation(api.board.create);
    if(!organization) return;
    const onClick=()=>{
        mutate({
            orgId:organization.id,
            title:"untities"
        })
        .then((id)=> {
           toast.success("Board created successfully")
          router.push(`/board/${id}`) 
        }
        )
        .catch((error)=>toast.error("Failed to create board"))
    }
  return (
    <div className="h-full flex flex-col items-center justify-center">
    {/* <Player
      src="/Create-board.json"
      loop 
      autoplay
      style={{ height: '300px', width: '300px' }}
       
    /> */}
     <h2 className="text-2xl font-semibold mt-6">
        Create your first board!
      </h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button size="lg" disabled={pending} onClick={onClick}>
          {
            pending ?
            <SimpleLoader/>
            :"Create board"
          }
        </Button>
      </div>
  </div>
  )
}

export default EmptyBoards