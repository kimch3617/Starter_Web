import Link from "next/link";
import sleep from "../utils/sleep";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import BrandedButton from "../../components/custom-button";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  // const response = await fetch(process.env.API_URL);
  // const json = await response.json();
  // return json;
  return [
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/zo8CIjJ2nfNOevqNajwMRO6Hwka.jpg",
      genre_ids: [16, 12, 10751, 35],
      id: 1241982,
      original_language: "en",
      original_title: "Moana 2",
      overview:
        "After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
      popularity: 4253.184,
      poster_path:
        "https://image.tmdb.org/t/p/w780/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
      release_date: "2024-11-21",
      title: "Moana 2",
      video: false,
      vote_average: 7.197,
      vote_count: 1418,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg",
      genre_ids: [28, 878, 35, 10751],
      id: 939243,
      original_language: "en",
      original_title: "Sonic the Hedgehog 3",
      overview:
        "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
      popularity: 2906.722,
      poster_path:
        "https://image.tmdb.org/t/p/w780/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
      release_date: "2024-12-19",
      title: "Sonic the Hedgehog 3",
      video: false,
      vote_average: 7.775,
      vote_count: 1695,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/u7AZ5CdT2af8buRjmYCPXNyJssd.jpg",
      genre_ids: [28, 35],
      id: 1160956,
      original_language: "zh",
      original_title: "熊猫计划",
      overview:
        "International action star Jackie Chan is invited to the adoption ceremony of a rare baby panda, but after an international crime syndicate attempts to kidnap the bear, Jackie has to save the bear using his stunt work skills.",
      popularity: 2185.268,
      poster_path:
        "https://image.tmdb.org/t/p/w780/xVS9XiO9upp2SnWx6KpBYb79hLR.jpg",
      release_date: "2024-10-01",
      title: "Panda Plan",
      video: false,
      vote_average: 6.525,
      vote_count: 60,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/v9Du2HC3hlknAvGlWhquRbeifwW.jpg",
      genre_ids: [28, 12, 53],
      id: 539972,
      original_language: "en",
      original_title: "Kraven the Hunter",
      overview:
        "Kraven Kravinoff's complex relationship with his ruthless gangster father, Nikolai, starts him down a path of vengeance with brutal consequences, motivating him to become not only the greatest hunter in the world, but also one of its most feared.",
      popularity: 1821.124,
      poster_path:
        "https://image.tmdb.org/t/p/w780/nrlfJoxP1EkBVE9pU62L287Jl4D.jpg",
      release_date: "2024-12-11",
      title: "Kraven the Hunter",
      video: false,
      vote_average: 6.612,
      vote_count: 1155,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/eHu1ZxFPmqyhnait9VdsOQBEFOk.jpg",
      genre_ids: [27, 53],
      id: 710295,
      original_language: "en",
      original_title: "Wolf Man",
      overview:
        "With his marriage fraying, Blake persuades his wife Charlotte to take a break from the city and visit his remote childhood home in rural Oregon. As they arrive at the farmhouse in the dead of night, they're attacked by an unseen animal and barricade themselves inside the home as the creature prowls the perimeter. But as the night stretches on, Blake begins to behave strangely, transforming into something unrecognizable.",
      popularity: 1176.873,
      poster_path:
        "https://image.tmdb.org/t/p/w780/jTPBMPTgk9zOUGSkWcoOGbX8cTi.jpg",
      release_date: "2025-01-15",
      title: "Wolf Man",
      video: false,
      vote_average: 6.4,
      vote_count: 301,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/8eifdha9GQeZAkexgtD45546XKx.jpg",
      genre_ids: [53, 28, 878],
      id: 822119,
      original_language: "en",
      original_title: "Captain America: Brave New World",
      overview:
        "After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.",
      popularity: 1069.531,
      poster_path:
        "https://image.tmdb.org/t/p/w780/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg",
      release_date: "2025-02-12",
      title: "Captain America: Brave New World",
      video: false,
      vote_average: 6.5,
      vote_count: 70,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/xljLe4TiQL1b4sT7956IGgj2vrf.jpg",
      genre_ids: [28, 18, 12, 10752],
      id: 927342,
      original_language: "ta",
      original_title: "அமரன்",
      overview:
        "A heroic true story of Major Mukund Varadarajan, an Indian Army officer who displayed extraordinary bravery during a counterterrorism mission in Kashmir’s Shopian district. The film captures his courage in protecting his nation and the devotion of his wife Indhu Rebecaa Varghese.",
      popularity: 1058.057,
      poster_path:
        "https://image.tmdb.org/t/p/w780/6m435uh40N7Gzfbd69ttp6W0sdR.jpg",
      release_date: "2024-10-31",
      title: "Amaran",
      video: false,
      vote_average: 7.1,
      vote_count: 42,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/xZm5YUNY3PlYD1Q4k7X8zd2V4AK.jpg",
      genre_ids: [28, 35],
      id: 993710,
      original_language: "en",
      original_title: "Back in Action",
      overview:
        "Fifteen years after vanishing from the CIA to start a family, elite spies Matt and Emily jump back into the world of espionage when their cover is blown.",
      popularity: 1053.567,
      poster_path:
        "https://image.tmdb.org/t/p/w780/3L3l6LsiLGHkTG4RFB2aBA6BttB.jpg",
      release_date: "2025-01-15",
      title: "Back in Action",
      video: false,
      vote_average: 6.593,
      vote_count: 888,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/qSOMdbZ6AOdHR999HWwVAh6ALFI.jpg",
      genre_ids: [28, 80, 53],
      id: 1249289,
      original_language: "en",
      original_title: "Alarum",
      overview:
        "Two married spies caught in the crosshairs of an international intelligence network will stop at nothing to obtain a critical asset. Joe and Lara are agents living off the grid whose quiet retreat at a winter resort is blown to shreds when members of the old guard suspect the two may have joined an elite team of rogue spies, known as Alarum.",
      popularity: 1038.18,
      poster_path:
        "https://image.tmdb.org/t/p/w780/v313aUGmMNj6yNveaiQXysBmjVS.jpg",
      release_date: "2025-01-16",
      title: "Alarum",
      video: false,
      vote_average: 5.783,
      vote_count: 150,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/ybSA7fUbYHw8VeRiSJ7tgKJnYWZ.jpg",
      genre_ids: [28, 53],
      id: 1410082,
      original_language: "en",
      original_title: "Sniper: The Last Stand",
      overview:
        "To stop an arms dealer from unleashing a deadly superweapon, Ace sniper Brandon Beckett and Agent Zero are deployed to Costa Verde to lead a group of elite soldiers against an unrelenting militia. Taking an untested sniper under his wing, Beckett faces his newest challenge: giving orders instead of receiving them. With both time and ammo running low in a race to save humanity, the team must overcome all odds just to survive.",
      popularity: 971.948,
      poster_path:
        "https://image.tmdb.org/t/p/w780/TVvIyCsFCmLk9MRLbAZi4X8f32.jpg",
      release_date: "2025-01-21",
      title: "Sniper: The Last Stand",
      video: false,
      vote_average: 6.5,
      vote_count: 78,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/vZG7PrX9HmdgL5qfZRjhJsFYEIA.jpg",
      genre_ids: [28, 878, 12],
      id: 912649,
      original_language: "en",
      original_title: "Venom: The Last Dance",
      overview:
        "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
      popularity: 910.115,
      poster_path:
        "https://image.tmdb.org/t/p/w780/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
      release_date: "2024-10-22",
      title: "Venom: The Last Dance",
      video: false,
      vote_average: 6.778,
      vote_count: 2774,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/tPFbjgbYNnveVd75Oh5EMjI8GqP.jpg",
      genre_ids: [35, 10749],
      id: 1212142,
      original_language: "en",
      original_title: "Kinda Pregnant",
      overview:
        "When Lainy's plan to settle down and start a family falls apart, she puts on a fake baby bump, tells a lie — and accidentally falls for her dream guy.",
      popularity: 831.146,
      poster_path:
        "https://image.tmdb.org/t/p/w780/vQlL4olmOEFKENrrJPf2xLXGy4c.jpg",
      release_date: "2025-02-04",
      title: "Kinda Pregnant",
      video: false,
      vote_average: 5.6,
      vote_count: 101,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/euYIwmwkmz95mnXvufEmbL6ovhZ.jpg",
      genre_ids: [28, 12, 18],
      id: 558449,
      original_language: "en",
      original_title: "Gladiator II",
      overview:
        "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its people.",
      popularity: 823.861,
      poster_path:
        "https://image.tmdb.org/t/p/w780/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
      release_date: "2024-11-05",
      title: "Gladiator II",
      video: false,
      vote_average: 6.759,
      vote_count: 2772,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/lWMa1FdgC7zP9ATVg6dgpZ3rxhe.jpg",
      genre_ids: [12, 10751, 16],
      id: 762509,
      original_language: "en",
      original_title: "Mufasa: The Lion King",
      overview:
        "Mufasa, a cub lost and alone, meets a sympathetic lion named Taka, the heir to a royal bloodline. The chance meeting sets in motion an expansive journey of a group of misfits searching for their destiny.",
      popularity: 811.986,
      poster_path:
        "https://image.tmdb.org/t/p/w780/jbOSUAWMGzGL1L4EaUF8K6zYFo7.jpg",
      release_date: "2024-12-18",
      title: "Mufasa: The Lion King",
      video: false,
      vote_average: 7.43,
      vote_count: 996,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/1Lk8rgG16Ec0RviE8mcLzLKonql.jpg",
      genre_ids: [28, 18],
      id: 811941,
      original_language: "te",
      original_title: "దేవర: Part 1",
      overview:
        "Devara, a fearless man from a coastal region, embarks on a perilous journey into the treacherous world of the sea to safeguard the lives of his people. Unbeknownst to him, his brother Bhaira is plotting a conspiracy against him. As events unfold, Devara passes on his legacy to his mild-mannered and timid son, Varada.",
      popularity: 724.719,
      poster_path:
        "https://image.tmdb.org/t/p/w780/A9ENz6d4lC3UYOX8Z1gJwDEo1sM.jpg",
      release_date: "2024-09-26",
      title: "Devara: Part 1",
      video: false,
      vote_average: 7.357,
      vote_count: 133,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/h7r6LZ32dgLwtwSW3CxoWIYD9pr.jpg",
      genre_ids: [27, 14],
      id: 426063,
      original_language: "en",
      original_title: "Nosferatu",
      overview:
        "A gothic tale of obsession between a haunted young woman and the terrifying vampire infatuated with her, causing untold horror in its wake.",
      popularity: 686.486,
      poster_path:
        "https://image.tmdb.org/t/p/w780/5qGIxdEO841C0tdY8vOdLoRVrr0.jpg",
      release_date: "2024-12-25",
      title: "Nosferatu",
      video: false,
      vote_average: 6.7,
      vote_count: 2028,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/3SOunz2Z0qcOVlrkYFj20HquziB.jpg",
      genre_ids: [878, 12, 28, 18, 10770],
      id: 1114894,
      original_language: "en",
      original_title: "Star Trek: Section 31",
      overview:
        "Emperor Philippa Georgiou joins a secret division of Starfleet tasked with protecting the United Federation of Planets and faces the sins of her past.",
      popularity: 654.755,
      poster_path:
        "https://image.tmdb.org/t/p/w780/sqiCinCzUGlzQiFytS30N1nO3Pt.jpg",
      release_date: "2025-01-15",
      title: "Star Trek: Section 31",
      video: false,
      vote_average: 4.7,
      vote_count: 149,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/rp49ILheIhBwHWiQUvDfVH1fPfI.jpg",
      genre_ids: [28, 80, 53],
      id: 1138749,
      original_language: "en",
      original_title: "The Island",
      overview:
        "When his brother is killed, LAPD officer Mark leaves the city to return to the island he grew up on. Seeking answers and ultimately vengeance, he soon finds himself in a bloody battle with the corrupt tycoon who's taken over the island paradise.",
      popularity: 647.839,
      poster_path:
        "https://image.tmdb.org/t/p/w780/75O9xgGobL0FIIgayMxwuL8PeLJ.jpg",
      release_date: "2023-07-21",
      title: "The Island",
      video: false,
      vote_average: 5.7,
      vote_count: 36,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/bFPqSvR2EmWQ9AlzWkC801XpoAZ.jpg",
      genre_ids: [27, 878],
      id: 933260,
      original_language: "en",
      original_title: "The Substance",
      overview:
        "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
      popularity: 615.47,
      poster_path:
        "https://image.tmdb.org/t/p/w780/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
      release_date: "2024-09-07",
      title: "The Substance",
      video: false,
      vote_average: 7.142,
      vote_count: 3785,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/cA88pwGnHa64BBcU3R1oCcJH9Qc.jpg",
      genre_ids: [28, 27, 53],
      id: 970450,
      original_language: "en",
      original_title: "Werewolves",
      overview:
        "A year after a supermoon’s light activated a dormant gene, transforming humans into bloodthirsty werewolves and causing nearly a billion deaths, the nightmare resurfaces as the supermoon rises again. Two scientists attempt to stop the mutation but fail and must now struggle to reach one of their family homes.",
      popularity: 596.202,
      poster_path:
        "https://image.tmdb.org/t/p/w780/cRTctVlwvMdXVsaYbX5qfkittDP.jpg",
      release_date: "2024-12-04",
      title: "Werewolves",
      video: false,
      vote_average: 6.2,
      vote_count: 284,
    },
  ];
}

const Page = async () => {
  const movies = await getMovies();
  // await sleep(1000);

  return (
    <div className={styles.container}>
      <div className="bg-amber-200 hover:bg-amber-700 rounded-2xl p-6 text-black">
        test
        <div className="bg-blue-300 m-3">
          <h1 className="text-3xl font-bold underline text-red-400">
            Tailwind Test
          </h1>
        </div>
      </div>
      <BrandedButton buttonColor={"#123dd1"} textColor={"#da22ff"}>Button</BrandedButton>
      <a href="#" className="group rounded-lg p-8">
        <span className="group-hover:underline">Read more…</span>
      </a>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
};

export default Page;
