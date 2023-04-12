import nodeFetchImpl from "node-fetch";

let fetchImpl;
if (__BROWSER__) {
  fetchImpl = globalThis.fetch;
} else {
  fetchImpl = nodeFetchImpl;
}

export default fetchImpl;
