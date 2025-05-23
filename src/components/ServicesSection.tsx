
import { Building2, Globe, Factory, Home, LayoutDashboard } from "lucide-react";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Our Services"
          subtitle="Comprehensive solutions for all your business needs"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
          <ServiceCard
            title="Construction"
            description="Premier construction services with focus on quality and timely delivery"
            icon={<Building2 size={40} />}
            link="/services/construction"
          />
          
          <ServiceCard
            title="Import & Export"
            description="Global trade solutions connecting businesses worldwide"
            icon={<Globe size={40} />}
            link="/services/import-export"
          />
          
          <ServiceCard
            title="Manufacturing"
            description="High-quality manufacturing with innovative production techniques"
            icon={<Factory size={40} />}
            link="/services/manufacturing"
          />
          
          <ServiceCard
            title="Real Estate"
            description="Premium real estate development and investment opportunities"
            icon={<Home size={40} />}
            link="/services/real-estate"
          />
          
          <ServiceCard
            title="B2B Solutions"
            description="Tailored business solutions to boost your company's growth"
            icon={<LayoutDashboard size={40} />}
            link="/services/b2b"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
