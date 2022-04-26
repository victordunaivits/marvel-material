export function getComicsID(url: string | undefined) {
  if(typeof url === "undefined") return ""
  const separarURL = url.split("/");
  let id = separarURL[separarURL.length - 1];
  return id
}
