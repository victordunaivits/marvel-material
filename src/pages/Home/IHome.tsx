export interface IHome {
  id: number;
  thumbnail: Thumb;
  name: string;
}

type Thumb = {
  extension: string;
  path: string;
};
