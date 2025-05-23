
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "Modern Office Complex",
    category: "Commercial",
    image: "/lovable-uploads/217b0ff4-1cf2-4ecc-a3e3-5e9748d39c4e.png",
    slug: "modern-office-complex"
  },
  {
    id: 2,
    title: "Residential Tower",
    category: "Residential",
    image: "/lovable-uploads/ea28938e-81de-49e8-95d9-befe8572af37.png",
    slug: "residential-tower"
  },
  {
    id: 3,
    title: "Industrial Facility",
    category: "Industrial",
    image: "/lovable-uploads/4fa5f518-fa61-4305-829c-3bfec8dd5376.png",
    slug: "industrial-facility"
  },
  {
    id: 4,
    title: "Shopping Center",
    category: "Commercial",
    image: "/lovable-uploads/bb41439a-2952-4312-848e-6afc7f1f7428.png",
    slug: "shopping-center"
  },
  {
    id: 5,
    title: "Luxury Apartments",
    category: "Residential",
    image: "/lovable-uploads/ac6b367c-d090-4f17-980d-01406c970c60.png",
    slug: "luxury-apartments"
  },
  {
    id: 6,
    title: "Manufacturing Plant",
    category: "Industrial",
    image: "/lovable-uploads/13fbcb36-849b-4270-b6bc-ba5ad9639f11.png",
    slug: "manufacturing-plant"
  },
  {
    id: 7,
    title: "Corporate Headquarters",
    category: "Commercial",
    image: "/lovable-uploads/0103f198-663c-4ebc-bca1-c82c0e506ef9.png",
    slug: "corporate-headquarters"
  },
  {
    id: 8,
    title: "Mixed-Use Development",
    category: "Residential",
    image: "/lovable-uploads/b0d8d188-c702-44ee-bb3e-ee71e40194d2.png",
    slug: "mixed-use-development"
  },
  {
    id: 9,
    title: "Logistics Center",
    category: "Industrial",
    image: "/lovable-uploads/7475093d-7db2-4197-a465-0f7845f8db24.png",
    slug: "logistics-center"
  }
];

const Projects = () => {
  useEffect(() => {
    document.title = "Our Projects - Novella Ltd";
  }, []);

  const [filter, setFilter] = useState<string | null>(null);

  const categories = Array.from(new Set(projectsData.map(project => project.category)));
  
  const filteredProjects = filter 
    ? projectsData.filter(project => project.category === filter) 
    : projectsData;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection
          title="Our Projects"
          subtitle="Explore our portfolio of completed and ongoing projects across various sectors"
          ctaText="Contact Us"
          ctaLink="/contact"
          backgroundImage="/lovable-uploads/b0d8d188-c702-44ee-bb3e-ee71e40194d2.png"
        />

        {/* Projects Gallery */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title="Project Portfolio" 
              subtitle="Browse through our diverse range of projects showcasing our expertise and innovation"
            />
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button 
                variant={filter === null ? "default" : "outline"} 
                className={filter === null ? "bg-novella-navy" : "border-novella-navy text-novella-navy"}
                onClick={() => setFilter(null)}
              >
                All Projects
              </Button>
              
              {categories.map((category, index) => (
                <Button 
                  key={index} 
                  variant={filter === category ? "default" : "outline"} 
                  className={filter === category ? "bg-novella-navy" : "border-novella-navy text-novella-navy"}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {filteredProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  category={project.category}
                  image={project.image}
                  slug={project.slug}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-novella-navy relative">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/efaa69c5-e65a-4e42-8cab-698f8db85e6e.png')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to discuss how we can bring your vision to life with our expertise and dedication to excellence.
            </p>
            <Button className="bg-novella-red hover:bg-red-700 text-white px-8 py-6 text-lg">
              Start Your Project
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
