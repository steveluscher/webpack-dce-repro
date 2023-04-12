# Repro

```
npm i
npm run build
```

## Actual result

Observe that when `__BROWSER__` is `true`, this code:

```ts
import nodeFetchImpl from "node-fetch";

let fetchImpl;
if (__BROWSER__) {
  fetchImpl = globalThis.fetch;
} else {
  fetchImpl = nodeFetchImpl;
}

export default fetchImpl;
```

…gets transformed to this:

```js
import*as e from"node-fetch";var r={544:r=>{r.exports=e}},t={};function o(e){var a=t[e];if(void 0!==a)return a.exports;var s=t[e]={exports:{}};return r[e](s,s.exports,o),s.exports}var a,s,p={};s=p,Object.defineProperty(s,"X",{value:!0}),o(544),a=globalThis.fetch,s.Z=a;var f=p.X,v=p.Z;export{f as __esModule,v as default};
```

## Expected result

Since:

1. `node-fetch` has `"sideEffects": false` in its package.json
2. The `node-fetch` import is unreachable when `__BROWSER__` is `true`

I would expect the compiled output _not_ to contain `import*as e from"node-fetch";`
