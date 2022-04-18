export function getComicsID(url: string) {
  const separarURL = url.split("/");
  let id = separarURL[separarURL.length - 1];
  return id
}
