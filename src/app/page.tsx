import Content from "@/components/Content";
import Side from "@/components/Side";
import CardContent from "@/components/CardContent";

export default function Home() {
  return (
    <div className="min-h-screen githubcolor text-white">
      <main className="max-w-6xl mx-auto px-5 pt-24">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <Side />
          <div className="flex flex-col gap-8 flex-1">
            <Content />
            <CardContent />
          </div>
        </div>
      </main>
    </div>
  );
}
