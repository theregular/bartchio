export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen font-[family-name:var(--font-orbitron)]">
      <div className="flex flex-col items-center">
        <div className="text-7xl glitch font-[family-name:var(--font-sixtyfour)]">
          bartch.io
        </div>
        <nav className="pb-40 mt-4 text-sm">
          <a href="/music" className="mr-4 hover:underline">
            music
          </a>
          <a href="/shows" className="mr-4 hover:underline">
            shows
          </a>
          <a href="/dev" className="hover:underline">
            dev
          </a>
        </nav>
      </div>
      <div className="mt-20 absolute text-center text-2xl">
        <a
          href="https://soundcloud.com/bartchie"
          className="mr-10 hover:underline"
        >
          soundcloud
        </a>
        <a
          href="https://open.spotify.com/artist/4Gyqu8c5JuthBEudrUY0dE"
          className="mr-10 hover:underline"
        >
          spotify
        </a>
        <a
          href="https://bartchie.bandcamp.com/track/children-bartchie-edit"
          className="mr-10 hover:underline"
        >
          bandcamp
        </a>
      </div>
    </div>
  );
}
