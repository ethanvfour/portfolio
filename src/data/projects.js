export const projects = [
  {
    name: "Chat Bot",
    link: "https://github.com/ethanvfour/chatBotReact",
    gifSrc: `${import.meta.env.BASE_URL}chatBot.gif`, //has to add because of the github pages
    description:
      "A React-based chatbot application. Later on, an ML model is going to be used as a backend to determine whether or not a message is either {Good, Bad, Greeting}",
  },
  {
    name: "Password Manager",
    link: "https://github.com/ethanvfour/password_manager",
    gifSrc: `${import.meta.env.BASE_URL}password.gif`,
    description:
      "A secure password manager built with C++. Features a simple encryption, and a user-friendly interface for managing credentials.",
  },
  {
    name: "Booth's Algorithm Visualizer",
    link: "https://github.com/ethanvfour/BoothAlgVisualizer",
    gifSrc: `${import.meta.env.BASE_URL}boothAlg.gif`,
    description:
      "A Booth's Algorithm Visualizer I made to help me with my Computer Architecture class. It shows every step and why a certain step is done and neededs",
  },
];