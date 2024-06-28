import HomeView from "@/views/HomeView.vue";
import GameView from "@/views/GameView.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/app",
    name: "game",
    component: GameView,
  },
];
