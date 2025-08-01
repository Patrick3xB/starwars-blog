import CardList from "../components/CardList";

export default function Home() {
    return (
        <>
            <CardList type="people" title="Characters" />
            <CardList type="planets" title="Planets" />
            <CardList type="vehicles" title="Vehicles" />
        </>
    );
}