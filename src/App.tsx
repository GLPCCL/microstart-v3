import { 
  Building2, 
  Calculator, 
  ChevronRight, 
  FileText, 
  MessageCircle, 
  ShieldCheck, 
  Users,
  Clock,
  HeartHandshake,
  BarChart3
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-[#182B57]" />
              <span className="text-2xl font-bold text-[#182B57]">MicroStart</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#creation" className="text-[#182B57] hover:text-blue-700">Création</a>
              <a href="#comptabilite" className="text-[#182B57] hover:text-blue-700">Comptabilité</a>
              <a href="#services" className="text-[#182B57] hover:text-blue-700">Services</a>
              <a href="#tarifs" className="text-[#182B57] hover:text-blue-700">Tarifs</a>
              <a href="#guides" className="text-[#182B57] hover:text-blue-700">Guides</a>
            </nav>
            <button className="bg-[#182B57] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Créer ma micro-entreprise
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
            alt="Bureau moderne" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-[#182B57] mb-6">
              Lancez votre micro-entreprise simplement.
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Accélérez vos démarches, déclarez votre activité et développez votre chiffre d'affaires grâce à un accompagnement dédié.
            </p>
            <div className="flex space-x-4">
              <button className="bg-[#182B57] text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center">
                Créer ma micro-entreprise
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-[#E1EBF7] text-[#182B57] px-8 py-3 rounded-full hover:bg-blue-100 transition-colors flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                Parler à un conseiller
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-[#E1EBF7]/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#182B57] mb-12">
            Pourquoi nous faire confiance ?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, text: "+ de 10 000 micro-entrepreneurs accompagnés" },
              { icon: ShieldCheck, text: "Conseillers experts en micro-entreprise" },
              { icon: Clock, text: "Support client réactif 7j/7" },
              { icon: HeartHandshake, text: "Tarifs transparents et adaptés" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <item.icon className="h-12 w-12 text-[#182B57] mb-4" />
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#182B57] mb-12">
            Créez votre micro-entreprise en 3 étapes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "1. Renseignez vos informations",
                description: "Complétez le formulaire avec vos données essentielles"
              },
              {
                icon: Building2,
                title: "2. Nous gérons vos formalités",
                description: "Immatriculation et déclarations officielles"
              },
              {
                icon: BarChart3,
                title: "3. Commencez votre activité",
                description: "Recevez votre numéro SIRET et démarrez"
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <step.icon className="h-12 w-12 text-[#182B57] mb-4" />
                <h3 className="text-xl font-bold text-[#182B57] mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-[#182B57] text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Je lance mon activité !
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-[#E1EBF7]/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#182B57] mb-12">
            Nos services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Calculator,
                title: "Suivi comptable simplifié",
                description: "Tableau de bord intuitif pour gérer votre CA"
              },
              {
                icon: Building2,
                title: "Domiciliation",
                description: "Adresse professionnelle et gestion du courrier"
              },
              {
                icon: FileText,
                title: "Documents automatisés",
                description: "Génération d'attestations et factures"
              },
              {
                icon: MessageCircle,
                title: "Assistance juridique",
                description: "Conseils d'experts et ressources pratiques"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <service.icon className="h-12 w-12 text-[#182B57] mb-4" />
                <h3 className="text-xl font-bold text-[#182B57] mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#182B57] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-8 w-8" />
                <span className="text-2xl font-bold">MicroStart</span>
              </div>
              <p className="text-blue-200">
                Votre partenaire pour la création et la gestion de votre micro-entreprise.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Liens utiles</h4>
              <ul className="space-y-2">
                <li><a href="/creation" className="text-blue-200 hover:text-white transition-colors">Création d'entreprise</a></li>
                <li><a href="/comptabilite" className="text-blue-200 hover:text-white transition-colors">Comptabilité</a></li>
                <li><a href="/services" className="text-blue-200 hover:text-white transition-colors">Services</a></li>
                <li><a href="/tarifs" className="text-blue-200 hover:text-white transition-colors">Tarifs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Légal</h4>
              <ul className="space-y-2">
                <li><a href="/mentions-legales" className="text-blue-200 hover:text-white transition-colors">Mentions légales</a></li>
                <li><a href="/cgu" className="text-blue-200 hover:text-white transition-colors">CGU</a></li>
                <li><a href="/confidentialite" className="text-blue-200 hover:text-white transition-colors">Politique de confidentialité</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><a href="mailto:support@microstart.fr" className="text-blue-200 hover:text-white transition-colors">support@microstart.fr</a></li>
                <li><a href="tel:0123456789" className="text-blue-200 hover:text-white transition-colors">01 23 45 67 89</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; {new Date().getFullYear()} MicroStart. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;