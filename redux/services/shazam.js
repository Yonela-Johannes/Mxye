import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://spotify117.p.rapidapi.com",
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '605ea907bcmsh7cc427f7dade3aap100724jsn211031b99485');
            return headers
        },
    }),
    endpoints: (builder) => ({
        getSongsByCountry: builder.query({ query: () => `https://spotify117.p.rapidapi.com/new_releases/`}),
        getSongDetails: builder.query({ query: ({songid}) => `track_about/?track_id=${songid}`}),
        getSongLyrics: builder.query({ query: ({songid}) => `track_about/?track_id=${songid}`}),
    })
})


export const {
    useGetSongsByCountryQuery,
    useGetSongDetailsQuery,
    useGetSongLyricsQuery
} = shazamCoreApi;
