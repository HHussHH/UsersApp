export const loadPage = (
  perPage: number,
  nextPage: number,
  total: number
): number => {
  if (perPage + nextPage >= total) {
    return (perPage = total);
  } else {
    return (perPage += nextPage);
  }
};

export const backLoadPage = (perPage: number, initPage: number): number => {
  return (perPage = initPage);
};
