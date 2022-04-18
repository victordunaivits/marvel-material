export interface IPersonagem {
  name: string;
  description: string;
  thumbnail: Thumb;
  comics: Comic;
  stories: Storie;
  id: number
}

type Storie = {
  items: [
    {
      resourceURI: string;
      name: string;
      type: string;
    }
  ];
};

type Comic = {
  items: [
    {
      resourceURI: string;
      name: string;
    }
  ];
};

type Thumb = {
  extension: string;
  path: string;
};
