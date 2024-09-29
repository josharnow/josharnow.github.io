type Content = {
  title: string;
  description: string;
  content?: React.ReactNode | any;
  imageSrc?: string;
  imageAlt?: string;
  category?: string;
}
type ContentArrContainer = {
  [key: string]: Content[];
}