export type User = {
  firstName: string;
  lastName: string;
  customerID: string;
  note: string;
  profession: 'student' | 'freelancer' | 'productOwner' | 'engineer' | 'systemAnalytics';
};
