export type GameSlideType = {
  id: string;
  name: string;
  header_image: string;
  screenshots: string[];
  short_description: string;
  price: number;
  mac: boolean;
  windows: boolean;
  linux: boolean;
  discount: string;
  genres: string[];
  tags: [
    {
      name: string;
      count: number;
    }
  ];
};

export type GameCardType = {
  id: string;
  name: string;
  header_image: string;
  price: number;
  discount: string;
};
