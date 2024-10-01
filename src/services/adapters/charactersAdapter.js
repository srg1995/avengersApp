export const charactersAdapter = (charactersRecived) => {
  console.log(charactersRecived);
  const newCharacter = {
    length: charactersRecived?.count,
    activeCounter: 0,
    characters: charactersRecived?.results?.map((characters) => {
      const chara = characters;
      const newchara = {
        id: chara?.id,
        name: chara?.name,
        image: chara?.thumbnail?.path + "." + chara?.thumbnail?.extension,
        description: chara?.description,
        comics: chara?.comics,
        isLiked: false,
      };
      return newchara;
    }),
  };
  return newCharacter;
};
