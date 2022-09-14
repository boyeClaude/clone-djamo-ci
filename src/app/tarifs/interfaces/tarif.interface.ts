export interface Tarif {
  title: string;
  subtitle: string;
  plan: string;
  img:string;
  isPremium: boolean;
  content: {
    top: string[];
    bottom: string[];
  };
}
