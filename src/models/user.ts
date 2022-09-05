export interface IRoom {
  name: string
  id: string
}

export interface IZone {
  name: string
  id: string
}

export interface ISettings {
  room: IRoom
  rooms: IRoom[]
  zone: IZone
  zones: IZone[]
}
