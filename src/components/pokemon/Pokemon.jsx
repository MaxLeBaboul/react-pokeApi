import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { likefunc } from "../../reducer/poketReducer";

const Pokemon = ({ pokemon }) => {
  const dispatch = useDispatch();
  // const [like, setLike] = useState(0);
  // const [dislike, setDislike] = useState(0);

  // const [likeactive, setLikeactive] = useState(false);
  // const [dislikeactive, setDislikeactive] = useState(false);

  // const likefunc = async () => {
  //   if (likeactive) {
  //     setLikeactive(false);
  //     setLike(like - 1);
  //   } else {
  //     setLikeactive(true);
  //     setLike(like + 1);
  //     if (dislikeactive) {
  //       setDislikeactive(false);
  //       setLike(like + 1);
  //       setDislike(dislike - 1);
  //     }
  //   }
  // };

  // const dislikefunc = async () => {
  //   if (dislikeactive) {
  //     setDislikeactive(false);
  //     setDislike(dislike - 1);
  //   } else {
  //     setDislikeactive(true);
  //     setDislike(dislike + 1);
  //     if (likeactive) {
  //       setLikeactive(false);
  //       setDislike(dislike + 1);
  //       setLike(like - 1);
  //     }
  //   }
  // };
  return (
    <div>
      <Card
        className="my-3 p-3 rounded text-center shadow mb-5 bg-white"
        style={{ border: "none" }}
      >
        <Link to={`/pokemon/${pokemon.id}`}>
          <Card.Img
            src={pokemon.sprites.front_default}
            style={{ width: "8rem" }}
            variant="top"
          />
        </Link>
        <Card.Body
          className={`${pokemon.types[0].type.name} rounded text-white`}
        >
          <Link to={`/pokemon/${pokemon.id}`} className="link-name">
            <Card.Title as="div">
              <strong>
                #{pokemon.id}{" "}
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </strong>
            </Card.Title>
          </Link>
          <Button
            className="mx-1 mb-2"
            onClick={() => dispatch(likefunc(pokemon.id))}
          >
            Like
          </Button>
          <Button className="mx-1 mb-2">disLike</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Pokemon;
