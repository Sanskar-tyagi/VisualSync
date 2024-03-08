"use client";
import { useOrganization } from "@clerk/nextjs"; 
import { EmptyOrg } from "./_components/empty-org";
import BoardList  from "./_components/board-list";
import { useSearchParams } from "next/navigation";

const Dashboard = () => {
  const { organization } = useOrganization();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || undefined;
  const favorites = searchParams.get("favorites") || undefined
   

  return (
 
     <div className="flex-1 h-[calc(100%-80px)] p-6">
    {!organization ? (
      <EmptyOrg /> 
      ) : (
        <BoardList
        orgId={organization.id}
        query={{search, favorites }}
        /> 
        )}
  </div>
  
  )
}

export default Dashboard





// once you reach the destination youre given a map randomly 
// half of them is given a hunter job and half as saviour
// u need to save the close villages.

// the villages zone are spawned randomly on a radius bases where
// only 2 teams will be able to find their location.  
// they see red area that tells them that the location of a village is nearby
// and each team will get the exact location after some time
// Villages are high rewarding but they need to completly help them with other task
// like getting certain amount of woods and skins and etc
