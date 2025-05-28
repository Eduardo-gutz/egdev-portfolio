import Card from "./Card";

interface PersonalInfo {
  name: string;
  phone: string;
  experience: string;
  availability: string;
}

interface AboutProps {
  description: string;
  personalInfo: PersonalInfo;
}

const About = ({ description, personalInfo }: AboutProps) => {
  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 w-full lg:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-white">About me</h2>
            <p className="text-text text-lg mb-8">{description}</p>
            <div className="flex items-center gap-4 mb-8">
              <p className="text-5xl font-bold text-accent text-center">
                {personalInfo.experience}
              </p>
              <p className="text-text">
                Years of experience. Specialised in building apps, while ensuring a seamless web experience for end users.
              </p>
            </div>
          </div>
          <div className="flex-1 w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="col-span-2">
                <Card>
                  <div className="flex flex-col justify-center h-full">
                    <div className="text-4xl mb-4">🎨</div>
                    <h3 className="font-bold text-xl mb-2 text-white">UI & UX DESIGNING</h3>
                  </div>
                </Card>
              </div>
              <div className="col-span-3">
                <Card>
                  <div className="flex flex-col justify-center h-full">
                    <div className="text-4xl mb-4">💻</div>
                    <h3 className="font-bold text-xl mb-2 text-white">WEB DEVELOPMENT</h3>
                  </div>
                </Card>
              </div>
              <div className="col-span-3">
                <Card>
                  <div className="flex flex-col justify-center h-full">
                    <div className="text-4xl mb-4">📱</div>
                    <h3 className="font-bold text-xl mb-2 text-white">MOBILE DEVELOPMENT</h3>
                  </div>
                </Card>
              </div>
              <div className="col-span-2">
                <Card>
                  <div className="flex flex-col justify-center h-full">
                    <div className="text-4xl mb-4">🐍</div>
                    <h3 className="font-bold text-xl mb-2 text-white">WEB WITH PYTHON</h3>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 