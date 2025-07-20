import LinkItem from "@/app/components/atoms/linkItem";

export default function LinkLists({ direction = "row" }) {
    const isRow = direction === "row";

    return (
        <div className={`flex items-start gap-4 ${isRow ? "flex-row" : "flex-col"}`}>
            <LinkItem href="/" label="Home" />
            <LinkItem href="/about" label="About Us" />
            <LinkItem href="/contact" label="Living" />
            <LinkItem href="/bedroom" label="Bedroom" />
            <LinkItem href="/dining" label="Dining" />
            <LinkItem href="/kitchen" label="Kitchen" />
        </div>
    );
}
