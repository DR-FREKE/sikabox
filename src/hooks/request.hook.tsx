import axios from "axios";
import { useState } from "react";
import { DataType } from "../lib/types";

export enum MethodType {
  Get = "get",
  Post = "post",
}

interface RequestType {
  url: string;
  method: MethodType;
  onSuccess?: Function;
}

export interface ErrorState {
  message: string;
  field: string;
}

type AppRequest = {
  errors: ErrorState[];
  makeRequest: (data?: DataType) => Promise<void>;
  loading: boolean;
  data?: any;
};

export const useRequest = ({ url, method, onSuccess }: RequestType): AppRequest => {
  const [errors, setErrors] = useState<ErrorState[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState(null);
  // const {error, addError} = useError()

  const makeRequest = async (body?: DataType): Promise<void> => {
    setLoading(true);

    try {
      setErrors([]);
      const response = await axios[method](url, body);
      setLoading(false);
      if (onSuccess) onSuccess(response.data);
      setData(response.data);
      return response.data;
    } catch (err: any) {
      setLoading(false);
      setErrors(err.response.data.errors);
    }
  };

  return { makeRequest, errors, loading, data };
};
