import { ts, hash } from "../../data";

export async function apiPersonagem(
  personagemID: number | null,
  setPersonagem: Function,
  setIdComic: Function,
  setDescription: Function,
  idComic: any
) {
  await fetch(
    `http://gateway.marvel.com/v1/public/characters/${personagemID}?ts=${ts}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}`
  )
    .then((res) => res.json())
    .then((res) => {
      // Abre a API com o index
      setPersonagem(res.data.results[0]);
      apiStorie(idComic, setIdComic, setDescription);
    });
}

export async function apiStorie(
  idComic: string,
  setIdComic: Function,
  setDescription: Function
) {
  await fetch(
    `https://gateway.marvel.com:443/v1/public/stories/${idComic}?ts=${ts}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}`
  )
    .then((res) => res.json())
    .then((res) => {
      setIdComic(res.data.results[0].id);
      setDescription(res.data.results[0].title);
    }); 
}

export function handleLista(listComics: Array<any> | null, valor: string) {
  if (listComics === null || listComics === undefined ) return null;
  const tempList = listComics.filter((comic: any) => comic.id === valor);

  return tempList[0];
}
