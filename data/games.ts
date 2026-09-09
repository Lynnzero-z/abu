export type Game = {
  slug: string;
  name: string;
  status: "coming-soon";
  summary: string;
};

export const games: Game[] = [
  {
    slug: "coming-soon",
    name: "军校小游戏",
    status: "coming-soon",
    summary: "互动小游戏会在后续阶段逐步加入。",
  },
];
