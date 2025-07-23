import Content from "@/components/Content";
import Side from "@/components/Side";
import CardContent from "@/components/CardContent";

export default function Home() {
  return (
    <div className="overflow-x-hidden text-white max-h-screen">
      <main className="max-w-6xl mx-auto px-5 pt-50 overflow-y-auto">
        <div className="flex flex-col justify-center md:flex-row md:justify-start gap-12 items-start">
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
