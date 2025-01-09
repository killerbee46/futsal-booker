export interface Fixture_types {
  title: string;
  description?: string;
  venue: string;
  time: string;
  date: string;
  player1: Player;
  player2: Player;
}

export interface Player {
  image: string;
  name: string;
  details?: string;
}
