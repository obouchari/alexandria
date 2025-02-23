export type SignupFormData = {
  name: string;
  email: string;
  password: string;
};

export type ActionResponse = {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof SignupFormData]?: string[];
  };
  inputs?: SignupFormData;
};
