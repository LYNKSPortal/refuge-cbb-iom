export type Review = {
  name: string;
  quote: string;
  source: "Facebook" | "Google";
};

// Real customer reviews via Refuge's Facebook page (100% recommend, 21 reviews).
export const reviews: Review[] = [
  {
    name: "Kate Louise Grimes",
    source: "Facebook",
    quote:
      "Gorgeous restaurant with lovely attentive staff. The food is stunning — one of the best places that I have eaten on the Island, and the most amazing peach margarita too.",
  },
  {
    name: "Sureshni Bruce",
    source: "Facebook",
    quote:
      "Amazing food and cocktails with friendly staff and fantastic ambience. Cannot recommend this place enough.",
  },
  {
    name: "Kevin Birchall",
    source: "Facebook",
    quote:
      "My wife and I popped in for a bit of brunch and cocktails and it was lovely. Great food, great vibe, great service.",
  },
  {
    name: "Katie McAleer",
    source: "Facebook",
    quote: "The best eggs Benedict I have ever had — absolutely delicious.",
  },
  {
    name: "Claire Louise",
    source: "Facebook",
    quote:
      "My friends and I thoroughly enjoyed our meals at Refuge. The new menu is terrific, the service exceptional, the food sublime. Looking forward to visiting again soon.",
  },
  {
    name: "Ben Carling",
    source: "Facebook",
    quote:
      "Just back from a private function. Lovely place, designed really well — Rob and staff friendly, polite and very attentive. Looking forward to going back already.",
  },
  {
    name: "Samantha Bennett",
    source: "Facebook",
    quote:
      "Amazing food, great staff and brilliant atmosphere! Will 100% be back.",
  },
  {
    name: "Sharon Nugent",
    source: "Facebook",
    quote:
      "Fantastic night — food was exceptional with great service and a lovely atmosphere. I would highly recommend trying here; we will definitely be back.",
  },
  {
    name: "Jane Gregory",
    source: "Facebook",
    quote:
      "Went for lunch today — the food was exceptional and the service was outstanding. Highly recommended.",
  },
  {
    name: "Jeanette Christian",
    source: "Facebook",
    quote:
      "Lovely food, great staff — will be back for a girly lunch again soon. Cosy atmosphere.",
  },

];

// Real customer reviews via Google.
reviews.push(
  { name: "Dawn Thomas", source: "Google", quote: "Had a wonderful night for our wedding anniversary. When we mentioned it was our anniversary we were given a complimentary glass of champagne which made us feel special. The food and drinks were amazing, the staff attentive and friendly and the atmosphere was lovely." },
  { name: "Elizabeth Hughes", source: "Google", quote: "We visited Refuge for my birthday and had an exceptional experience. The food was outstanding, the wine selection was excellent, and the service was faultless from start to finish." },
  { name: "Simon L", source: "Google", quote: "Had a lovely evening. The menu excited the taste buds immediately, especially when one of the team explained some of the specials. Lovely team and a nicely curated wine list." },
  { name: "Daniel Davison", source: "Google", quote: "From the moment we arrived, the experience was faultless. Everything from the service to the final bite of dessert was genuinely exceptional." },
  { name: "Massimo Formby", source: "Google", quote: "They do the best steak sandwich I've had on the Isle of Man. Will be back with more people!" },
  { name: "Nicole Gera", source: "Google", quote: "Delicious festive three-course menu with lots of interesting variety and exciting flavours. King scallops were exceptional, as were the fried gnocchi in lemon cream sauce." },
  { name: "Joe Boardman", source: "Google", quote: "Salmon and eggs was awesome and the charcuterie for lunch was spot on. One of the best espresso martinis I've had as well. Amazingly attentive staff, comfortable setting and 10/10 food." },
  { name: "Emma Maddocks", source: "Google", quote: "We booked my parents in for their anniversary and Rob and the team couldn't do enough to make it special for them. They had the best time and the food was beautiful." },
  { name: "Shirley Anne Thornton", source: "Google", quote: "Had a great experience from start to finish. Atmosphere is lovely, staff are excellent, food was absolutely fabulous." },
  { name: "Richard Corlett", source: "Google", quote: "Relaxed atmosphere, great for business or pleasure. Impeccable service and food." },
  { name: "Sam Coley", source: "Google", quote: "We enjoyed a brilliant meal here — service and food was incredible. Highly recommend if in Douglas!" },
  { name: "Charlie Mitchell", source: "Google", quote: "This place is a real gem. The meal was excellent and the staff were great. Will return when next on the Isle of Man." },
  { name: "Laura Fox", source: "Google", quote: "Always a joy — never had a bad meal (or drink) in there in my life!" },
  { name: "Rob Burton", source: "Google", quote: "Another amazing meal this evening. Service superb and food so good. Can't recommend it enough." },
  { name: "Kristina Little", source: "Google", quote: "The best restaurant — perfectly cooked fish, steak and seafood." },
  { name: "Aileen Ellis", source: "Google", quote: "Excellent service, amended cocktails to suit my tastes, beautifully prepared food. So good we are going again next week — which says it all!" },
);
