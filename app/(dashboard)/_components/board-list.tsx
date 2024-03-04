import { api } from "@/convex/_generated/api";
import EmptySearch from "./empty-search";
import EmptyBoards from "./empty-boards";
import EmptyFavorites from "./empty-favorites";
import NewBoardButton from "./new-board-button";
import { useQuery } from "convex/react";
import BoardCard from "./board-card";
import { toast } from "sonner";
import { Dot, InfoIcon } from "lucide-react"; 

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const makeToast = () => {
    toast.info(
      <div className="flex relative flex-col w-[300px] text-blue-800">
        <InfoIcon size={"24px"} className="absolute -top-2 -left-2 text-sm" />
        <p className="mt-6 flex justify-start items-center">
          <Dot /> Terms with length &lt;= 4 allow no typos
        </p>
        <br />
        <p className="flex justify-start items-center">
          <Dot /> Terms with 5 &lt; length &gt;= 8 allow 1 typo
        </p>
        <br />
        <p className="flex justify-start items-center">
          <Dot /> Terms with length &gt; 8 allow 2 typos
        </p>
      </div>
    );
  };

  const data = useQuery(api.boards.get, {
    orgId,
    ...query,
  });
  if (data === undefined) {
    return (
      <div>
        <h2 className="text-3xl">
          {query.favorites ? "Favorite boards" : "Team boards"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
          <NewBoardButton orgId={orgId} disabled isLoading={true} />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    );
  }

  if (!data?.length && query.search) {
    return     <EmptySearch />;

  }

  if (!data?.length && query.favorites) {
    return    <EmptyFavorites />

  }

  if (!data?.length) {
    return    <EmptyBoards />

  }

  return (
    <div>
      <h2 className="text-3xl">
        {query.favorites ? "Favorite boards" : "Team boards"}
      </h2>
      {query.search && (
        <>
          <p className="text-xs text-muted-foreground my-2">
            Why am i seeing Boards even with typo??
          </p>
          <p className="text-xs text-muted-foreground flex gap-1">
            <p className="text-blue-500" onClick={makeToast}>
              Typos
            </p>
            are defined in terms of{" "}
            <a
              className="text-blue-600"
              href="https://en.wikipedia.org/wiki/Levenshtein_distance"
            >
              Levenshtein distance.
            </a>
          </p>
        </>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-8 pb-10">
        <NewBoardButton orgId={orgId} />
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={board.isFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardList;
