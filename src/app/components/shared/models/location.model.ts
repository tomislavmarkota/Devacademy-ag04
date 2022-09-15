export interface LocationDTO {
  id: string | null;
  name: string | null;
  postalCode: string | number | null;
  imageUrl: string | null;
  properties: number | null;
}

export class Location implements LocationDTO {
  constructor(
    public id: string | null,
    public name: string | null,
    public postalCode: string | number | null,
    public imageUrl: string | null,
    public properties: number | null
  ) {}
}
