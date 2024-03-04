"use client"
import Canvas from  './_components/canvas'
import Room from '@/components/room'; 
import CanvasLoading from './_components/canvas-loading';

interface BoardIdPageProps {
    params: {
      boardId: string;
    };
  };
  
  const BoardIdPage = ({
    params,
  }: BoardIdPageProps) => {  

    // return  <CanvasLoading/>


  return (
    <main
      className="h-full w-full relative bg-neutral-100 touch-none"
    >
      <Room roomId={params.boardId} fallback={<CanvasLoading />}> 
        <Canvas boardId={params.boardId} />
      </Room>
        
    </main>
  )
}

export default BoardIdPage