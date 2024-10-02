import GameSlide from "@/components/slider/GameSlide";
import Section from "@/components/section/Section";
import Slider from "@/components/slider/Slider";
import {
  gameFeatureSliderIds,
  gameFreeToPlaySliderIds,
  gameNewTrendingSliderIds,
  gameSpecialOfferSliderIds,
} from "@/consts/slider";
import GameCard from "@/components/card/GameCard";
import HorizontalGameCard from "@/components/card/HorizontalGameCard";

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
        className="flex flex-col items-center py-20 gap-20 "
        style={{ background: "var(--gradient-store-bg)" }}
      >
        <Section title="FEATURED">
          <Slider
            content={gameFeatureSliderIds.map((id) => (
              <GameSlide key={id} gameID={id} />
            ))}
            cols={1}
          />
        </Section>
        <Section title="Special Offers">
          <Slider
            content={gameSpecialOfferSliderIds.map((id) => (
              <GameCard key={id} gameID={id} />
            ))}
            cols={3}
          />
        </Section>
        <Section title="New & Trending">
          <Slider
            content={gameNewTrendingSliderIds.map((id) => (
              <GameCard key={id} gameID={id} />
            ))}
            cols={3}
          />
        </Section>
        <Section title="Free To Play">
          <Slider
            content={gameFreeToPlaySliderIds.map((id) => (
              <GameCard key={id} gameID={id} />
            ))}
            cols={3}
          />
        </Section>
        <Section title="Top Sellers">
          <Slider
            content={gameFreeToPlaySliderIds.map((id) => (
              <HorizontalGameCard key={id} gameID={id} />
            ))}
            cols={2}
            rows={3}
          />
        </Section>
      </div>
    </div>
  );
}
