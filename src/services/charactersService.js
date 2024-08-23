const md5 = require("md5"); // Necesitas instalar 'md5' con npm si estás en Node.js

const publicKey = "0d55ca0d29a81abd698519156776c841";
const privateKey = "44067858fc512f83b96383792c1b02f77be7488a";
const ts = new Date().getTime();
const hash = md5(ts + privateKey + publicKey);

export const fetchCharacters = async (nameStartsWith) => {
  let url;
  if (nameStartsWith) {
    url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=50&nameStartsWith=${nameStartsWith}`;
  } else {
    url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=50`;
  }
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Fallo en el servicio: " + response.statusText);
    }
    const result = await response.json();
    return result?.data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
};

export const fetchComicImage = async (path) => {
  const url = `${path}?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=20`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Fallo en el servicio: " + response.statusText);
    }
    const result = await response.json();

    return (
      result?.data?.results[0]?.thumbnail?.path +
      "." +
      result?.data?.results[0]?.thumbnail?.extension
    );
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
};
