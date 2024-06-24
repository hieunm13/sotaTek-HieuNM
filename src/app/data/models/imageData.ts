import { IHitZone } from './hitZone';

export interface IImageData {
  id: number;
  background_url: string;
  hitZones: IHitZone[];
}
