export type Product = {
  id: string;
  product_id: number;
  name: string;
  description: string;
  image_url: string;
  price: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};
