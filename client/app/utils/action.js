// Generic action - where argument name is forwarded as is in directory
export default function action(TYPE, ...keys) {
  return (...values) => {
    const axn = { type: TYPE };
    // Only set the defined keys in order (others are 'undefined' automatically)
    values.map((v, i) => {
      axn[keys[i]] = v;
    });
    return axn;
  };
}
