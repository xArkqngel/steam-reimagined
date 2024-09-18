export type GameQueryType = {
  id: string;
  name: string;
  header_image: string;
  screenshots: string[];
  short_description: string;
  price: number;
  discount: string;
  genres: string[];
  tags: [
    {
      name: string;
      count: number;
    }
  ];
};
