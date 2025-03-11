export type StepResult<T = undefined> = {
  success: boolean;
  message: string;
  data: T;
};
