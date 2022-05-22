import React from "react";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import { useWishList } from "../../StateManagement/Contexts/WishListContext/WishListContext";
import Container from "../../Components/Container";
import WishListCard from "../../Components/WishListCard";
import EmptyCard from "../../Components/EmptyCard/EmptyCard";

const WishList = () => {
  useDocumentTitle("Wishlist");
  const {
    state: { wishList },
  } = useWishList();

  return (
    <Container>
      <div className={wishList.length !== 0 ? `container` : ``}>
        <div
          className={
            wishList.length === 0
              ? `center_aligned flex flex-center`
              : `content flex wrap`
          }
        >
          {wishList?.map((product) => (
            <WishListCard key={product._id} {...product} />
          ))}
          {wishList.length === 0 && (
            <EmptyCard
              card="wishlist"
              text="You have no items in your wishlist."
              action="Start Adding"
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export { WishList };
