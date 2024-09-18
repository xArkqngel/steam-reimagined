import GameSlide from "@/components/game/GameSlide";
import Section from "@/components/section/Section";
import Slider from "@/components/slider/Slider";
import { gameFeatureSliderIds } from "@/consts/slider";

export default function StorePage() {
  return (
    <div className="flex flex-col">
      <video width={1920} height={1080} muted autoPlay loop>
        <source
          src="https://cdn.akamai.steamstatic.com/steam/clusters/frontpage/65b8f08efe2288a7cb56e345/mp4_page_bg_english.mp4?t=1707952653"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div
        className="flex flex-col px-52 py-20 gap-20"
        style={{ background: "var(--gradient-store-bg)" }}
      >
        <Section title="FEATURED" button={<button>hola</button>}>
          <Slider
            content={gameFeatureSliderIds.map((id) => (
              <GameSlide key={id} gameID={id} />
            ))}
            itemsPerSlide={1}
          />
        </Section>
        <Section title="Special Offers" button={<button>SEE MORE</button>}>
          <Slider
            content={[
              <p key={1}>hola11</p>,
              <p key={2}>hola12</p>,
              <p key={3}>hola21</p>,
              <p key={4}>hola22</p>,
            ]}
            itemsPerSlide={3}
          />
        </Section>
      </div>
    </div>
  );
}
