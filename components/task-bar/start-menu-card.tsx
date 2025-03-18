export function StartMenuCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg bg-black/10 hover:bg-black/30 transition-all p-2">
      {children}
    </div>
  );
}
