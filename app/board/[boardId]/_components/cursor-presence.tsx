"use client"
import { shallow } from "@liveblocks/client";
import {memo} from "react";
import { useOthersConnectionIds, useOthersMapped } from "@/liveblocks.config";
import Cursor from "./cursor";
import { colorToCss } from "@/lib/utils";
import { Path } from "./path";

const Cursors=()=>{
    const ids=useOthersConnectionIds();
    
    return (
        <>
        {ids.map((id)=><Cursor key={id} connectionId={id}/>)}
        </>
    )
}
const Drafts = () => {
  const others = useOthersMapped((other) => ({
    pencilDraft: other.presence.pencilDraft,
    penColor: other.presence.penColor,
  }), shallow);

  return (
    <>
      {others.map(([key, other]) => {
        if (other.pencilDraft) {
          return (
            <Path
              key={key}
              x={0}
              y={0}
              points={other.pencilDraft}
              fill={other.penColor ? colorToCss (other.penColor) : "#000"}
            />
          );
        }

        return null;
      })}
    </>
  )
}

const CursorsPresence = memo(() => {
  return (
    <> 

        <Cursors /> 
    </>
  )
})
CursorsPresence.displayName = 'CursorsPresence'

export default CursorsPresence