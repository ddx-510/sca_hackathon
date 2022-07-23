import { streamUrl } from "../utilities/url";

export async function login({ email, password }) {
  return await fetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      // If request is not successful, display error message
      if (!response.ok) {
        throw new Error("HTTP status " + response.status);
      }

      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function searchArtworks({ keyword }) {
  return await fetch(`/api/homepage/getArtworks/${keyword}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      // If request is not successful, display error message
      if (!response.ok) {
        throw new Error("HTTP status " + response.status);
      }

      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function listenFromStream(){
  const sse = new EventSource(streamUrl, { withCredentials: true });
  function getRealtimeData(data) {
    // process the data here,
    // then pass it to state to be rendered
  }
  sse.onmessage = e => getRealtimeData(JSON.parse(e.data));
  sse.onerror = () => {
    // error log here 
    sse.close();
  }
  return () => {
    sse.close();
  };
}
