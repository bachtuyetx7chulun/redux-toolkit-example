import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ISetting {
  id: string;
  name: string;
  type: string;
}

export const settingApi = createApi({
  reducerPath: "settingApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://v2.jokeapi.dev/info" }),
  endpoints: (builder) => ({
    getSetting: builder.query<any, string>({
      query: (name) => `setting/${name}`,
    }),

    updateSetting: builder.mutation<any, any>({
      query: ({ id, ...patch }) => ({
        url: "/",
        method: "POST",
        body: patch,
      }),
    }),
  }),
});

export const { useGetSettingQuery, usePrefetch, useUpdateSettingMutation } = settingApi;
