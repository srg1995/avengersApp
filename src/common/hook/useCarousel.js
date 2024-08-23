import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharactersContext } from "../context/CharactersContextProvider";
import { fetchComicImage } from "../../services/charactersService";

export default function useCarousel() {
  const { id } = useParams();
  const { charactersData } = useContext(CharactersContext);
  const [characterDetail, setCharacterDetail] = useState({});
  const findCharacterById = async (id) => {
    const chara = charactersData?.characters?.find(
      (character) => character.id === id
    );

    if (chara) {
      const updatedItems = await Promise.all(
        chara?.comics?.items?.map(async (item) => ({
          ...item,
          image: await handleImage(item?.resourceURI),
        }))
      );

      return {
        ...chara,
        comics: {
          ...chara?.comics,
          items: updatedItems,
        },
      };
    }
  };
  useEffect(() => {
    const fetchCharacter = async () => {
      if (id && charactersData) {
        try {
          const result = await findCharacterById(parseInt(id));
          setCharacterDetail(result);
        } catch (error) {
          console.error("Error fetching character:", error);
        }
      }
    };
    fetchCharacter();
    // eslint-disable-next-line
  }, [id, charactersData]);

  const handleImage = async (path) => {
    const a = await fetchComicImage(path);
    return a;
  };

  return { characterDetail };
}
