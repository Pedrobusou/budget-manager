export const getRemainingClass = (budget, remaining) => {
  let className;

  if (budget / 4 > remaining) {
    //remaining<25%
    className = 'alert alert--danger';
  } else if (budget / 2 > remaining) {
    //remaining<50%
    className = 'alert alert--warning';
  } else {
    className = 'alert alert--success';
  }

  return className;
};
