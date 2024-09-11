export type Friend = {
  name: string;
  friendStatus: string;
  text?: string;
  profilePicture: string;
};

export const friends: Friend[] = [
  {
    name: "Jeremy",
    friendStatus: "online",
    text: "Counter-Strike 2",
    profilePicture:
      "https://avatars.akamai.steamstatic.com/9a95e6f5ebd6c280f82b3e7ce215f286746ad3e7_full.jpg",
  },
  {
    name: "Tavish",
    friendStatus: "offline",
    text: "Last online: 30 mins ago",
    profilePicture:
      "https://avatars.akamai.steamstatic.com/d473fddc38f6d7914b2ca7bef51a91ce49db8afd_full.jpg",
  },
  {
    name: "Dell",
    friendStatus: "online",
    text: "Dota 2",
    profilePicture:
      "https://avatars.akamai.steamstatic.com/ae3b475531d3d31151b5b0c6484cbf6af466e874_full.jpg",
  },
  {
    name: "Mr. Ludwig",
    friendStatus: "away",
    text: "Away",
    profilePicture:
      "https://avatars.akamai.steamstatic.com/ff72daa915e0a7cb31c64cbe847870f47ad91706_full.jpg",
  },
  {
    name: "Misha",
    friendStatus: "offline",
    text: "Last online: 4 days ago",
    profilePicture:
      "https://avatars.akamai.steamstatic.com/f4e7432889c3773c1f585f0f5ccf488fec760a5b_full.jpg",
  },
  {
    name: "Unknown",
    friendStatus: "afk",
    text: "Looking into xArks Steam Rebuild",
    profilePicture:
      "https://avatars.akamai.steamstatic.com/9ed36beb5d09f2eafba210f988322cf050f1eb08_full.jpg",
  },
];
