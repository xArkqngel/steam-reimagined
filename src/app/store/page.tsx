export default function StorePage() {
  return (
    <div className="bg-black">
      <video width={1920} height={1080}>
        <source
          src="https://cdn.akamai.steamstatic.com/steam/clusters/frontpage/65b8f08efe2288a7cb56e345/mp4_page_bg_english.mp4?t=1707952653"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
