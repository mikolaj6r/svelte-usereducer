const randomString = () =>
  Math.random()
    .toString(36)
    .substring(7)
    .split('')
    .join('.')

export const ActionINIT = `@@svelte/INIT${randomString()}`;
export const ActionUNKNOWN = `@@svelte/PROBE_UNKNOWN_ACTION${randomString()}`