import CardList from "../components/CardList";
import Section from "../components/Section";
import Lightsabers from "../components/icons/LightSabers";

export default function Home() {
  return (
    <div className="container my-4">
      <Section title="Characters" icon={<Lightsabers />} defaultOpen>
        <CardList type="people" />
      </Section>

      <Section title="Planets" icon={<Lightsabers />} defaultOpen={false}>
        <CardList type="planets" />
      </Section>

      <Section title="Vehicles" icon={<Lightsabers />} defaultOpen={false}>
        <CardList type="vehicles" />
      </Section>
    </div>
  );
}
