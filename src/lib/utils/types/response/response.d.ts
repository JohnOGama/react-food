type GenericResponse<T> = {
  data: T;
  error?: string;
  message?: string;
  ok: boolean;
};