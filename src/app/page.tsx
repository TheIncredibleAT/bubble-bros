import Image from "next/image";
import tempClean from "../../public/crystal-de-passille-chabot-9gzU1mtTzWM-unsplash.jpg";

export default function Home() {
  return (
    <div>
      {/* Header section */}
      <div className="banner m-auto">
        <div className="p-[80px]">
          <span className="company">CLEA<span className="text-blue-400">N</span>EST</span>
        </div>
      </div>

      {/* Insert Navbar section */}

      <main className="flex-1">
        {/* Introduction section */}
        <div className="bg-blue-200">
          <div className="p-12 w-3/4 m-auto flex">
            <div className="crew-pic">
              <div>The Crew</div>
            </div>

            <div className="flex-1 pl-4">
              <div className="p-2">
                <div className="pb-2">
                  As a worker myself, I understand the inconvenience of coming home after a long day of work to clean. 
                  Having to pick and choose between sacrificing hobbies or cleaning. 
                  Well we're here to help, at CLEANEST we're here to ensure you have plenty of time. 
                  We're here to let YOU CHOOSE.
                </div>
                <div className="pt-2">
                  As a startup cleaning company, we started as just a small side business. 
                  Occasionally picking up jobs from friend referals and local listings. 
                  Now we are a family owned business and have a website, so new customers and old can reach us officially.
                  On here you&apos;ll be able to see our future business plans, goals and future ideas.
                  Hopefully this website will become something to branch out into a more community engaged website, creating forums and accounts.
                </div>
              </div>
              <div className="c-btn p-2 w-20 h-10 text-center text-blue-600 bg-white rounded-sm">
                Contact
              </div>
            </div>
          </div>
        </div>
        

        {/* Services section */}
        <div>
          <div className="p-12 w-1/2 m-auto">
            <div className="services-container flex">
              <div className="p-10">
                <span className="text-[22px]">SERVICES</span>
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

              <div className="p-4">
                <Image
                  src={tempClean}
                  alt="Cleaning Supplies"
                  width={300}
                  height={300} 
                />
              </div>
            </div>

            <div>
              Interested in some of the services?
              <div className="c-btn p-2 w-20 h-10 text-center text-white bg-blue-200 rounded-sm">
                Contact
              </div>
            </div>
          </div>
        </div>


        {/* Blurb section */}
        <div className="bg-blue-200">
          <div className="p-12 w-1/2 m-auto flex">
            <div className="c-btn p-2 w-20 h-10 text-center text-blue-600 bg-white rounded-sm">
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
        <div>
          <form className="contact-form">
            {/* Row 1 */}
            <div className="flex">
              {/* Name */}
              <div className="form-item">
                <label>Name:</label>
                <input type="text" name="name" placeholder="John Smith" className="basic-input" />
              </div>

              {/* Email */}
              <div className="form-item">
                <label>Email:</label>
                <input type="email" name="email" placeholder="Email@aol.com" className="basic-input" />
              </div>

              {/* sqft */}
              <div className="form-item">
                <label>SQFT:</label>
                <input type="text" name="sqft" placeholder="1500" className="sqft" />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex">
              {/* Number of Rooms */}
              <div className="form-item">
                <label>Number of Rooms:</label>
                <select className="room-select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </div>

              {/* Number of Services */}
              <div className="form-item">
                <label>Number of Services:</label>
                <select className="room-select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </div>
            </div>

            {/* Row 3 */}
            {/* Message area */}
            <label>Other Notes:</label>
            <textarea className="contact-message mb-4" placeholder="We have a dog that will be locked up." />

            {/* Row 4 */}
            {/* Submit Button */}
            <button type="submit" className="contact-btn">SUBMIT</button>
          </form>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Footer
      </footer>
    </div>
  );
}
