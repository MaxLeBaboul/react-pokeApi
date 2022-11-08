import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { likefunc, dislikefunc } from "../../reducer/poketReducer";

const Pokemon = (props) => {
  const dispatch = useDispatch();
  const like = useSelector((state) => state.pokedex.like);
  const id = useSelector((state) => state.pokedex.id);
  const dislike = useSelector((state) => state.pokedex.dislike);
  const likeactive = useSelector((state) => state.pokedex.likeactive);
  const dislikeactive = useSelector((state) => state.pokedex.dislikeactive);
  // const [like, setLike] = useState(0);
  // const [dislike, setDislike] = useState(0);

  // const [likeactive, setLikeactive] = useState(false);
  // const [dislikeactive, setDislikeactive] = useState(false);

  // const likeFunc = async () => {
  //   if (!likeactive) {
  //     console.log(like);
  //     dispatch(likefunc(likeactive));
  //     dispatch(likefunc(like - 1));
  //   } else {
  //     dispatch(likefunc(!likeactive));
  //     dispatch(likefunc(like + 1));
  //     if (dislikeactive) {
  //       dispatch(likefunc(dislikeactive));
  //       dispatch(likefunc(like + 1));
  //       dispatch(likefunc(dislike - 1));
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
        <Link to={`/pokemon/${props.pokemon.id}`}>
          <Card.Img
            src={props.pokemon.sprites.front_default}
            style={{ width: "8rem" }}
            variant="top"
          />
        </Link>
        <Card.Body
          className={`${props.pokemon.types[0].type.name} rounded text-white`}
        >
          <Link to={`/pokemon/${props.pokemon.id}`} className="link-name">
            <Card.Title as="div">
              <strong>
                #{props.pokemon.id}{" "}
                {props.pokemon.name.charAt(0).toUpperCase() +
                  props.pokemon.name.slice(1)}
              </strong>
            </Card.Title>
          </Link>
          <Button className="mx-1 mb-2" onClick={() => dispatch(likefunc())}>
            Like {like}
          </Button>
          <Button className="mx-1 mb-2" onClick={() => dispatch(dislikefunc())}>
            disLike {dislike}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Pokemon;
