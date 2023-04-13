import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const musicApi = createApi({
  reducerPath: 'musicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify23.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '34ae51b724mshdb30bf885ce3511p1e8f90jsn61649cfcf55f'
      );
      return headers
    },
  }),
  endpoints: (builder) => ({
    getSongsByCountry: builder.query({ query: () => `search/?q=amapiano/?type=tracks&limit=100&start_from=1`}),
    getSongDetails: builder.query({ query: (id) => `tracks/?ids=${id}`}),
    getSongLyrics: builder.query({ query: (id) => `track_lyrics/?id=${id}`}),
  })
})

export const {
  useGetSongsByCountryQuery,
  useGetSongDetailsQuery,
  useGetSongLyricsQuery
} = musicApi;

export const videoApi = createApi({
  reducerPath: 'videoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://youtube138.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '34ae51b724mshdb30bf885ce3511p1e8f90jsn61649cfcf55f',
      );
      return headers
    },
  }),
  endpoints: (builder) => ({
    getVideosByCountry: builder.query({ query: () => `search/?q=amapiano/?gl=za`}),
    getVideoDetails: builder.query({ query: (id) => `video/details/?id=${id}`}),
    getVideoStream: builder.query({ query: (id) => `video/streaming-data/?id=${id}`}),
  })
})

export const {
  useGetVideosByCountryQuery,
  useGetVideoDetailsQuery,
  useGetVideoStreamQuery,
} = videoApi;
