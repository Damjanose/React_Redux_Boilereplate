
import { apiSlice } from "../apiSlice/apiSlice";
export const reactreduxtemplateApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReactreduxtemplates: builder.query({
      query: (query) => {
        return {
          url: `/reactreduxtemplates?${query}`,
        };
      },
    }),
    getReactreduxtemplateById: builder.query({
      query: (id) => `/reactreduxtemplates/${id}`,
    }),
    addReactreduxtemplate: builder.mutation({
      query: (info) => {
        return {
          url: "/reactreduxtemplates",
          method: "POST",
          body: info,
        };
      },
    }),
    editReactreduxtemplate: builder.mutation({
      query: (info) => {
        return {
          url: `/reactreduxtemplates/${info._id}`,
          method: "PATCH",
          body: info,
        };
      },
    }),
    deleteReactreduxtemplate: builder.mutation({
      query: (id) => {
        return {
          url: `/reactreduxtemplates/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});
export const {
  useGetReactreduxtemplatesQuery,
  useAddReactreduxtemplateMutation,
  useDeleteReactreduxtemplateMutation,
  useEditReactreduxtemplateMutation,
  useGetReactreduxtemplateByIdQuery,
} = reactreduxtemplateApi;
