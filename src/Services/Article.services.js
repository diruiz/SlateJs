import { mainUrl } from "../Utility/helper";


export const addArticle = async (article) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const url = `${mainUrl}Cds/Article`;
  const raw = JSON.stringify(article);
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  console.log(raw);

  const result = await fetch(url, requestOptions);
  const data = await result.json();
  return data;
}