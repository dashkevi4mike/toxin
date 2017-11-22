import { IFlatFormProperties, ILocationProperties } from './DynamicFields';

export interface ITravelOrder {
  options: IFlatFormProperties;
  fromLocation: IPoint;
  location: INormalizedLocation;
  locationValues: ILocationProperties;
  selectedCategoryUid: number;
}

export interface ILocation {
  city: ICity;
  area: IArea;
  point: IPoint;
}

export interface INormalizedLocation {
  city: number;
  area: number;
  point: IPoint;
}

export interface IArea {
  displayName: string;
  name: string;
  city: number;
  point: IPoint;
  id: number;
}

export interface INormalizedArea {
  areaID: number;
  point?: IPoint;
}

export interface ICity {
  areas: number[];
  name: string;
  id: number;
}

export interface IPoint {
  lat: number;
  lng: number;
}

export interface INormalizedCities {
  result: number[];
  entities: {
    cities: IAreaEntities;
    areas: ICityEntities;
  };
}

export interface IAreaEntities {
  [key: number]: IArea;
}

export interface ICityEntities {
  [key: number]: ICity;
}

export interface ICategory {
  uid: number;
  name: string;
  id: number;
}