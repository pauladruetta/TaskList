export interface Task {
  id?: number; //cuando creamos una task que podría no venir
  text: string;
  day: string;
  reminder: boolean;
}
