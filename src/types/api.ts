export type User = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

export type Task = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
};

export type Credentials = {
  email: string;
  password: string;
};

export type ApiResponse = {
  token: string;
};

export type APITaskResponse = {
  ID: string;
  name: string;
  description: string;
  start_time: Date;
  end_time: Date;
  userID: string;
  Active: boolean;
  CreatedAt: Date;
  UpdatedAt: Date;
};
