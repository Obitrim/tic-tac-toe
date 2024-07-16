import HomeView from "@/views/HomeView.vue";

// Game
import GameView from "@/views/game/GameView.vue";
import Welcome from "@/views/game/Welcome.vue";
import GameSession from "@/views/game/GameSession.vue";

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
    children: [
      {
        path: "",
        name: "welcome",
        component: Welcome,
      },
      {
        path: "play",
        name: "game-session",
        component: GameSession,
      },
    ],
  },
];
