import type { Member } from "./members";

export type FoodReview = {
  name: string;
  kind: "good" | "bad";
  note: string;
};

export type Travel = {
  slug: string;
  place: string;
  time: string;
  companions: Pick<Member, "slug" | "name">[];
  story: string;
  photos: string[];
  foodReviews: {
    good: FoodReview[];
    bad: FoodReview[];
  };
};

export const travels: Travel[] = [];

export function getTravelBySlug(slug: string) {
  return travels.find((travel) => travel.slug === slug);
}
