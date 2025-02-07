import Image from "next/image";
import tempPic from "../../public/philip-myrtorp-osuaUc0LMMM-unsplash.jpg";
import tempClean from "../../public/crystal-de-passille-chabot-9gzU1mtTzWM-unsplash.jpg";

export default function Home() {
  return (
    <div>
      {/* Header section */}
      <div className="banner p-40 m-auto">
        <span className="company">Bubble Bros</span>
      </div>

      {/* Insert Navbar section */}

      <main className="flex-1">
        {/* Introduction section */}
        <div className="bg-blue-200">
          <div className="p-12 w-1/2 m-auto flex">
            <div>
              <Image 
                src={tempPic} 
                alt="Picture of Cleaner"
                width={100}
                height={100} 
              />
            </div>

            <div className="flex">
              <div className="p-2">
                Blurb about company, crew, and business plans/goals/ideas.
              </div>
              <div className="p-2 w-20 h-10 text-center text-blue-600 bg-white rounded-sm">
                Contact
              </div>
            </div>
          </div>
        </div>
        

        {/* Services section */}
        <div>
          <div className="p-12 w-1/2 m-auto">
            <div className="services-container flex">
              <div>
                SERVICES
                <ul>
                  <li>Laundry</li>
                  <li>Mop Floors</li>
                  <li>Vacuum</li>
                  <li>Declutter Surfaces</li>
                  <li>Dusting</li>
                  <li>Clean Mirrors</li>
                  <li>Make Bed</li>
                </ul>
              </div>

              <div>
                <Image
                  src={tempClean}
                  alt="Cleaning Supplies"
                  width={300}
                  height={300} 
                />
              </div>
            </div>

            <div>
              Do these pics and services interest you?
              <div className="p-2 w-20 h-10 text-center text-blue-600 bg-white rounded-sm">
                Contact
              </div>
            </div>
          </div>
        </div>


        {/* Blurb section */}
        <div className="bg-blue-200">
          <div className="p-12 w-1/2 m-auto flex">
            <div className="p-2 w-20 h-10 text-center text-blue-600 bg-white rounded-sm">
              Contact
            </div>
            <div className="p-2">
              for a FREE quote
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div className="bg-pink-200 rounded-lg p-8 w-1/2 m-auto mt-4">
          <span>Contact Info:</span>
          Please reach out to the email below with the following information:
          <ul>
            <li>Rooms that need cleaning:</li>
            <li>Number of services:</li>
            <li>Email to contact:</li>
            <li>Other things you might want to ask or let us know:</li>
          </ul>
          Email: Company Email
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Footer
      </footer>
    </div>
  );
}
