import { Product, Table, User } from '@prisma/client';

export class Order {
  id?: string;
  user?: User;
  table?: Table;
  createdAt?: Date;
  updatedAt?: Date;
  products?: Product[];
}
