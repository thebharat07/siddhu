import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Compass, PenTool, CheckCircle, Verified, Users, Building } from "lucide-react";
import { ParallaxZSection } from "@/components/ParallaxZSection";
import { PreHeroSection } from "@/components/PreHeroSection";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b h-20">
        <div className="container mx-auto flex justify-between items-center px-6 md:px-12 h-full">
          <div className="flex items-center gap-3">
            <Compass className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold tracking-tighter uppercase text-primary">
              K. SIDDARTHA
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#hero" className="text-primary border-b-2 border-primary font-bold text-sm px-1 py-2">
              Home
            </Link>
            <Link href="#education" className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors px-1 py-2">
              Education
            </Link>
            <Link href="#internship" className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors px-1 py-2">
              Internship
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors px-1 py-2">
              Projects
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors px-1 py-2">
              Skills
            </Link>
            <Link href="#certifications" className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors px-1 py-2">
              Credentials
            </Link>
          </nav>
          <Link href="mailto:siddarthakilli143@gmail.com" className={buttonVariants({ className: "rounded-none" })}>
            Contact
          </Link>
        </div>
      </header>

      <main>
        <PreHeroSection />
        <HeroSection />

        {/* Education Section */}
        <ParallaxZSection id="education" className="py-24 bg-background border-b border-border/50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Academic Background</h2>
                <div className="h-1 w-24 bg-primary"></div>
              </div>
              <p className="text-sm text-muted-foreground max-w-md text-right uppercase tracking-widest font-semibold">
                Educational Timeline & Metrics
              </p>
            </div>
            
            <div className="overflow-x-auto rounded-md border">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="font-bold">Qualification</TableHead>
                    <TableHead className="font-bold">Institution</TableHead>
                    <TableHead className="font-bold">Board/University</TableHead>
                    <TableHead className="font-bold text-center">Year</TableHead>
                    <TableHead className="font-bold text-center">Percentage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">B.Tech (CIVIL)</TableCell>
                    <TableCell>Aditya Institute of Technology and Management, Tekkali</TableCell>
                    <TableCell>JNTUGV</TableCell>
                    <TableCell className="text-center">2026</TableCell>
                    <TableCell className="text-center font-bold text-primary">80%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Diploma (CIVIL)</TableCell>
                    <TableCell>Sri Venkateswara Colleges, Etcherla</TableCell>
                    <TableCell>SBTET AP</TableCell>
                    <TableCell className="text-center">2023</TableCell>
                    <TableCell className="text-center font-bold text-primary">77.9%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">SSC</TableCell>
                    <TableCell>Z.P High School, Kasibugga</TableCell>
                    <TableCell>BSEAP</TableCell>
                    <TableCell className="text-center">2020</TableCell>
                    <TableCell className="text-center font-bold text-primary">98%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </ParallaxZSection>

        {/* Internship Section */}
        <ParallaxZSection id="internship" className="py-24 bg-muted/20 border-b border-border/50">
          <div className="container mx-auto px-6 md:px-12">
            <Card className="rounded-none border-border overflow-hidden grid grid-cols-1 md:grid-cols-12 shadow-sm">
              <div className="h-64 md:h-auto overflow-hidden md:col-span-5 relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9T44c45ksoho5twPD9yiXqQS0Y6p9_Rm870HmeDWHF2_wzQSk8Up9pl5pSDua1Q9VM00ksvki-abDqch4fTgia6cMiqNEm5VlPZctrCiNePaGA4e5TIFeilkEymLQhEh_c1Cy6khEav36CdxeP27lQMzscWJTx5fMz2eIE7TKYyHN6fm2Cvq8JTLyvuN_hWlJelZVJis_VZaiMJ8dSeYYyHWzM41nKOrcnGuS029DW9OYSIl1bqXJywDjR-ntXjBkZpQZo3vvJA" 
                  alt="Architectural design studio work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center md:col-span-7 bg-card">
                <Badge className="w-fit mb-4 rounded-none px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20" variant="secondary">
                  INTERNSHIP
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Designing of Residential Building</h3>
                <p className="text-primary text-sm font-bold mb-6 uppercase tracking-wider">
                  AARVEE DESIGN STUDIO, VIZAG | May 2025 – June 2025
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Gained practical insights into the design and planning of residential buildings, including architectural drafting, structural detailing, and space utilization. Developed a foundational understanding of building codes and structural integrity requirements in an industry setting.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="rounded-none font-normal text-sm px-4 py-1.5">Architectural Drafting</Badge>
                  <Badge variant="outline" className="rounded-none font-normal text-sm px-4 py-1.5">Structural Detailing</Badge>
                  <Badge variant="outline" className="rounded-none font-normal text-sm px-4 py-1.5">Space Utilization</Badge>
                </div>
              </div>
            </Card>
          </div>
        </ParallaxZSection>

        {/* Projects Section */}
        <ParallaxZSection id="projects" className="py-24 bg-background border-b border-border/50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Academic Projects</h2>
                <div className="h-1 w-24 bg-primary"></div>
              </div>
              <p className="text-sm text-muted-foreground max-w-md text-right uppercase tracking-widest font-semibold">
                Applied Engineering & Research
              </p>
            </div>
            
            <Card className="rounded-none border-border overflow-hidden grid grid-cols-1 shadow-sm">
              <div className="p-8 md:p-12 flex flex-col justify-center bg-card">
                <Badge className="w-fit mb-4 rounded-none px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20" variant="secondary">
                  RESEARCH PROJECT
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 capitalize">Flood Estimation using HEC-RAS Software on Vamsadhara and Nagavali Basins</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Conducted comprehensive flood estimation and hydrological modeling for the Vamsadhara and Nagavali river basins using HEC-RAS (Hydrologic Engineering Center's River Analysis System). Analyzed topographical data, simulated water surface profiles, and assessed potential flood risks to propose effective mitigation strategies.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="rounded-none font-normal text-sm px-4 py-1.5">HEC-RAS</Badge>
                  <Badge variant="outline" className="rounded-none font-normal text-sm px-4 py-1.5">Hydrological Modeling</Badge>
                  <Badge variant="outline" className="rounded-none font-normal text-sm px-4 py-1.5">Flood Risk Assessment</Badge>
                  <Badge variant="outline" className="rounded-none font-normal text-sm px-4 py-1.5">Topographical Analysis</Badge>
                </div>
              </div>
            </Card>
          </div>
        </ParallaxZSection>

        {/* Technical Skills Section */}
        <ParallaxZSection id="skills" className="py-24 bg-background relative overflow-hidden">
          <div className="bg-grid-dots absolute inset-0 opacity-[0.03] pointer-events-none"></div>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-widest block mb-4">Core Competencies</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Technical Skills</h2>
                <p className="text-lg text-muted-foreground mb-12">
                  Proficient in industry-standard engineering software and multi-paradigm programming tools for structural modeling and computational analysis.
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-sm text-primary uppercase font-bold tracking-wider">Engineering SW</h4>
                    <div className="space-y-3">
                      <div className="bg-card border px-4 py-3 text-sm font-medium flex items-center gap-3 rounded-sm shadow-sm">
                        <PenTool className="w-4 h-4 text-primary" /> AutoCAD
                      </div>
                      <div className="bg-card border px-4 py-3 text-sm font-medium flex items-center gap-3 rounded-sm shadow-sm">
                        <Building className="w-4 h-4 text-primary" /> Revit Architectural
                      </div>
                      <div className="bg-card border px-4 py-3 text-sm font-medium flex items-center gap-3 rounded-sm shadow-sm">
                        <Building className="w-4 h-4 text-primary" /> STAAD.pro
                      </div>
                      <div className="bg-card border px-4 py-3 text-sm font-medium flex items-center gap-3 rounded-sm shadow-sm">
                        <Building className="w-4 h-4 text-primary" /> Primavera
                      </div>
                      <div className="bg-card border px-4 py-3 text-sm font-medium flex items-center gap-3 rounded-sm shadow-sm">
                        <PenTool className="w-4 h-4 text-primary" /> Quantity Estimator
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm text-primary uppercase font-bold tracking-wider">Programming</h4>
                    <div className="space-y-3">
                      <div className="bg-card border px-4 py-3 text-sm font-medium flex items-center gap-3 rounded-sm shadow-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div> Python / C
                      </div>
                      <div className="bg-card border px-4 py-3 text-sm font-medium flex items-center gap-3 rounded-sm shadow-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div> HTML / CSS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-primary/5 border-primary/20 rounded-none p-8 md:p-12 relative overflow-hidden shadow-none">
                <div className="absolute -top-4 -right-4 p-4 opacity-5 pointer-events-none">
                  <Compass className="w-48 h-48 text-primary" />
                </div>
                <CardHeader className="px-0 pt-0 relative z-10">
                  <CardTitle className="text-xl uppercase tracking-widest text-primary">Tools & Environments</CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0 space-y-8 relative z-10">
                  <div>
                    <h5 className="text-xs font-bold text-muted-foreground uppercase mb-4 tracking-wider">Operating Systems</h5>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="rounded-none bg-background px-4 py-1.5 font-medium border-primary/20">Windows</Badge>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-muted-foreground uppercase mb-4 tracking-wider">Productivity Tools</h5>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-full bg-border h-1.5 flex-grow rounded-full overflow-hidden">
                          <div className="bg-primary h-full w-[95%]"></div>
                        </div>
                        <span className="text-sm font-medium w-12 text-right">Word</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-full bg-border h-1.5 flex-grow rounded-full overflow-hidden">
                          <div className="bg-primary h-full w-[90%]"></div>
                        </div>
                        <span className="text-sm font-medium w-12 text-right">Excel</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-full bg-border h-1.5 flex-grow rounded-full overflow-hidden">
                          <div className="bg-primary h-full w-[85%]"></div>
                        </div>
                        <span className="text-sm font-medium w-12 text-right">PPT</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </ParallaxZSection>

        {/* Certifications Section */}
        <ParallaxZSection id="certifications" className="py-24 bg-muted/30 border-y border-border/50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest">Certifications & Engagement</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="rounded-none hover:shadow-md transition-shadow border-border p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start">
                <div className="bg-primary/10 p-4 shrink-0 rounded-sm">
                  <Verified className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Technical Certifications</h4>
                  <p className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-wider">
                    APSSDC (AP State Skill Development Corp)
                  </p>
                  <ul className="text-muted-foreground space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" /> Revit Certification
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" /> AutoCAD Certification
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" /> STAAD.pro Certification
                    </li>
                  </ul>
                </div>
              </Card>
              
              <Card className="rounded-none hover:shadow-md transition-shadow border-border p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start">
                <div className="bg-primary/10 p-4 shrink-0 rounded-sm">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Activities & Research</h4>
                  <p className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-wider">
                    Academic Engagement
                  </p>
                  <p className="text-muted-foreground mb-6 text-sm">
                    Actively involved in academic research and community service through established institutions.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-muted/50 px-4 py-3 text-sm font-medium border-l-2 border-primary">
                      Participation in Research Conclave 2025
                    </div>
                    <div className="bg-muted/50 px-4 py-3 text-sm font-medium border-l-2 border-primary">
                      Active Member: National Service Scheme (NSS)
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </ParallaxZSection>
      </main>

      {/* Footer */}
      <footer className="w-full py-16 bg-zinc-950 text-zinc-300 dark:bg-background dark:border-t">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Compass className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-zinc-100 uppercase tracking-widest">
                K. SIDDARTHA
              </span>
            </div>
            <p className="text-sm text-zinc-400 max-w-xs leading-relaxed">
              Committed to structural excellence and continuous technical advancement in civil engineering.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h5 className="text-sm text-zinc-100 font-bold uppercase tracking-widest">Navigation</h5>
              <ul className="space-y-3">
                <li><Link href="#education" className="text-sm text-zinc-400 hover:text-primary transition-colors">Education</Link></li>
                <li><Link href="#internship" className="text-sm text-zinc-400 hover:text-primary transition-colors">Internship</Link></li>
                <li><Link href="#projects" className="text-sm text-zinc-400 hover:text-primary transition-colors">Projects</Link></li>
                <li><Link href="#certifications" className="text-sm text-zinc-400 hover:text-primary transition-colors">Certifications</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="text-sm text-zinc-100 font-bold uppercase tracking-widest">Connect</h5>
              <ul className="space-y-3">
                <li><a href="mailto:siddarthakilli143@gmail.com" className="text-sm text-zinc-400 hover:text-primary transition-colors">Email</a></li>
                <li><span className="text-sm text-zinc-400">+91-7729006604</span></li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <h5 className="text-sm text-zinc-100 font-bold uppercase tracking-widest">Legal</h5>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-zinc-400 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-zinc-400 hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-zinc-800">
          <p className="text-xs text-zinc-500 text-center uppercase tracking-widest">
            © 2024 KILLI SIDDARTHA. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
