const a = null;
const b = 1;
const d = undefined;
const dd = 0;

// neu a = null | undefined => c = b
const c = a ?? b; // => tra ve b
const e = d ?? a; // => tra ve a
const f = a || dd || d;

const f1 = a || dd;
const f2 = f1 || d;

const str1 = "1";
const numm = +str1;
