import HeroSection from "@/views/HeroSection";
import ProcessSection from "@/views/ProcessSection";
import FeaturesSection from "@/views/FeaturesSection";
import UseCasesSection from "@/views/UseCasesSection";
import ContactSection from "@/views/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Fast voice messages. Zero clutter."
        description="HeyJ is voice-first messaging. Press and hold to talk — let go to send. Works on Web, iOS, and Android, with no message length limits."
        primaryCTA={{
          text: "Get HeyJ",
          href: "#download",
        }}
        secondaryCTA={{
          text: "See how it works",
          href: "#how-it-works",
        }}
        phoneImage="/hero-bg.png"
        instructionText="Press · Talk · Release · Sent"
      />

      {/* How it Works Section */}
      <ProcessSection />

      {/* Features Section */}
      <FeaturesSection
        title="Say more, faster — without typing"
        description="HeyJ keeps conversations moving with a simple interaction loop: press, talk, release, sent. No editing screens. No extra steps."
        features={[
          "Unlimited message length",
          "Web version for desktop",
          "Clean threads that stay focused",
        ]}
        demoLink={{
          text: "Watch a 10-second demo →",
          href: "/demo",
        }}
        image="/hero-bg.png"
      />

      {/* Use Cases Section */}
      <UseCasesSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
