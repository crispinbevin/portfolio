const henrikFetch = async (path) => {
  const encoded = encodeURIComponent(path.replace(/^\//, ""));
  const res = await fetch(`/api/valorant-stats?path=${encoded}`);
  if (!res.ok) throw new Error(`Henrik API error: ${res.status}`);
  return res.json();
};

const name = "crispyy";
const tag = "asf";
const region = "ap";

// Account info + current rank
export const getAccount = () =>
  henrikFetch(`valorant/v2/account/${name}/${tag}`);

// MMR + rank history
export const getMMR = () =>
  henrikFetch(`valorant/v3/mmr/${region}/pc/${name}/${tag}`);

// Recent matches (size = number of matches, max 10 per call)
export const getMatches = (size = 10) =>
  henrikFetch(`valorant/v4/matches/${region}/pc/${name}/${tag}?size=${size}`);

// Lifetime match stats (all modes, paginated)
export const getLifetimeMatches = () =>
  henrikFetch(`valorant/v1/lifetime/matches/${region}/pc/${name}/${tag}`);

// MMR history (rank changes over time)
export const getMMRHistory = () =>
  henrikFetch(`valorant/v1/mmr-history/${region}/pc/${name}/${tag}`);
