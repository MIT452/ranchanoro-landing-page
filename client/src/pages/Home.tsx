import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Star } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Veuillez remplir tous les champs requis');
      return;
    }
    toast.success('Merci ! Nous vous contacterons bientot.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const testimonials = [
    {
      name: 'Marie Dupont',
      role: 'Voyageuse',
      text: 'Une experience inoubliable ! Les chevaux sont magnifiques et l\'equipe est tres professionnelle.',
      rating: 5,
    },
    {
      name: 'Jean Rakoto',
      role: 'Famille',
      text: 'Les enfants ont adore les balades a cheval. Le paysage est spectaculaire et l\'atmosphere tres accueillante.',
      rating: 5,
    },
    {
      name: 'Sophie Martin',
      role: 'Aventuriere',
      text: 'Ranchanoro offre une connexion authentique avec la nature et les chevaux. A recommander vivement !',
      rating: 5,
    },
  ];

  const services = [
    {
      title: 'Balades a Cheval',
      description: 'Explorez les paysages cotiers magnifiques d\'Antalaha a cheval. Des balades adaptees a tous les niveaux.',
      icon: '🐴',
    },
    {
      title: 'Visite du Ranch',
      description: 'Decouvrez nos installations, nos chevaux et apprenez-en plus sur notre histoire et notre passion.',
      icon: '🏘️',
    },
    {
      title: 'Experiences Personnalisees',
      description: 'Creez votre propre aventure. Nous proposons des experiences sur mesure pour groupes et familles.',
      icon: '✨',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">R</div>
            <span className="text-xl font-bold text-primary">Ranchanoro</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:text-primary transition-colors">A Propos</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Avis</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <Button asChild className="bg-primary hover:bg-primary/90"><a href="#contact">Reserver</a></Button>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center min-h-screen">
          <div className="px-6 md:px-12 py-16 md:py-24 flex flex-col justify-center order-2 md:order-1 bg-white">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-secondary font-semibold text-sm tracking-wider uppercase">Bienvenue a Antalaha</p>
                <h1 className="text-primary leading-tight">Votre Destination Equestre</h1>
              </div>
              <p className="text-lg text-foreground/80 max-w-md leading-relaxed">
                Ranchanoro vous propose des experiences uniques alliant equitation, nature et hospitalite malgache. Decouvrez la beaute cotiere d\'Antalaha a cheval.
              </p>
              <div className="flex gap-4 pt-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="#services">Decouvrir</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  <a href="#about">En Savoir Plus</a>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative h-screen md:h-auto order-1 md:order-2 overflow-hidden">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663533517904/2fHn8PhTBPuWpXzae2toWF/hero-ranch-antalaha-A5PAMX7zqJcAsC5LiLootw.webp"
              alt="Ranchanoro Ranch"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/20"></div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663533517904/2fHn8PhTBPuWpXzae2toWF/ranch-facilities-E8j9xxttNGVxq77ENgW9HB.webp"
                alt="Installations du Ranch"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-primary">Notre Histoire</h2>
              <p className="text-foreground/80 leading-relaxed">
                Ranchanoro est bien plus qu\'un simple ranch equestre. C\'est une destination creee avec passion pour offrir des experiences authentiques et memorables. Depuis sa creation, nous avons accueilli des familles, des voyageurs et des passionnes d\'equitation du monde entier.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Notre engagement envers le bien-etre des chevaux et la satisfaction de nos clients est au coeur de tout ce que nous faisons. Nous croyons que la connexion avec la nature et les animaux transforme les ames.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm text-foreground/60">Chevaux</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">1000+</p>
                  <p className="text-sm text-foreground/60">Visiteurs/an</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">10+</p>
                  <p className="text-sm text-foreground/60">Annees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <p className="text-secondary font-semibold text-sm tracking-wider uppercase">Nos Services</p>
            <h2 className="text-primary">Experiences Inoubliables</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">Decouvrez nos services concus pour creer des souvenirs durables</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="border-border hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container relative z-10 text-center space-y-6">
          <h2 className="text-white">Pret pour une Aventure ?</h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Reservez des maintenant et vivez une experience equestre unique sur les cotes magnifiques d\'Antalaha.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            <a href="#contact">Reserver Maintenant</a>
          </Button>
        </div>
      </section>

      <section id="testimonials" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <p className="text-secondary font-semibold text-sm tracking-wider uppercase">Avis Clients</p>
            <h2 className="text-primary">Ce que Disent Nos Visiteurs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-border bg-background">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg text-foreground">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 italic leading-relaxed">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <p className="text-secondary font-semibold text-sm tracking-wider uppercase mb-4">Nous Contacter</p>
                <h2 className="text-primary mb-6">Parlons de Votre Aventure</h2>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Localisation</h3>
                    <p className="text-foreground/70">Antalaha, Madagascar</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telephone</h3>
                    <a
                      href="tel:+261342567634"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      +261 34 25 676 34
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:contact@ranchanoro.mg"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      contact@ranchanoro.mg
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <Input
                placeholder="Votre nom"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                className="bg-white border-border"
              />
              <Input
                placeholder="Votre email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                className="bg-white border-border"
              />
              <Input
                placeholder="Votre telephone"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                className="bg-white border-border"
              />
              <Textarea
                placeholder="Votre message"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                className="bg-white border-border min-h-32"
              />
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                Envoyer
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">R</div>
                <span className="font-bold">Ranchanoro</span>
              </div>
              <p className="text-white/70 text-sm">Votre destination equestre a Antalaha, Madagascar</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Liens Rapides</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#about" className="hover:text-white transition">A Propos</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#testimonials" className="hover:text-white transition">Avis</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Horaires</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Lun-Ven: 8h-18h</li>
                <li>Sam-Dim: 9h-17h</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Reseaux Sociaux</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="https://facebook.com/RanchanoroAntalaha" className="hover:text-white transition">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2026 Ranchanoro Antalaha. Tous droits reserves.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
