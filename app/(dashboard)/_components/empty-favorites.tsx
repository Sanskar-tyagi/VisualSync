"use client"
import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

const EmptyFavorites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      {/* <Player
        src="/favs.json"
        loop
        autoplay
        style={{ height: "350px", width: "350px" }}
      /> */}
      <h2 className="text-2xl font-semibold mt-6">No favorite boards!</h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Try favoriting a board
      </p>
    </div>
  );
};
export default EmptyFavorites;
