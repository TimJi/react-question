import { Profession } from '@/enums/profession'

export type User = {
  firstName: string;
  lastName: string;
  customerID: string;
  note: string;
  profession: Profession;
};
