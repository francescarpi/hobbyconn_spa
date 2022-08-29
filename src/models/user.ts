export interface IRoom {
  name: string
  id: string
}

export interface IUser {
  name: string
  room: IRoom
  rooms: IRoom[]
}
