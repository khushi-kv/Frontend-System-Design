import { CardShimmer } from "./lld-patterns/shimmer/components/CardShimmer";


export default function Home() {
  const loading = true;

  return (
    <div style={{ padding: "40px", display: "grid", gap: "16px" }}>
      {loading &&
        Array.from({ length: 5 }).map((_, i) => (
          <CardShimmer key={i} />
        ))}
    </div>
  );
}