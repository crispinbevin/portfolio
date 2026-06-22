import { useQuery } from "@tanstack/react-query";
import {
  getAccount,
  getMMR,
  getMatches,
  getLifetimeMatches,
  getMMRHistory,
} from "../../api/valorant-stats";

const NAME = "crispyy"; // or pass as props/params
const TAG = "asf";
const REGION = "ap"; // eu, na, ap, kr, latam, br

export function useAccount() {
  return useQuery({
    queryKey: ["account", NAME, TAG],
    queryFn: () => getAccount(NAME, TAG),
    select: (res) => res.data,
  });
}

export function useMMR() {
  return useQuery({
    queryKey: ["mmr", NAME, TAG],
    queryFn: () => getMMR(REGION, NAME, TAG),
    select: (res) => res.data,
  });
}

export function useMatches() {
  return useQuery({
    queryKey: ["matches", NAME, TAG],
    queryFn: () => getMatches(REGION, NAME, TAG),
    select: (res) => res.data,
  });
}

export function useLifetimeMatches() {
  return useQuery({
    queryKey: ["lifetime", NAME, TAG],
    queryFn: () => getLifetimeMatches(REGION, NAME, TAG),
    select: (res) => res.data,
  });
}

export function useMMRHistory() {
  return useQuery({
    queryKey: ["mmrHistory", NAME, TAG],
    queryFn: () => getMMRHistory(REGION, NAME, TAG),
    select: (res) => res.data,
  });
}
