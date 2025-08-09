import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Crown, MapPin, Phone, Mail, ArrowRight, Shield, Clock, Star, Sparkles, KeyRound, BedDouble, Camera, ChartLine, ConciergeBell, Settings2, PlusCircle, ShipWheel } from "lucide-react";

/*
  Refonte inspirée de https://www.carsup.io/parkings/conciergerie-automobile-geneve (structure :
  Hero localisation + points forts, "socle" en 3 piliers, personnalisation, étapes concrètes, CTA répétés).
  — Contenu original, adapté à la conciergerie automobile haut de gamme.
*/

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const pillars = [
  {
    icon: <Shield className="w-6 h-6" aria-hidden />,
    title: "Protection & sécurité",
    desc: "Stockage sécurisé, surveillance 24/7, contrôle d’accès.",
  },
  {
    icon: <ChartLine className="w-6 h-6" aria-hidden />,
    title: "Suivi & performance",
    desc: "Rapports réguliers, entretien préventif, historique complet.",
  },
  {
    icon: <ConciergeBell className="w-6 h-6" aria-hidden />,
    title: "Accompagnement",
    desc: "Concierge dédié, préparation avant sortie, services sur mesure.",
  },
];

const addOns = [
  { icon: <Camera className="w-5 h-5" />, label: "Inspection photo/vidéo" },
  { icon: <BedDouble className="w-5 h-5" />, label: "Nettoyage intérieur/extérieur" },
  { icon: <Settings2 className="w-5 h-5" />, label: "Maintenance & réparations" },
  { icon: <ShipWheel className="w-5 h-5" />, label: "Logistique transport" },
];

const steps = [
  { n: 1, title: "Prise de contact", desc: "Évaluation des besoins et sélection de l’espace adapté." },
  { n: 2, title: "Mise en sécurité", desc: "Entrée en stockage avec protocoles stricts." },
  { n: 3, title: "Services sur mesure", desc: "Entretien, préparation, assistance personnalisée." },
  { n: 4, title: "Remise & suivi", desc: "Véhicule prêt à l’usage et rapport de suivi." },
];

const testimonials = [
  { name: "Client — J. Martin", text: "Service irréprochable, ma voiture est toujours prête et impeccable.", note: 5 },
  { name: "Client — L. Bernard", text: "Équipe de confiance, réactivité impressionnante.", note: 5 },
];

export default function LuxuraCars() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-slate-100">
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "LuxuraCars",
            address: { "@type": "PostalAddress", addressLocality: "Genève", addressRegion: "GE", addressCountry: "CH" },
            telephone: "+41 00 000 00 00",
            areaServed: ["Genève", "Suisse romande", "France voisine"],
          }),
        }}
      />

      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-wide">
            <Crown className="w-5 h-5" aria-hidden />
            <span>LuxuraCars</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#socle" className="hover:text-white">Le socle</a>
            <a href="#addons" className="hover:text-white">Personnaliser</a>
            <a href="#steps" className="hover:text-white">Étapes</a>
            <a href="#avis" className="hover:text-white">Avis</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact"><Button className="rounded-2xl bg-yellow-500 text-black hover:bg-yellow-400">Demander un devis</Button></a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30" aria-hidden>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-start">
          <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-6">
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold leading-tight">
              Conciergerie automobile <span className="text-yellow-400">— Genève</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-slate-300">
              Stockage haut de gamme et services sur mesure pour voitures d’exception.
            </motion.p>
            <motion.ul variants={fadeUp} className="grid grid-cols-2 gap-3 text-sm text-slate-200">
              <li className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> Surveillance 24/7</li>
              <li className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> Contrôle climatique</li>
              <li className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> Transport sécurisé</li>
              <li className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> Entretien premium</li>
            </motion.ul>
            <motion.div variants={fadeUp} className="flex gap-3">
              <a href="#contact"><Button className="rounded-2xl bg-yellow-500 text-black hover:bg-yellow-400">Je suis intéressé</Button></a>
              <a href="#addons"><Button variant="outline" className="rounded-2xl border-white/20">Personnaliser mon offre</Button></a>
            </motion.div>
            <motion.div variants={fadeUp} className="flex items-center gap-3 text-sm text-slate-300 pt-2">
              <Badge className="bg-yellow-500 text-black">Devis gratuit</Badge>
              <Badge variant="outline" className="border-white/20">Sans engagement</Badge>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
            <Card className="rounded-2xl shadow-xl bg-white/5 border-white/10">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop"
                  alt="Conciergerie automobile"
                  className="w-full h-72 md:h-96 object-cover rounded-2xl"
                />
              </CardContent>
            </Card>
            <div className="absolute -bottom-6 -right-6 bg-black/70 border border-white/10 backdrop-blur rounded-2xl shadow p-3 flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-yellow-400" aria-hidden />
              <span>Stockage sécurisé</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
