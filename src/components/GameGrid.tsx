import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleten from "./GameCardSkeleten";

import React from "react";

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  const fetchGameCount = data?.pages
    ? data.pages.reduce((total, page) => total + page.results.length, 0)
    : 0;

  console.log(fetchGameCount);

  if (error) return <Text>{error.message}</Text>;
  return (
    <>
      <InfiniteScroll
        dataLength={fetchGameCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={3}
          padding="10px"
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleten key={skeleton} />
              </GameCardContainer>
            ))}

          {data?.pages.map((page, i) => (
            <React.Fragment key={i}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard key={game.id} game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
      {/* <div>
        <button
          className="btn btn-success"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div> */}
    </>
  );
};

export default GameGrid;
