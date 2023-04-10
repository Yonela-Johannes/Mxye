import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const musicApi = createApi({
    reducerPath: 'musicApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam-song-recognizer.p.rapidapi.com",
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '34ae51b724mshdb30bf885ce3511p1e8f90jsn61649cfcf55f');
            return headers
        },
    }),
    endpoints: (builder) => ({
        getSongsByCountry: builder.query({ query: () => `top_country_tracks/?country_code=ZA&limit=100&start_from=1`}),
        getSongDetails: builder.query({ query: (id) => `track_about/?track_id=${id}`}),
        getSongLyrics: builder.query({ query: (id) => `song/lyrics/?id=${id}`}),
    })
})


export const videoApi = createApi({
  reducerPath: 'videoApi',
  baseQuery: fetchBaseQuery({
      baseUrl: 'https://youtube-v2.p.rapidapi.com',
      prepareHeaders: (headers) => {
          headers.set('X-RapidAPI-Key', '34ae51b724mshdb30bf885ce3511p1e8f90jsn61649cfcf55f');
          return headers
      },
  }),
  endpoints: (builder) => ({
      getVideosByCountry: builder.query({ query: () => `trending/?section=Music`}),
      getVideoDetails: builder.query({ query: (id) => `video/details/?id=${id}`}),
      getVideoStream: builder.query({ query: (id) => `video/data/?id=${id}`}),
  })
})

export const {
    useGetSongsByCountryQuery,
    useGetSongDetailsQuery,
    useGetSongLyricsQuery
} = musicApi;

export const {
  useGetVideosByCountryQuery,
  useLazyGetVideoDetailsQuery,
  useGetVideoStreamQuery,
} = videoApi;
