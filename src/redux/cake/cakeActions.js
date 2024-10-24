export function buyCake(payload = 1) {
  return {
    type: 'BUY_CAKE',
    payload,
  };
}
