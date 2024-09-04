export type TResponse<T> = {
  data: T;
  message: string;
  statusCode: number;
  success: boolean;
};

export type BaseEntity = {
  _id: string; // Unique identifier for the entity
  createdAt: string; // ISO string representation of creation date
  updatedAt: string; // ISO string representation of the last update date
};
