export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contacts: undefined;
  ChatRoom: undefined;
  Users: undefined;

};

export type RoomsNavigatorParamList = {
  ChambersScreen: undefined;
};

export type MainTabParamList = {
  Login: undefined;
  Register: undefined;
  Chats: undefined;
  Chambers: undefined;
  Rooms: undefined;
  Users: undefined;
  FeedRoom: undefined;
  Music: undefined;
  UserProfileScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
export type User = {
  id: String;
  name: String;
  roomName: string;
  imageUri: String;
  status: String;
  occupation: string;
  rank: number;
  notification: number;
}

export type Message = {
  id: String;
  content: string;
  createdAt: string;
  user: User;
}

export type ChatRoom = {
  id: String,
  users: User[];
  notification: string;
  lastMessage: Message;
}

export type LocalArea = {
  name: String,
  key: number;
  users: User[];
}


export type TownRoom = {
  id: string,
  name: string,
  bio: string,
  imageUri: string,
  roomname: string,
  avatar: string,
  users: User[];
  occupation: string;
  lastMessage: Message;
  key: number,
  notification: number;
}

export type ChamberRoom = {
  id: String,
  users: User[];
  lastMessage: Message;
}
export type Room = {
  id: String,
  users: User[];
  lastMessage: Message;
}

export type UserType = {
  id: string,
  name: string,
  username: string,
  createdAt: string,
  image?: string,
}
export type SelectYourTown = {
  id: string,
  name: string,
  town: string,
  username: string,
  key: number,
}

export type AlbumCard = {
  album: {
    id: string;
    imageUri: string;
    artistHeadline: string;
  }
}
export type AlbumSingle = {
    id: string;
    images: string;
    artistsHeadline: string;
    key: string;
}
export type AlbumList = {
    id: string;
    imageUri: string;
    artistsHeadline: string;
    name: string;
    numberOfLikes: number;
    numberOfPlays: number;
    numberOfDownloads: number;
    numberOfShares: number;
    by: string;
}

export type Song = {
  id: string;
  imageUri: string;
  title: string;
  artist: string;
}
