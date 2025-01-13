import akagera1 from "@/public/images/Akagera1.jpg";
import akagera2 from "@/public/images/akagera2.jpg";
import akagera3 from "@/public/images/akagera3.jpg";
import nyungwe1 from "@/public/images/nyungwe1.jpg";
import nyungwe2 from "@/public/images/nyungwe2.jpg";
import nyungwe3 from "@/public/images/nyungwe3.jpg";
import gorilla1 from "@/public/images/gorilla1.jpg";
import gorilla2 from "@/public/images/Gorilla2.jpg";
import rwanda from "@/public/images/rwanda.jpeg";
import uganda from "@/public/images/uganda.webp";
import kenya from "@/public/images/kenya.jpg";
import tanzania from "@/public/images/tanzania.jpg";
import drc from "@/public/images/congo.jpeg";
import burundi from "@/public/images/burundi.jpg";
import serengeti2 from "@/public/images/serengeti.jpg";
import serengeti1 from "@/public/images/serengeti1.jpg";
import ngorongoro from "@/public/images/ngorongoro.jpg";
import profile1 from "@/public/images/guide1.jpg";
import profile2 from "@/public/images/guide2.webp";
import profile3 from "@/public/images/guide3.webp";
import profile4 from "@/public/images/profile.png";
import carImage1 from "@/public/images/car1.avif";
import carImage2 from "@/public/images/car2.jpg";
import carImage3 from "@/public/images/car3.jpg";
import carImage4 from "@/public/images/car4.avif";
import carImage5 from "@/public/images/car5.webp";
import carImage6 from "@/public/images/car6.jpg";
import toyota1 from "@/public/images/toyota1.avif";
import toyota2 from "@/public/images/toyota2.avif";
import toyota3 from "@/public/images/toyota3.avif";
import toyota4 from "@/public/images/toyota4.avif";
import toyota5 from "@/public/images/toyota5.avif";
import toyota6 from "@/public/images/toyota6.avif";
import landRover1 from "@/public/images/landRover1.webp";
import landRover2 from "@/public/images/landRover2.webp";
import landRover3 from "@/public/images/landRover3.webp";
import landRover4 from "@/public/images/landRover4.webp";
import landRover5 from "@/public/images/landRover5.webp";
import landRover6 from "@/public/images/landRover6.webp";
import landRover7 from "@/public/images/landRover7.webp";
import benzi1 from "@/public/images/benz1.jpg";
import benzi2 from "@/public/images/benz2.jpg";
import benzi3 from "@/public/images/benz3.jpg";
import benzi4 from "@/public/images/benz4.jpg";
import benzi5 from "@/public/images/benz5.jpg";
import tourp from "@/public/images/tourPackage.webp";
import accom1 from "@/public/images/accom1.jpg";
import accom2 from "@/public/images/accom2.webp";
import accom3 from "@/public/images/accom3.jpg";
import mario1 from "@/public/images/mario1.avif";
import mario2 from "@/public/images/mario2.avif";
import mario3 from "@/public/images/mario3.avif";
import mario4 from "@/public/images/mario4.avif";
import mille1 from "@/public/images/mille1.jpg";
import mille2 from "@/public/images/mille2.avif";
import mille3 from "@/public/images/mille3.jpg";
import mille4 from "@/public/images/mille4.jpg";
import ret1 from "@/public/images/ret1.jpg";
import ret2 from "@/public/images/ret2.jpg";
import ret3 from "@/public/images/ret3.jpg";
import ret4 from "@/public/images/ret4.jpg";

export const Parks = [
  {
    title: "Discover The Unexpected In Akagera Nation Park",
    description:
      "Get in touch with us today! Whether you’re planning your next adventure or have questions, we’re here to help",
    image: akagera2,
  },
  {
    title: "Discover The Unexpected In Nyungwe Nation Park",
    description:
      "Get in touch with us today! Whether you’re planning your next adventure or have questions, we’re here to help",
    image: nyungwe2,
  },
  {
    title: "Discover The Unexpected In Volcano Nation Park",
    description:
      "Get in touch with us today! Whether you’re planning your next adventure or have questions, we’re here to help",
    image: gorilla2,
  },
];

export const Gallery = [
  akagera1,
  nyungwe1,
  gorilla1,
  nyungwe1,
  akagera3,
  nyungwe3,
];

export const Destination = [
  {
    location: "Rwanda",
    park: "4",
    image: rwanda,
  },
  {
    location: "Uganda",
    park: "6",
    image: uganda,
  },
  {
    location: "Tanzania",
    park: "9",
    image: tanzania,
  },
  {
    location: "Kenya",
    park: "10",
    image: kenya,
  },
  {
    location: "DRC",
    park: "6",
    image: drc,
  },
  {
    location: "Burundi",
    park: "3",
    image: burundi,
  },
];

export const ServiceList = [
  {
    icon: "octicon:package-16",
    title: "Holiday & Tour Packages",
    link: "/destination",
    image: tourp,
    available: true,
    description:
      "Discover expertly crafted holiday and tour packages that cater to your dream adventures. From cultural explorations to nature retreats, we create experiences you'll cherish forever.",
  },
  {
    icon: "tabler:trekking",
    title: "Gorilla & Chimpanzee Trekking",
    link: "/destination",
    image: gorilla2,
    available: true,
    description:
      "Embark on unforgettable treks to encounter the majestic mountain gorillas and playful chimpanzees in their natural habitats. A rare and awe-inspiring wildlife experience awaits.",
  },
  {
    icon: "ri:hotel-line",
    title: "Accommodation Booking",
    link: "/service/accommodation",
    image: accom1,
    available: true,
    description:
      "Find and book the perfect accommodations for your travels, from luxury resorts to budget-friendly stays, tailored to provide comfort and convenience throughout your journey.",
  },
  {
    icon: "mingcute:car-3-fill",
    title: "Car Rentals",
    link: "/service/car-rental",
    image: carImage2,
    available: true,
    description:
      "Enjoy the freedom to explore with our reliable car rental services. Choose from a range of vehicles that suit your travel needs, ensuring a smooth and hassle-free journey.",
  },
  {
    icon: "healthicons:truck-driver",
    title: "Game Drive Safaris",
    link: "/service",
    image: akagera2,
    available: false,
    description:
      "Experience the thrill of guided game drives through stunning landscapes, offering close encounters with diverse wildlife in some of the world's most beautiful national parks.",
  },
  {
    icon: "fa6-solid:ticket",
    title: "Air Ticket",
    link: "/service",
    image: akagera2,
    available: false,
    description:
      "Simplify your travel planning with our air ticket services. Whether for business or leisure, we ensure seamless booking and competitive fares for your flights.",
  },
  {
    icon: "majesticons:airplane",
    title: "Airport Transfers",
    link: "/service",
    image: akagera2,
    available: false,
    description:
      "Start and end your journey with ease through our reliable airport transfer services, ensuring timely and comfortable rides to and from your destination.",
  },
  {
    icon: "fa:cc-visa",
    title: "Visa Application",
    link: "/service",
    image: akagera2,
    available: false,
    description:
      "Navigate the visa process with confidence. Our visa application services offer guidance and support, making international travel more accessible and stress-free.",
  },
  {
    icon: "mdi:events-check",
    title: "Events Management",
    link: "/service",
    image: akagera2,
    available: false,
    description:
      "Bring your vision to life with our professional events management services. From planning to execution, we ensure every detail is covered for unforgettable events.",
  },
  {
    icon: "gg:camera",
    link: "/service",
    title: "Photo & Video Coverage",
    image: akagera2,
    available: false,
    description:
      "Capture the moments that matter with our professional photo and video coverage services. Perfect for events, travel, and memories that deserve to be preserved beautifully.",
  },
];

export const PackageList = [
  {
    location: "Rwanda",
    package: [
      {
        image: gorilla1,
        days: 3,
        people: "1-20",
        rate: 5,
        name: "Mountain Gorilla Expedition",
        route: "Kigali-Musanze",
        desc: "Come and enjoy a lifetime experience of tracking the endangered Silver-back Gorillas. This trek will take place in Volcanoes National Park through the tropical rainforest in search for some of the only mountain gorillas that are left in the whole world. This national park is also outstanding for great sight views and you will enjoy the environment along with the wealth of bird life which adds to the beauty of the forest.",
        period: "June-Sept / Dec-Feb",
        gallery: [rwanda, gorilla2, gorilla1],
        activity: [
          {
            title: "Arrival",
            desc: "Upon arrival at Kigali International Airport, you will be met by our tours representative, outside the airport arrivals section. After a short briefing, you will embark on your safari. Enjoy a City Tour of Kigali. (Cost of city tour included)",
            inclusion: "Breakfast, Lunch and Dinner",
            accom: "Virunga Lodge, Mountain Gorilla View Lodge",
          },
          {
            title: "Kigali / Volcanoes National Park - Gorilla Trek",
            desc: "Once the trekkers are put into groups, each group’s Lead Guide briefs the trekkers of the trekking procedures as well as the 'do’s and don’ts' while in the presence of gorillas. After the briefing, trekkers return to their respective vehicles for the drive up the mountain to the starting point.",
            inclusion: "Breakfast, Lunch and Dinner",
            accom:
              "Virunga Lodge/Sabyinyo Silverback Lodge/Mountain Gorilla View Lodge",
          },
          {
            title: "Departure",
            desc: "After breakfast at the lodge, depart from foothills of the volcanoes and drive on a scenic drive to Kigali. Everything and everywhere, sheer green and hanging on the hills; Rwanda truly – land of a thousand fertile green hills. (2.5hrs).",
            inclusion: "",
            accom: "",
          },
        ],
        inclusion: [
          "All activities (unless labeled as optional)",
          "All accommodation as stated in the itinerary",
          "A professional driver/guide",
          "All transportation (unless labeled as optional)",
          "Roundtrip airport transfer",
          "Drinking water on all days",
        ],
        exclusion: [
          "All Meals (as specified in the day-by-day section)",
          "International flights (from/to home)",
          "Tips (tipping guideline US$20.00 pp per day)",
          "Personal items (souvenirs, travel insurance, visa fees, etc.)",
        ],
      },
      {
        image: akagera2,
        days: 2,
        people: "2-15",
        rate: 4,
        name: "Akagera Safari Adventure",
        route: "Kigali-Akagera National Park",
        desc: "Discover the wonders of Akagera National Park. From majestic lions to graceful giraffes, this two-day safari offers an exciting escape into Rwanda’s only savannah park, teeming with wildlife and stunning landscapes.",
        period: "All year round",
        gallery: [akagera1, akagera2, akagera3],
        activity: [
          {
            title: "Arrival and Game Drive",
            desc: "Start your journey with a scenic drive to Akagera National Park. Enjoy an afternoon game drive, spotting the Big Five and other iconic African wildlife.",
            inclusion: "Lunch and Dinner",
            accom: "Akagera Game Lodge",
          },
          {
            title: "Morning Boat Safari and Departure",
            desc: "Begin the day with a peaceful boat safari on Lake Ihema, observing hippos, crocodiles, and a variety of bird species. After breakfast, depart for Kigali.",
            inclusion: "Breakfast",
            accom: "N/A",
          },
        ],
        inclusion: [
          "Park entry fees",
          "Game drives with an experienced guide",
          "Boat safari on Lake Ihema",
          "Roundtrip transportation",
        ],
        exclusion: [
          "International flights",
          "Personal items and souvenirs",
          "Optional activities not included in the itinerary",
        ],
      },
      {
        image: nyungwe3,
        days: 4,
        people: "1-10",
        rate: 5,
        name: "Nyungwe Canopy Walk & Chimpanzee Trekking",
        route: "Kigali-Nyamasheke",
        desc: "Explore the ancient rainforest of Nyungwe National Park, home to diverse wildlife, including chimpanzees. Experience breathtaking views on Africa’s highest canopy walk.",
        period: "May-Oct",
        gallery: [nyungwe1, nyungwe2, nyungwe3],
        activity: [
          {
            title: "Arrival and Scenic Drive",
            desc: "Drive from Kigali to Nyungwe National Park, enjoying the picturesque landscape along the way. Optional stopovers at local cultural sites.",
            inclusion: "Lunch and Dinner",
            accom: "One & Only Nyungwe House",
          },
          {
            title: "Chimpanzee Trekking",
            desc: "Set out early for an unforgettable trek to observe chimpanzees in their natural habitat. Learn about their behavior and the lush forest they inhabit.",
            inclusion: "Breakfast and Lunch",
            accom: "One & Only Nyungwe House",
          },
          {
            title: "Canopy Walk and Departure",
            desc: "Conclude your adventure with the iconic canopy walk, offering panoramic views of the forest. Depart for Kigali after lunch.",
            inclusion: "Breakfast and Lunch",
            accom: "N/A",
          },
        ],
        inclusion: [
          "Chimpanzee trekking permits",
          "Canopy walk fees",
          "Professional trekking guide",
          "Transportation to/from Kigali",
          "All meals as listed",
        ],
        exclusion: [
          "International flights",
          "Personal travel insurance",
          "Tips and gratuities",
          "Optional activities",
        ],
      },
    ],
  },
  {
    location: "Tanzania",
    package: [
      {
        image: tanzania,
        days: 10,
        people: "1-6",
        rate: 5,
        name: "Combine Kenya Safari and Zanzibar Beach Holiday",
        route: "ABERDARE, LAKE NAKURU, MASAI MARA, ZANZIBAR",
        desc: "This 10-day adventure combines the thrill of a Kenyan safari with the relaxation of Zanzibar’s pristine beaches. Experience game drives in the Masai Mara and unwind with crystal-clear waters in Zanzibar.",
        period: "Year-round",
        gallery: [tanzania, ngorongoro],
        activity: [
          {
            title: "Arrival in Nairobi",
            desc: "Arrive at Jomo Kenyatta International Airport and transfer to your hotel in Nairobi. Enjoy a welcome dinner.",
            inclusion: "Dinner",
            accom: "Fairmont The Norfolk, Nairobi",
          },
          {
            title: "Game Drive in Masai Mara",
            desc: "Explore the world-famous Masai Mara Game Reserve. Spot the Big Five and enjoy a picnic lunch in the savannah.",
            inclusion: "Breakfast, Lunch, and Dinner",
            accom: "Mara Serena Safari Lodge",
          },
          {
            title: "Zanzibar Beach Holiday",
            desc: "Fly to Zanzibar for a relaxing beach holiday. Explore Stone Town and relax on the sandy beaches.",
            inclusion: "Breakfast, Lunch, and Dinner",
            accom: "Baraza Resort and Spa",
          },
        ],
        inclusion: [
          "All park fees",
          "Full-board accommodation",
          "Domestic flights",
          "Airport transfers",
          "Game drives",
        ],
        exclusion: [
          "International flights",
          "Visa fees",
          "Travel insurance",
          "Personal expenses",
        ],
      },
      {
        image: serengeti1,
        days: 7,
        people: "2-10",
        rate: 5,
        name: "Serengeti and Ngorongoro Crater Safari",
        route: "Arusha-Serengeti-Ngorongoro Crater",
        desc: "Embark on a thrilling 7-day safari adventure through Tanzania’s iconic Serengeti National Park and the breathtaking Ngorongoro Crater. Witness the Great Migration, spot the Big Five, and immerse yourself in the beauty of Africa’s wilderness.",
        period: "June-October / December-March",
        gallery: [serengeti1, ngorongoro, serengeti2],
        activity: [
          {
            title: "Arrival in Arusha",
            desc: "Arrive at Kilimanjaro International Airport and transfer to your lodge in Arusha. Prepare for your safari adventure with a briefing from your guide.",
            inclusion: "Dinner",
            accom: "Arusha Serena Hotel",
          },
          {
            title: "Serengeti National Park - Game Drives",
            desc: "Spend three days exploring the vast plains of the Serengeti. Witness incredible wildlife, including the annual Great Migration, and enjoy morning and evening game drives.",
            inclusion: "Breakfast, Lunch, and Dinner",
            accom: "Serengeti Serena Safari Lodge",
          },
          {
            title: "Ngorongoro Crater Exploration",
            desc: "Descend into the Ngorongoro Crater for a full day of game viewing. This UNESCO World Heritage Site is home to an astonishing concentration of wildlife.",
            inclusion: "Breakfast, Lunch, and Dinner",
            accom: "Ngorongoro Serena Lodge",
          },
          {
            title: "Departure from Arusha",
            desc: "Return to Arusha for a farewell lunch before transferring to Kilimanjaro International Airport for your departure flight.",
            inclusion: "Breakfast and Lunch",
            accom: "N/A",
          },
        ],
        inclusion: [
          "Park fees for Serengeti and Ngorongoro",
          "Professional safari guide",
          "Game drives in a 4x4 safari vehicle",
          "All meals as indicated",
          "Full-board accommodation",
          "Airport transfers",
        ],
        exclusion: [
          "International flights",
          "Travel insurance",
          "Tips for guides and drivers",
          "Personal expenses (e.g., souvenirs)",
          "Optional activities not listed in the itinerary",
        ],
      },
    ],
  },
  {
    location: "Kenya",
    package: [
      {
        image: kenya,
        days: 3,
        people: "1-5",
        rate: 4,
        name: "Savannah Adventure in Amboseli",
        route: "Nairobi-Amboseli",
        desc: "Immerse yourself in the vast plains of Amboseli National Park with breathtaking views of Mount Kilimanjaro and large herds of elephants.",
        period: "June-Oct",
        gallery: [kenya],
        activity: [
          {
            title: "Arrival in Nairobi",
            desc: "Upon arrival at Jomo Kenyatta International Airport, transfer to Amboseli National Park. Enjoy a short game drive en route.",
            inclusion: "Dinner",
            accom: "Ol Tukai Lodge",
          },
          {
            title: "Full-Day Game Drive",
            desc: "Explore Amboseli with a full-day game drive. Capture iconic photos of elephants against the backdrop of Mount Kilimanjaro.",
            inclusion: "Breakfast, Lunch, and Dinner",
            accom: "Ol Tukai Lodge",
          },
          {
            title: "Departure",
            desc: "After breakfast, drive back to Nairobi and transfer to the airport for your departure flight.",
            inclusion: "Breakfast",
            accom: "",
          },
        ],
        inclusion: [
          "Park entry fees",
          "Game drives",
          "Full-board accommodation",
          "Airport transfers",
          "Drinking water",
        ],
        exclusion: [
          "International flights",
          "Visa fees",
          "Travel insurance",
          "Personal expenses",
        ],
      },
    ],
  },
];

export const AboutArray = [
  {
    title: "What We Do",
    description:
      "Mahali Africa Adventures, located in the vibrant heart of Kigali, Rwanda, is a premier travel and tour agency dedicated to creating unforgettable journeys. We specialize in crafting immersive experiences that showcase Rwanda’s breathtaking landscapes, rich culture, and incredible wildlife. Whether you’re seeking thrilling safaris or serene escapes, we promise to turn your travel dreams into lasting memories.",
  },
  {
    title: "Our Vision",
    description:
      "Our vision is to become the ultimate gateway to East Africa’s unparalleled beauty and rich cultural heritage. We aim to inspire travelers by showcasing the region’s breathtaking landscapes, diverse wildlife, and vibrant traditions. Through exceptional experiences, we strive to connect the world to East Africa’s wonders and legacy.",
  },
  {
    title: "Our Mission",
    description:
      "Our mission is to promote responsible tourism by fostering meaningful connections and empowering local communities. We are committed to preserving East Africa’s natural beauty, cultural heritage, and overall wellbeing for future generations. Through sustainable practices, we aim to create impactful travel experiences that benefit both travelers and the communities we serve.",
  },
  {
    title: "Our Uniqueness",
    description:
      "Our uniqueness lies in our expertise in event planning and sustainable travel, setting us apart as leaders in the industry. We craft unforgettable adventures that leave a lasting impact on travelers while directly benefiting local communities. By combining innovation, sustainability, and cultural immersion, we deliver experiences unlike any other.",
  },
];

export const AboutService = [
  {
    title: "Well-Established",
    description:
      "With roots dating back to 2009, our journey began with Dan Rwiyamirira [Managing Director], whose passion for exploration as a tour guide and driver inspired the founding of our company. Over the years, we've grown into a trusted name in travel, delivering unforgettable experiences.",
  },
  {
    title: "Locally Owned",
    description:
      "Proudly based in Rwanda, we are a 100% locally-owned business. Our team is composed entirely of talented Rwandans who ensure your journey is seamless and authentic, showcasing the very best of our culture and landscapes.",
  },
  {
    title: "24/7 Customer Service",
    description:
      "Your comfort and satisfaction are our priorities. With 24/7 customer support, we are by your side from the moment you arrive to your departure. Expect personalized briefings and attentive care throughout your adventure.",
  },
  {
    title: "Acclaimed Recognition",
    description:
      "Our excellence has been recognized worldwide, with accolades such as the Tripadvisor Certificate of Excellence since 2015 and prestigious wins at the World Travel Awards, affirming our commitment to delivering unparalleled travel experiences.",
  },
  {
    title: "Wide Range of Tours",
    description:
      "Explore a world of possibilities with our diverse offerings, from thrilling safari tours and romantic wedding packages to Kilimanjaro climbs, Zanzibar retreats, Great Migration adventures, and unforgettable journeys across East and Southern Africa.",
  },
  {
    title: "Growing Reputation",
    description:
      "Our reputation speaks volumes, with thousands of glowing reviews on platforms like TripAdvisor, Google, and Trustpilot. Guests consistently praise our expertly curated Serengeti Great Migration itineraries and our dedication to creating extraordinary travel memories.",
  },
];

export const ServiceOptions = [
  { value: "Holiday & Tour Packages" },
  { value: "Gorilla & Chimpanzee Trekking" },
  { value: "accommodation Booking" },
  { value: "Car Rentals" },
  { value: "Events Management" },
];

export const DestinationCountry = [
  {
    location: "Rwanda",
    package: [
      {
        image: gorilla1,
        days: 3,
        people: "1-20",
        rate: 5,
        name: "Mountain Gorilla Expedition",
        route: "Kigali-Musanze",
        desc: "Come and enjoy a lifetime experience of tracking the endangered Silver-back Gorillas. This trek will take place in Volcanoes National Park through the tropical rainforest in search for some of the only mountain gorillas that are left in the whole world. This national park is also outstanding for great sight views and you will enjoy the environment along with the wealth of bird life which adds to the beauty of the forest.",
        period: "June-Sept / Dec-Feb",
        gallery: [rwanda, gorilla2, gorilla1],
        activity: [
          {
            title: "Arrival",
            desc: "Upon arrival at Kigali International Airport, you will be met by our tours representative, outside the airport arrivals section. After a short briefing, you will embark on your safari. Enjoy a City Tour of Kigali. (Cost of city tour included)",
            inclusion: "Breakfast, Lunch and Dinner",
            accom: "Virunga Lodge, Mountain Gorilla View Lodge",
          },
          {
            title: "Kigali / Volcanoes National Park - Gorilla Trek",
            desc: "Once the trekkers are put into groups, each group’s Lead Guide briefs the trekkers of the trekking procedures as well as the 'do’s and don’ts' while in the presence of gorillas. After the briefing, trekkers return to their respective vehicles for the drive up the mountain to the starting point.",
            inclusion: "Breakfast, Lunch and Dinner",
            accom:
              "Virunga Lodge/Sabyinyo Silverback Lodge/Mountain Gorilla View Lodge",
          },
          {
            title: "Departure",
            desc: "After breakfast at the lodge, depart from foothills of the volcanoes and drive on a scenic drive to Kigali. Everything and everywhere, sheer green and hanging on the hills; Rwanda truly – land of a thousand fertile green hills. (2.5hrs).",
            inclusion: "",
            accom: "",
          },
        ],
        inclusion: [
          "All activities (unless labeled as optional)",
          "All accommodation as stated in the itinerary",
          "A professional driver/guide",
          "All transportation (unless labeled as optional)",
          "Roundtrip airport transfer",
          "Drinking water on all days",
        ],
        exclusion: [
          "All Meals (as specified in the day-by-day section)",
          "International flights (from/to home)",
          "Tips (tipping guideline US$20.00 pp per day)",
          "Personal items (souvenirs, travel insurance, visa fees, etc.)",
        ],
      },
      {
        image: akagera2,
        days: 2,
        people: "2-15",
        rate: 4,
        name: "Akagera Safari Adventure",
        route: "Kigali-Akagera National Park",
        desc: "Discover the wonders of Akagera National Park. From majestic lions to graceful giraffes, this two-day safari offers an exciting escape into Rwanda’s only savannah park, teeming with wildlife and stunning landscapes.",
        period: "All year round",
        gallery: [akagera1, akagera2, akagera3],
        activity: [
          {
            title: "Arrival and Game Drive",
            desc: "Start your journey with a scenic drive to Akagera National Park. Enjoy an afternoon game drive, spotting the Big Five and other iconic African wildlife.",
            inclusion: "Lunch and Dinner",
            accom: "Akagera Game Lodge",
          },
          {
            title: "Morning Boat Safari and Departure",
            desc: "Begin the day with a peaceful boat safari on Lake Ihema, observing hippos, crocodiles, and a variety of bird species. After breakfast, depart for Kigali.",
            inclusion: "Breakfast",
            accom: "N/A",
          },
        ],
        inclusion: [
          "Park entry fees",
          "Game drives with an experienced guide",
          "Boat safari on Lake Ihema",
          "Roundtrip transportation",
        ],
        exclusion: [
          "International flights",
          "Personal items and souvenirs",
          "Optional activities not included in the itinerary",
        ],
      },
      {
        image: nyungwe3,
        days: 4,
        people: "1-10",
        rate: 5,
        name: "Nyungwe Canopy Walk & Chimpanzee Trekking",
        route: "Kigali-Nyamasheke",
        desc: "Explore the ancient rainforest of Nyungwe National Park, home to diverse wildlife, including chimpanzees. Experience breathtaking views on Africa’s highest canopy walk.",
        period: "May-Oct",
        gallery: [nyungwe1, nyungwe2, nyungwe3],
        activity: [
          {
            title: "Arrival and Scenic Drive",
            desc: "Drive from Kigali to Nyungwe National Park, enjoying the picturesque landscape along the way. Optional stopovers at local cultural sites.",
            inclusion: "Lunch and Dinner",
            accom: "One & Only Nyungwe House",
          },
          {
            title: "Chimpanzee Trekking",
            desc: "Set out early for an unforgettable trek to observe chimpanzees in their natural habitat. Learn about their behavior and the lush forest they inhabit.",
            inclusion: "Breakfast and Lunch",
            accom: "One & Only Nyungwe House",
          },
          {
            title: "Canopy Walk and Departure",
            desc: "Conclude your adventure with the iconic canopy walk, offering panoramic views of the forest. Depart for Kigali after lunch.",
            inclusion: "Breakfast and Lunch",
            accom: "N/A",
          },
        ],
        inclusion: [
          "Chimpanzee trekking permits",
          "Canopy walk fees",
          "Professional trekking guide",
          "Transportation to/from Kigali",
          "All meals as listed",
        ],
        exclusion: [
          "International flights",
          "Personal travel insurance",
          "Tips and gratuities",
          "Optional activities",
        ],
      },
    ],
    description: {
      image: rwanda,
      content:
        "Rwanda, the “Land of a Thousand Hills,” captivates with its picturesque landscapes and vibrant culture. From the lush forests of Volcanoes National Park to the serene shores of Lake Kivu, the country offers a harmonious blend of natural beauty and historical significance. Rwanda is renowned for its conservation efforts, particularly in protecting mountain gorillas, making it a prime destination for unforgettable wildlife encounters. Cultural experiences, poignant memorials, and the warmth of the Rwandan people create a rich tapestry for travelers seeking both adventure and reflection.",
    },
    higlights: [
      {
        icon: "game-icons:gorilla",
        title: "Gorilla Trekking in Volcanoes National Park",
        desc: "Embark on a soul-stirring adventure through the volcanic terrain to encounter endangered mountain gorillas, contributing to their conservation and immersing yourself in Rwanda's biodiversity.",
      },
      {
        icon: "game-icons:hummingbird",
        title: "Akagera National Park",
        desc: 'Explore the diverse landscapes of Akagera, where savannahs meet lakes, offering a unique safari experience with opportunities to witness the "Big Five" and diverse birdlife.',
      },
      {
        icon: "f7:tree",
        title: "Nyungwe Forest National Park",
        desc: "Delve into the ancient rainforest of Nyungwe, a haven for primates and exotic birds, and experience the thrilling canopy walk for breathtaking views.",
      },
      {
        icon: "mdi:tombstone",
        title: "Kigali Genocide Memorial",
        desc: "Pay respects at the Kigali Genocide Memorial, a poignant reminder of Rwanda's history. Gain insights into the nation's resilience and commitment to unity and reconciliation.",
      },
      {
        icon: "material-symbols:water-lux-outline-rounded",
        title: "Lake Kivu Exploration",
        desc: "Discover the tranquil beauty of Lake Kivu, surrounded by rolling hills. Relax on serene beaches, explore lakeside towns, and savor the unique culture along Rwanda's largest lake.",
      },
      {
        icon: "mdi:dance-ballroom",
        title: "Cultural Encounters in Musanze",
        desc: "Engage with local communities in Musanze, fostering a cultural immersion into Rwandan traditions. Explore vibrant markets, share meals with locals, and witness traditional performances. This authentic experience in Musanze offers profound insights into Rwanda’s rich cultural tapestry.",
      },
      {
        icon: "tabler:trekking",
        title: "Chimpanzee Trekking in Nyungwe",
        desc: "Immerse yourself in the ancient rainforest of Nyungwe, embarking on a trek to witness playful chimpanzees and diverse primate species. The experience offers a captivating glimpse into their natural behaviors, surrounded by the lush biodiversity of Nyungwe Forest National Park.",
      },
      {
        icon: "ph:coffee-bean-fill",
        title: "Rwanda's Coffee Experience",
        desc: "Embark on a journey to the heart of Semuliki National Park, where natural wonders abound. Discover the geothermal marvels of the hot springs, surrounded by lush jungle vegetation and exotic wildlife. Experience the therapeutic allure of the springs, set against the backdrop of the park’s diverse ecosystems, creating a harmonious blend of relaxation and nature exploration.",
      },
      {
        icon: "file-icons:shipit",
        title: "Boat Safari on Lake Ihema",
        desc: "Embark on a serene boat safari on Lake Ihema in Akagera National Park. Cruise along tranquil waters, encountering hippos, crocodiles, and a plethora of birdlife. This unique perspective provides an intimate encounter with Rwanda’s diverse wildlife against the backdrop of the lake’s picturesque landscapes.",
      },
    ],
    season: [
      {
        period: "Dry Season",
        icon: "fa6-solid:cloud-sun",
        time: "June to September",
        desc: "Considered the best time for gorilla trekking and safaris. Dry weather ensures optimal trekking conditions and wildlife visibility in national parks.",
      },
      {
        period: "Long Dry Season",
        icon: "stash:sun",
        time: "December to February",
        desc: "Another favorable period for wildlife viewing with clear skies. Ideal for exploring diverse ecosystems and engaging in cultural experiences across the country..",
      },
      {
        period: "Rainy Season",
        icon: "wi:wu-rain",
        time: "March to May and October to November",
        desc: "While the wet season brings lush landscapes, it can affect travel conditions. Gorilla trekking remains possible, and fewer tourists offer a more intimate experience..",
      },
    ],
  },
  {
    location: "Tanzania",
    package: [
      {
        image: tanzania,
        days: 10,
        people: "1-6",
        rate: 5,
        name: "Combine Kenya Safari and Zanzibar Beach Holiday",
        route: "ABERDARE, LAKE NAKURU, MASAI MARA, ZANZIBAR",
        desc: "This 10-day adventure combines the thrill of a Kenyan safari with the relaxation of Zanzibar’s pristine beaches. Experience game drives in the Masai Mara and unwind with crystal-clear waters in Zanzibar.",
        period: "Year-round",
        gallery: [tanzania, ngorongoro],
        activity: [
          {
            title: "Arrival in Nairobi",
            desc: "Arrive at Jomo Kenyatta International Airport and transfer to your hotel in Nairobi. Enjoy a welcome dinner.",
            inclusion: "Dinner",
            accom: "Fairmont The Norfolk, Nairobi",
          },
          {
            title: "Game Drive in Masai Mara",
            desc: "Explore the world-famous Masai Mara Game Reserve. Spot the Big Five and enjoy a picnic lunch in the savannah.",
            inclusion: "Breakfast, Lunch, and Dinner",
            accom: "Mara Serena Safari Lodge",
          },
          {
            title: "Zanzibar Beach Holiday",
            desc: "Fly to Zanzibar for a relaxing beach holiday. Explore Stone Town and relax on the sandy beaches.",
            inclusion: "Breakfast, Lunch, and Dinner",
            accom: "Baraza Resort and Spa",
          },
        ],
        inclusion: [
          "All park fees",
          "Full-board accommodation",
          "Domestic flights",
          "Airport transfers",
          "Game drives",
        ],
        exclusion: [
          "International flights",
          "Visa fees",
          "Travel insurance",
          "Personal expenses",
        ],
      },
      {
        image: serengeti1,
        days: 7,
        people: "2-10",
        rate: 5,
        name: "Serengeti and Ngorongoro Crater Safari",
        route: "Arusha-Serengeti-Ngorongoro Crater",
        desc: "Embark on a thrilling 7-day safari adventure through Tanzania’s iconic Serengeti National Park and the breathtaking Ngorongoro Crater. Witness the Great Migration, spot the Big Five, and immerse yourself in the beauty of Africa’s wilderness.",
        period: "June-October / December-March",
        gallery: [serengeti1, ngorongoro, serengeti2],
        activity: [
          {
            title: "Arrival in Arusha",
            desc: "Arrive at Kilimanjaro International Airport and transfer to your lodge in Arusha. Prepare for your safari adventure with a briefing from your guide.",
            inclusion: "Dinner",
            accom: "Arusha Serena Hotel",
          },
          {
            title: "Serengeti National Park - Game Drives",
            desc: "Spend three days exploring the vast plains of the Serengeti. Witness incredible wildlife, including the annual Great Migration, and enjoy morning and evening game drives.",
            inclusion: "Breakfast, Lunch, and Dinner",
            accom: "Serengeti Serena Safari Lodge",
          },
          {
            title: "Ngorongoro Crater Exploration",
            desc: "Descend into the Ngorongoro Crater for a full day of game viewing. This UNESCO World Heritage Site is home to an astonishing concentration of wildlife.",
            inclusion: "Breakfast, Lunch, and Dinner",
            accom: "Ngorongoro Serena Lodge",
          },
          {
            title: "Departure from Arusha",
            desc: "Return to Arusha for a farewell lunch before transferring to Kilimanjaro International Airport for your departure flight.",
            inclusion: "Breakfast and Lunch",
            accom: "N/A",
          },
        ],
        inclusion: [
          "Park fees for Serengeti and Ngorongoro",
          "Professional safari guide",
          "Game drives in a 4x4 safari vehicle",
          "All meals as indicated",
          "Full-board accommodation",
          "Airport transfers",
        ],
        exclusion: [
          "International flights",
          "Travel insurance",
          "Tips for guides and drivers",
          "Personal expenses (e.g., souvenirs)",
          "Optional activities not listed in the itinerary",
        ],
      },
    ],
    description: {
      image: tanzania,
      content:
        "Tanzania, the “Land of a Thousand Hills,” captivates with its picturesque landscapes and vibrant culture. From the lush forests of Volcanoes National Park to the serene shores of Lake Kivu, the country offers a harmonious blend of natural beauty and historical significance. Tanzania is renowned for its conservation efforts, particularly in protecting mountain gorillas, making it a prime destination for unforgettable wildlife encounters. Cultural experiences, poignant memorials, and the warmth of the Tanzanian people create a rich tapestry for travelers seeking both adventure and reflection.",
    },
    higlights: [
      {
        icon: "game-icons:gorilla",
        title: "Gorilla Trekking in Volcanoes National Park",
        desc: "Embark on a soul-stirring adventure through the volcanic terrain to encounter endangered mountain gorillas, contributing to their conservation and immersing yourself in Tanzania's biodiversity.",
      },
      {
        icon: "game-icons:hummingbird",
        title: "Akagera National Park",
        desc: 'Explore the diverse landscapes of Akagera, where savannahs meet lakes, offering a unique safari experience with opportunities to witness the "Big Five" and diverse birdlife.',
      },
      {
        icon: "f7:tree",
        title: "Nyungwe Forest National Park",
        desc: "Delve into the ancient rainforest of Nyungwe, a haven for primates and exotic birds, and experience the thrilling canopy walk for breathtaking views.",
      },
      {
        icon: "mdi:tombstone",
        title: "Kigali Genocide Memorial",
        desc: "Pay respects at the Kigali Genocide Memorial, a poignant reminder of Tanzania's history. Gain insights into the nation's resilience and commitment to unity and reconciliation.",
      },
      {
        icon: "material-symbols:water-lux-outline-rounded",
        title: "Lake Kivu Exploration",
        desc: "Discover the tranquil beauty of Lake Kivu, surrounded by rolling hills. Relax on serene beaches, explore lakeside towns, and savor the unique culture along Tanzania's largest lake.",
      },
      {
        icon: "mdi:dance-ballroom",
        title: "Cultural Encounters in Musanze",
        desc: "Engage with local communities in Musanze, fostering a cultural immersion into Tanzanian traditions. Explore vibrant markets, share meals with locals, and witness traditional performances. This authentic experience in Musanze offers profound insights into Tanzania’s rich cultural tapestry.",
      },
      {
        icon: "tabler:trekking",
        title: "Chimpanzee Trekking in Nyungwe",
        desc: "Immerse yourself in the ancient rainforest of Nyungwe, embarking on a trek to witness playful chimpanzees and diverse primate species. The experience offers a captivating glimpse into their natural behaviors, surrounded by the lush biodiversity of Nyungwe Forest National Park.",
      },
      {
        icon: "ph:coffee-bean-fill",
        title: "Tanzania's Coffee Experience",
        desc: "Embark on a journey to the heart of Semuliki National Park, where natural wonders abound. Discover the geothermal marvels of the hot springs, surrounded by lush jungle vegetation and exotic wildlife. Experience the therapeutic allure of the springs, set against the backdrop of the park’s diverse ecosystems, creating a harmonious blend of relaxation and nature exploration.",
      },
      {
        icon: "file-icons:shipit",
        title: "Boat Safari on Lake Ihema",
        desc: "Embark on a serene boat safari on Lake Ihema in Akagera National Park. Cruise along tranquil waters, encountering hippos, crocodiles, and a plethora of birdlife. This unique perspective provides an intimate encounter with Tanzania’s diverse wildlife against the backdrop of the lake’s picturesque landscapes.",
      },
    ],
    season: [
      {
        period: "Dry Season",
        icon: "fa6-solid:cloud-sun",
        time: "June to September",
        desc: "Considered the best time for gorilla trekking and safaris. Dry weather ensures optimal trekking conditions and wildlife visibility in national parks.",
      },
      {
        period: "Long Dry Season",
        icon: "stash:sun",
        time: "December to February",
        desc: "Another favorable period for wildlife viewing with clear skies. Ideal for exploring diverse ecosystems and engaging in cultural experiences across the country..",
      },
      {
        period: "Rainy Season",
        icon: "wi:wu-rain",
        time: "March to May and October to November",
        desc: "While the wet season brings lush landscapes, it can affect travel conditions. Gorilla trekking remains possible, and fewer tourists offer a more intimate experience..",
      },
    ],
  },
  {
    location: "Kenya",
    package: [
      {
        image: kenya,
        days: 3,
        people: "1-5",
        rate: 4,
        name: "Savannah Adventure in Amboseli",
        route: "Nairobi-Amboseli",
        desc: "Immerse yourself in the vast plains of Amboseli National Park with breathtaking views of Mount Kilimanjaro and large herds of elephants.",
        period: "June-Oct",
        gallery: [kenya],
        activity: [
          {
            title: "Arrival in Nairobi",
            desc: "Upon arrival at Jomo Kenyatta International Airport, transfer to Amboseli National Park. Enjoy a short game drive en route.",
            inclusion: "Dinner",
            accom: "Ol Tukai Lodge",
          },
          {
            title: "Full-Day Game Drive",
            desc: "Explore Amboseli with a full-day game drive. Capture iconic photos of elephants against the backdrop of Mount Kilimanjaro.",
            inclusion: "Breakfast, Lunch, and Dinner",
            accom: "Ol Tukai Lodge",
          },
          {
            title: "Departure",
            desc: "After breakfast, drive back to Nairobi and transfer to the airport for your departure flight.",
            inclusion: "Breakfast",
            accom: "",
          },
        ],
        inclusion: [
          "Park entry fees",
          "Game drives",
          "Full-board accommodation",
          "Airport transfers",
          "Drinking water",
        ],
        exclusion: [
          "International flights",
          "Visa fees",
          "Travel insurance",
          "Personal expenses",
        ],
      },
    ],
    description: {
      image: kenya,
      content:
        "Kenya, the “Land of a Thousand Hills,” captivates with its picturesque landscapes and vibrant culture. From the lush forests of Volcanoes National Park to the serene shores of Lake Kivu, the country offers a harmonious blend of natural beauty and historical significance. Kenya is renowned for its conservation efforts, particularly in protecting mountain gorillas, making it a prime destination for unforgettable wildlife encounters. Cultural experiences, poignant memorials, and the warmth of the Kenyan people create a rich tapestry for travelers seeking both adventure and reflection.",
    },
    higlights: [
      {
        icon: "game-icons:gorilla",
        title: "Gorilla Trekking in Volcanoes National Park",
        desc: "Embark on a soul-stirring adventure through the volcanic terrain to encounter endangered mountain gorillas, contributing to their conservation and immersing yourself in Kenya's biodiversity.",
      },
      {
        icon: "game-icons:hummingbird",
        title: "Akagera National Park",
        desc: 'Explore the diverse landscapes of Akagera, where savannahs meet lakes, offering a unique safari experience with opportunities to witness the "Big Five" and diverse birdlife.',
      },
      {
        icon: "f7:tree",
        title: "Nyungwe Forest National Park",
        desc: "Delve into the ancient rainforest of Nyungwe, a haven for primates and exotic birds, and experience the thrilling canopy walk for breathtaking views.",
      },
      {
        icon: "mdi:tombstone",
        title: "Kigali Genocide Memorial",
        desc: "Pay respects at the Kigali Genocide Memorial, a poignant reminder of Kenya's history. Gain insights into the nation's resilience and commitment to unity and reconciliation.",
      },
      {
        icon: "material-symbols:water-lux-outline-rounded",
        title: "Lake Kivu Exploration",
        desc: "Discover the tranquil beauty of Lake Kivu, surrounded by rolling hills. Relax on serene beaches, explore lakeside towns, and savor the unique culture along Kenya's largest lake.",
      },
      {
        icon: "mdi:dance-ballroom",
        title: "Cultural Encounters in Musanze",
        desc: "Engage with local communities in Musanze, fostering a cultural immersion into Kenyan traditions. Explore vibrant markets, share meals with locals, and witness traditional performances. This authentic experience in Musanze offers profound insights into Kenya’s rich cultural tapestry.",
      },
      {
        icon: "tabler:trekking",
        title: "Chimpanzee Trekking in Nyungwe",
        desc: "Immerse yourself in the ancient rainforest of Nyungwe, embarking on a trek to witness playful chimpanzees and diverse primate species. The experience offers a captivating glimpse into their natural behaviors, surrounded by the lush biodiversity of Nyungwe Forest National Park.",
      },
      {
        icon: "ph:coffee-bean-fill",
        title: "Kenya's Coffee Experience",
        desc: "Embark on a journey to the heart of Semuliki National Park, where natural wonders abound. Discover the geothermal marvels of the hot springs, surrounded by lush jungle vegetation and exotic wildlife. Experience the therapeutic allure of the springs, set against the backdrop of the park’s diverse ecosystems, creating a harmonious blend of relaxation and nature exploration.",
      },
      {
        icon: "file-icons:shipit",
        title: "Boat Safari on Lake Ihema",
        desc: "Embark on a serene boat safari on Lake Ihema in Akagera National Park. Cruise along tranquil waters, encountering hippos, crocodiles, and a plethora of birdlife. This unique perspective provides an intimate encounter with Tanzania’s diverse wildlife against the backdrop of the lake’s picturesque landscapes.",
      },
    ],
    season: [
      {
        period: "Dry Season",
        icon: "fa6-solid:cloud-sun",
        time: "June to September",
        desc: "Considered the best time for gorilla trekking and safaris. Dry weather ensures optimal trekking conditions and wildlife visibility in national parks.",
      },
      {
        period: "Long Dry Season",
        icon: "stash:sun",
        time: "December to February",
        desc: "Another favorable period for wildlife viewing with clear skies. Ideal for exploring diverse ecosystems and engaging in cultural experiences across the country..",
      },
      {
        period: "Rainy Season",
        icon: "wi:wu-rain",
        time: "March to May and October to November",
        desc: "While the wet season brings lush landscapes, it can affect travel conditions. Gorilla trekking remains possible, and fewer tourists offer a more intimate experience..",
      },
    ],
  },
];

export const StaffList = [
  {
    category: "Board Of Directors",
    list: [
      {
        name: "Carolyne Mziray Lawrence",
        title: "Chairperson of the Board",
        image: "",
      },
      { name: "Jackson Mugumya", title: "Board Member", image: "" },
      { name: "Daniella Rusamaza", title: "Board Member", image: "" },
      { name: "Egide Rucyaha", title: "Board Member", image: "" },
      { name: "Dan Rwiyamira", title: "Secretary to the Board", image: "" },
    ],
  },
  {
    category: "Management",
    list: [
      { name: "Giselle K. Bigabiro", title: "Sales and Marketing", image: "" },
      { name: "Vanessa Kanangire Ukeye", title: "General Manager", image: "" },
      {
        name: "Patience Ntaganzwa",
        title: "Travel and Tour Manager",
        image: "",
      },
    ],
  },
  {
    category: "Guide",
    list: [
      { name: "Paul Mugisha", title: "Guide", image: "" },
      { name: "Joe Smith", title: "Guide", image: "" },
      { name: "Luke Otota", title: "Guide", image: "" },
      { name: "Jackson Emma", title: "Guide", image: "" },
    ],
  },
];

export const Testimonial = [
  {
    name: "John Doe",
    position: "CEO, GreenTech Solutions",
    comment:
      "Our experience was simply outstanding! The team's attention to detail and commitment to excellence made our trip unforgettable.",
    image: profile1,
  },
  {
    name: "Jane Smith",
    position: "Travel Blogger",
    comment:
      "The best travel experience I've ever had! From start to finish, everything was smooth and well-organized.",
    image: profile2,
  },
  {
    name: "Samuel Lee",
    position: "Adventurer",
    comment:
      "A fantastic journey full of adventures and memories that will last a lifetime. Highly recommend their services!",
    image: profile3,
  },
  {
    name: "Emily Brown",
    position: "Photographer",
    comment:
      "An amazing team that made sure every moment of our trip was perfect. Their expertise and passion truly shine through.",
    image: profile4,
  },
];

export const CarHero = [
  {
    icon: "gis:route",
    desc: "Choose Your Pickup Location",
  },
  {
    icon: "game-icons:shaking-hands",
    desc: "Select the Best Deal",
  },
  {
    icon: "map:car-rental",
    desc: "Reserve Your Rental Car",
  },
];

export const CarService = [
  {
    icon: "raphael:car",
    desc: "Wedding Ceremony",
  },
  {
    icon: "streamline:arrow-roadmap-solid",
    desc: "City Transfer",
  },
  {
    icon: "mdi:airport-shuttle",
    desc: "Airport Transfer",
  },
  {
    icon: "mdi:train-car",
    desc: "Whole City Tour",
  },
];

export const CarDetails = [
  {
    car: toyota1,
    name: "Toyota Corolla",
    category: "Sedan",
    price: "$70",
    period: "Day",
    transmission: "Automatic",
    description:
      "The Toyota Corolla is a reliable and fuel-efficient sedan, celebrated for its practicality and value. Known for its sleek design and comfortable interior, it offers ample space and advanced safety features, making it ideal for daily commutes and family trips. With a reputation for reliability and longevity, it’s a perfect companion for everyday needs.",
    gallery: [toyota1, toyota2, toyota3, toyota4, toyota5, toyota6],
    spec: [
      { icon: "bi:speedometer2", name: "Mileage", value: "40,000" },
      {
        icon: "icon-park-twotone:manual-gear",
        name: "Transmission",
        value: "Manual",
      },
      {
        icon: "icon-park-twotone:baby-car-seat",
        name: "Seats",
        value: "5 Adults",
      },
      {
        icon: "fluent-emoji-high-contrast:fuel-pump",
        name: "Fuel",
        value: "Petrol: 10 Km/L",
      },
      { icon: "bi:luggage-fill", name: "Luggage", value: "4 bags" },
      { icon: "carbon:hybrid-networking", name: "Hybrid", value: "Yes" },
    ],
    features: [
      { feature: "CD Player", available: true },
      { feature: "Sun Roof", available: false },
      { feature: "Leather Seat", available: false },
      { feature: "Alloy Wheels", available: true },
      { feature: "Power Steering", available: false },
      { feature: "Power Window", available: false },
      { feature: "A/C", available: true },
      { feature: "ABS", available: false },
      { feature: "Airbag", available: true },
      { feature: "Radio", available: true },
      { feature: "CD Changer", available: false },
      { feature: "DVD", available: false },
      { feature: "TV", available: false },
      { feature: "Power Seat", available: false },
      { feature: "Back Tire", available: false },
      { feature: "Grill Guard", available: false },
      { feature: "Rear Spoiler", available: false },
      { feature: "Central Locking", available: false },
      { feature: "Jack", available: false },
      { feature: "Spare Tire", available: false },
      { feature: "Wheel Spanner", available: false },
      { feature: "Fog Lights", available: false },
      { feature: "Back Camera", available: false },
      { feature: "Push Start", available: true },
      { feature: "Keyless Entry", available: false },
      { feature: "ESC", available: false },
      { feature: "360 Degree Camera", available: false },
      { feature: "Body Kit", available: false },
      { feature: "Side Airbag", available: true },
      { feature: "Power Mirror", available: true },
      { feature: "Side Skirts", available: false },
      { feature: "Front Lip Spoiler", available: false },
      { feature: "Navigation", available: false },
      { feature: "Turbo", available: false },
      { feature: "Power Slide Door", available: false },
    ],
  },
  {
    car: carImage1,
    name: "Toyota Sedan",
    category: "Sedan",
    price: "$50",
    period: "Hour",
    transmission: "Automatic",
    description:
      "This Toyota sedan is a perfect blend of comfort and efficiency. It offers a smooth ride, modern interior features, and excellent fuel economy, making it suitable for both city drives and long journeys. It’s the perfect choice for those who value reliability and versatility.",
    gallery: [toyota1, toyota2, toyota3, toyota4, toyota5, toyota6],
    spec: [
      { icon: "bi:speedometer2", name: "Mileage", value: "25,000" },
      {
        icon: "icon-park-twotone:manual-gear",
        name: "Transmission",
        value: "Automatic",
      },
      {
        icon: "icon-park-twotone:baby-car-seat",
        name: "Seats",
        value: "5 Adults",
      },
      {
        icon: "fluent-emoji-high-contrast:fuel-pump",
        name: "Fuel",
        value: "Petrol: 15 Km/L",
      },
      { icon: "bi:luggage-fill", name: "Luggage", value: "3 bags" },
      { icon: "carbon:hybrid-networking", name: "Hybrid", value: "Yes" },
    ],
    features: [
      { feature: "CD Player", available: true },
      { feature: "Sun Roof", available: false },
      { feature: "Leather Seat", available: false },
      { feature: "Alloy Wheels", available: true },
      { feature: "Power Steering", available: false },
      { feature: "Power Window", available: false },
      { feature: "A/C", available: true },
      { feature: "ABS", available: false },
      { feature: "Airbag", available: true },
      { feature: "Radio", available: true },
      { feature: "CD Changer", available: false },
      { feature: "DVD", available: false },
      { feature: "TV", available: false },
      { feature: "Power Seat", available: false },
      { feature: "Back Tire", available: false },
      { feature: "Grill Guard", available: false },
      { feature: "Rear Spoiler", available: false },
      { feature: "Central Locking", available: false },
      { feature: "Jack", available: false },
      { feature: "Spare Tire", available: false },
      { feature: "Wheel Spanner", available: false },
      { feature: "Fog Lights", available: false },
      { feature: "Back Camera", available: false },
      { feature: "Push Start", available: true },
      { feature: "Keyless Entry", available: false },
      { feature: "ESC", available: false },
      { feature: "360 Degree Camera", available: false },
      { feature: "Body Kit", available: false },
      { feature: "Side Airbag", available: true },
      { feature: "Power Mirror", available: true },
      { feature: "Side Skirts", available: false },
      { feature: "Front Lip Spoiler", available: false },
      { feature: "Navigation", available: false },
      { feature: "Turbo", available: false },
      { feature: "Power Slide Door", available: false },
    ],
  },
  {
    car: landRover1,
    name: "Land Rover Defender",
    category: "SUV",
    price: "$120",
    period: "Hour",
    transmission: "Manual",
    description:
      "The Land Rover Defender is a rugged SUV designed for off-road adventures. With its robust build, advanced four-wheel-drive capabilities, and luxurious interior, it excels on rough terrain while providing a comfortable driving experience. Whether conquering mountains or city roads, the Defender stands out with unmatched versatility.",
    gallery: [
      landRover1,
      landRover2,
      landRover3,
      landRover4,
      landRover5,
      landRover6,
      landRover7,
    ],
    spec: [
      { icon: "bi:speedometer2", name: "Mileage", value: "15,000" },
      {
        icon: "icon-park-twotone:manual-gear",
        name: "Transmission",
        value: "Manual",
      },
      {
        icon: "icon-park-twotone:baby-car-seat",
        name: "Seats",
        value: "7 Adults",
      },
      {
        icon: "fluent-emoji-high-contrast:fuel-pump",
        name: "Fuel",
        value: "Diesel: 20 Km/L",
      },
      { icon: "bi:luggage-fill", name: "Luggage", value: "6 bags" },
      { icon: "carbon:hybrid-networking", name: "Hybrid", value: "No" },
    ],
    features: [
      { feature: "CD Player", available: true },
      { feature: "Sun Roof", available: false },
      { feature: "Leather Seat", available: false },
      { feature: "Alloy Wheels", available: true },
      { feature: "Power Steering", available: true },
      { feature: "Power Window", available: true },
      { feature: "A/C", available: true },
      { feature: "ABS", available: true },
      { feature: "Airbag", available: true },
      { feature: "Radio", available: true },
      { feature: "CD Changer", available: false },
      { feature: "DVD", available: true },
      { feature: "TV", available: false },
      { feature: "Power Seat", available: true },
      { feature: "Back Tire", available: true },
      { feature: "Grill Guard", available: true },
      { feature: "Rear Spoiler", available: false },
      { feature: "Central Locking", available: true },
      { feature: "Jack", available: true },
      { feature: "Spare Tire", available: true },
      { feature: "Wheel Spanner", available: true },
      { feature: "Fog Lights", available: true },
      { feature: "Back Camera", available: true },
      { feature: "Push Start", available: true },
      { feature: "Keyless Entry", available: true },
      { feature: "ESC", available: true },
      { feature: "360 Degree Camera", available: true },
      { feature: "Body Kit", available: true },
      { feature: "Side Airbag", available: true },
      { feature: "Power Mirror", available: true },
      { feature: "Side Skirts", available: false },
      { feature: "Front Lip Spoiler", available: false },
      { feature: "Navigation", available: true },
      { feature: "Turbo", available: true },
      { feature: "Power Slide Door", available: false },
    ],
  },
  {
    car: benzi1,
    name: "Mercedes-Benz E-Class",
    category: "Luxury",
    price: "$200",
    period: "Day",
    transmission: "Automatic",
    description:
      "The Mercedes-Benz E-Class is a symbol of luxury, performance, and innovation. Renowned for its sophisticated design, this premium sedan combines cutting-edge technology with unparalleled comfort and advanced safety features. Whether for business or pleasure, the E-Class offers a prestigious driving experience.",
    gallery: [benzi1, benzi2, benzi3, benzi4, benzi5],
    spec: [
      { icon: "bi:speedometer2", name: "Mileage", value: "10,000" },
      {
        icon: "icon-park-twotone:manual-gear",
        name: "Transmission",
        value: "Automatic",
      },
      {
        icon: "icon-park-twotone:baby-car-seat",
        name: "Seats",
        value: "5 Adults",
      },
      {
        icon: "fluent-emoji-high-contrast:fuel-pump",
        name: "Fuel",
        value: "Petrol: 60 Km/L",
      },
      { icon: "bi:luggage-fill", name: "Luggage", value: "4 bags" },
      { icon: "carbon:hybrid-networking", name: "Hybrid", value: "No" },
    ],
    features: [
      { feature: "CD Player", available: true },
      { feature: "Sun Roof", available: true },
      { feature: "Leather Seat", available: true },
      { feature: "Alloy Wheels", available: true },
      { feature: "Power Steering", available: true },
      { feature: "Power Window", available: true },
      { feature: "A/C", available: true },
      { feature: "ABS", available: true },
      { feature: "Airbag", available: true },
      { feature: "Radio", available: true },
      { feature: "CD Changer", available: true },
      { feature: "DVD", available: true },
      { feature: "TV", available: false },
      { feature: "Power Seat", available: true },
      { feature: "Back Tire", available: true },
      { feature: "Grill Guard", available: false },
      { feature: "Rear Spoiler", available: false },
      { feature: "Central Locking", available: true },
      { feature: "Jack", available: true },
      { feature: "Spare Tire", available: true },
      { feature: "Wheel Spanner", available: true },
      { feature: "Fog Lights", available: true },
      { feature: "Back Camera", available: true },
      { feature: "Push Start", available: true },
      { feature: "Keyless Entry", available: true },
      { feature: "ESC", available: true },
      { feature: "360 Degree Camera", available: true },
      { feature: "Body Kit", available: false },
      { feature: "Side Airbag", available: true },
      { feature: "Power Mirror", available: true },
      { feature: "Side Skirts", available: false },
      { feature: "Front Lip Spoiler", available: false },
      { feature: "Navigation", available: true },
      { feature: "Turbo", available: false },
      { feature: "Power Slide Door", available: false },
    ],
  },
  {
    car: carImage4,
    name: "Honda Civic",
    category: "Compact",
    price: "$40",
    period: "Day",
    transmission: "Automatic",
    description:
      "The Honda Civic is a compact car known for its stylish design, excellent fuel economy, and reliable performance. It provides a comfortable ride with a well-equipped interior, making it ideal for urban commuting and everyday use. With a reputation for innovation, it continues to impress drivers globally.",
    gallery: [carImage4, carImage2],
    spec: [
      { icon: "bi:speedometer2", name: "Mileage", value: "35,000" },
      {
        icon: "icon-park-twotone:manual-gear",
        name: "Transmission",
        value: "Automatic",
      },
      {
        icon: "icon-park-twotone:baby-car-seat",
        name: "Seats",
        value: "5 Adults",
      },
      {
        icon: "fluent-emoji-high-contrast:fuel-pump",
        name: "Fuel",
        value: "Petrol: 35 Km/L",
      },
      { icon: "bi:luggage-fill", name: "Luggage", value: "3 bags" },
      { icon: "carbon:hybrid-networking", name: "Hybrid", value: "No" },
    ],
    features: [
      { feature: "CD Player", available: true },
      { feature: "Sun Roof", available: false },
      { feature: "Leather Seat", available: false },
      { feature: "Alloy Wheels", available: true },
      { feature: "Power Steering", available: false },
      { feature: "Power Window", available: false },
      { feature: "A/C", available: true },
      { feature: "ABS", available: false },
      { feature: "Airbag", available: true },
      { feature: "Radio", available: true },
      { feature: "CD Changer", available: false },
      { feature: "DVD", available: false },
      { feature: "TV", available: false },
      { feature: "Power Seat", available: false },
      { feature: "Back Tire", available: false },
      { feature: "Grill Guard", available: false },
      { feature: "Rear Spoiler", available: false },
      { feature: "Central Locking", available: false },
      { feature: "Jack", available: false },
      { feature: "Spare Tire", available: false },
      { feature: "Wheel Spanner", available: false },
      { feature: "Fog Lights", available: false },
      { feature: "Back Camera", available: false },
      { feature: "Push Start", available: true },
      { feature: "Keyless Entry", available: false },
      { feature: "ESC", available: false },
      { feature: "360 Degree Camera", available: false },
      { feature: "Body Kit", available: false },
      { feature: "Side Airbag", available: true },
      { feature: "Power Mirror", available: true },
      { feature: "Side Skirts", available: false },
      { feature: "Front Lip Spoiler", available: false },
      { feature: "Navigation", available: false },
      { feature: "Turbo", available: false },
      { feature: "Power Slide Door", available: false },
    ],
  },
  {
    car: carImage5,
    name: "Jeep Wrangler",
    category: "Off-Road",
    price: "$100",
    period: "Day",
    transmission: "Manual",
    description:
      "The Jeep Wrangler is an iconic off-road SUV built for adventure. With its durable construction, powerful engine, and unmatched off-road capabilities, it is perfect for exploring rugged terrains and tackling challenging trails. The Wrangler’s bold design ensures it stands out on and off the road.",
    gallery: [carImage5, carImage3],
    spec: [
      { icon: "bi:speedometer2", name: "Mileage", value: "20,000" },
      {
        icon: "icon-park-twotone:manual-gear",
        name: "Transmission",
        value: "Manual",
      },
      {
        icon: "icon-park-twotone:baby-car-seat",
        name: "Seats",
        value: "4 Adults",
      },
      {
        icon: "fluent-emoji-high-contrast:fuel-pump",
        name: "Fuel",
        value: "Diesel: 25 Km/L",
      },
      { icon: "bi:luggage-fill", name: "Luggage", value: "5 bags" },
      { icon: "carbon:hybrid-networking", name: "Hybrid", value: "No" },
    ],
    features: [
      { feature: "CD Player", available: true },
      { feature: "Sun Roof", available: true },
      { feature: "Leather Seat", available: true },
      { feature: "Alloy Wheels", available: true },
      { feature: "Power Steering", available: true },
      { feature: "Power Window", available: true },
      { feature: "A/C", available: true },
      { feature: "ABS", available: true },
      { feature: "Airbag", available: true },
      { feature: "Radio", available: true },
      { feature: "CD Changer", available: false },
      { feature: "DVD", available: false },
      { feature: "TV", available: false },
      { feature: "Power Seat", available: false },
      { feature: "Back Tire", available: true },
      { feature: "Grill Guard", available: true },
      { feature: "Rear Spoiler", available: false },
      { feature: "Central Locking", available: true },
      { feature: "Jack", available: true },
      { feature: "Spare Tire", available: true },
      { feature: "Wheel Spanner", available: true },
      { feature: "Fog Lights", available: true },
      { feature: "Back Camera", available: true },
      { feature: "Push Start", available: true },
      { feature: "Keyless Entry", available: true },
      { feature: "ESC", available: true },
      { feature: "360 Degree Camera", available: false },
      { feature: "Body Kit", available: false },
      { feature: "Side Airbag", available: true },
      { feature: "Power Mirror", available: true },
      { feature: "Side Skirts", available: false },
      { feature: "Front Lip Spoiler", available: false },
      { feature: "Navigation", available: true },
      { feature: "Turbo", available: true },
      { feature: "Power Slide Door", available: false },
    ],
  },
  {
    car: carImage6,
    name: "Tesla Model 3",
    category: "Electric",
    price: "$80",
    period: "Hour",
    transmission: "Automatic",
    description:
      "The Tesla Model 3 is an electric sedan that combines cutting-edge technology with sustainability. It offers a sleek design, exceptional performance, and advanced autonomous driving features, making it a top choice for eco-conscious drivers. With zero emissions and an impressive range, it redefines modern driving.",
    gallery: [carImage6],
    spec: [
      { icon: "bi:speedometer2", name: "Mileage", value: "10,000" },
      {
        icon: "icon-park-twotone:manual-gear",
        name: "Transmission",
        value: "Automatic",
      },
      {
        icon: "icon-park-twotone:baby-car-seat",
        name: "Seats",
        value: "5 Adults",
      },
      {
        icon: "fluent-emoji-high-contrast:fuel-pump",
        name: "Fuel",
        value: "Electric: 8hrs",
      },
      { icon: "bi:luggage-fill", name: "Luggage", value: "2 bags" },
      { icon: "carbon:hybrid-networking", name: "Hybrid", value: "No" },
    ],
    features: [
      { feature: "CD Player", available: false },
      { feature: "Sun Roof", available: true },
      { feature: "Leather Seat", available: true },
      { feature: "Alloy Wheels", available: true },
      { feature: "Power Steering", available: true },
      { feature: "Power Window", available: true },
      { feature: "A/C", available: true },
      { feature: "ABS", available: true },
      { feature: "Airbag", available: true },
      { feature: "Radio", available: true },
      { feature: "CD Changer", available: false },
      { feature: "DVD", available: false },
      { feature: "TV", available: false },
      { feature: "Power Seat", available: true },
      { feature: "Back Tire", available: true },
      { feature: "Grill Guard", available: false },
      { feature: "Rear Spoiler", available: false },
      { feature: "Central Locking", available: true },
      { feature: "Jack", available: true },
      { feature: "Spare Tire", available: false },
      { feature: "Wheel Spanner", available: false },
      { feature: "Fog Lights", available: true },
      { feature: "Back Camera", available: true },
      { feature: "Push Start", available: true },
      { feature: "Keyless Entry", available: true },
      { feature: "ESC", available: true },
      { feature: "360 Degree Camera", available: true },
      { feature: "Body Kit", available: false },
      { feature: "Side Airbag", available: true },
      { feature: "Power Mirror", available: true },
      { feature: "Side Skirts", available: false },
      { feature: "Front Lip Spoiler", available: false },
      { feature: "Navigation", available: true },
      { feature: "Turbo", available: false },
      { feature: "Power Slide Door", available: false },
    ],
  },
];

export const TourPackages = [
  {
    name: "Akagera National Park",
    details:
      "A journey to explore Akagera National Park, renowned for its wildlife and savannah landscapes.",
    prices: [
      { persons: 1, rate: "$250 per person" },
      { persons: 2, rate: "$200 per person" },
      { persons: 3, rate: "$180 per person" },
      { persons: "4+", rate: "$150 per person" },
    ],
    inclusions: [
      "Park entry fees",
      "Guided safari drives",
      "Transportation within the park",
    ],
    exclusions: ["Meals and drinks", "Personal expenses", "Travel insurance"],
    activities: ["Game drives", "Birdwatching", "Boat trips on Lake Ihema"],
    itinerary: [
      "Day 1: Arrival at Akagera, evening game drive",
      "Day 2: Morning safari, optional boat ride, departure",
    ],
  },
  {
    name: "Volcanoes National Park",
    details:
      "Home to mountain gorillas, this park offers a rich trekking experience.",
    prices: [
      { persons: 1, rate: "$600 per person" },
      { persons: 2, rate: "$550 per person" },
      { persons: 3, rate: "$500 per person" },
      { persons: "4+", rate: "$450 per person" },
    ],
    inclusions: [
      "Gorilla trekking permits",
      "Local guides",
      "Transportation to/from the park",
    ],
    exclusions: ["Accommodation", "Meals and drinks", "Personal expenses"],
    activities: [
      "Gorilla trekking",
      "Nature walks",
      "Cultural visits to local communities",
    ],
    itinerary: [
      "Day 1: Arrival and orientation",
      "Day 2: Gorilla trekking and cultural visit",
    ],
  },
  {
    name: "Nyungwe National Park",
    details:
      "A visit to Nyungwe's rainforests, known for its biodiversity and primate species.",
    prices: [
      { persons: 1, rate: "$350 per person" },
      { persons: 2, rate: "$300 per person" },
      { persons: 3, rate: "$270 per person" },
      { persons: "4+", rate: "$250 per person" },
    ],
    inclusions: [
      "Chimpanzee tracking permits",
      "Canopy walk experience",
      "Guided tours",
    ],
    exclusions: ["Meals", "Accommodation", "Travel insurance"],
    activities: ["Chimpanzee tracking", "Canopy walks", "Birdwatching"],
    itinerary: [
      "Day 1: Arrival and canopy walk",
      "Day 2: Morning primate tracking, departure",
    ],
  },
];

export const Accommodations = [
  {
    category: "Hotels",
    details: [
      {
        name: "Kigali Marriott Hotel",
        rating: 5,
        reviews: 218,
        location: "Kigali, Rwanda",
        address: "KN 3 Avenue",
        moreDescription:
          "Experience Rwanda's capital from Kigali Marriott Hotel, conveniently located near the Nyarugenge financial district and the Kigali Convention Center. Our impeccable luxury hotel provides spacious, modern accommodations with deluxe amenities and premium services. Make yourself comfortable in stylish rooms or lavish suites with floor-to-ceiling windows, spacious bathrooms and plush, pillow-top bedding. Additional amenities include flat-screen TVs, ergonomic workspaces and complimentary Wi-Fi access for Marriott Bonvoy members. After a long day in Kigali, relax over a delicious meal in our popular restaurants, take a refreshing dip in our outdoor pool or unwind with a massage in our hotel spa. Allow our concierge to assist you in planning excursions to the Big Five, the famous canopy walks or the home of the renowned mountain gorillas. If visiting Rwanda for business, you'll appreciate our versatile event venues and fantastic catering services. Look forward to your getaway to Kigali Marriott Hotel.",
        description:
          "Experience Rwanda's capital from Kigali Marriott Hotel, conveniently located near the Nyarugenge.",
        price: "$150",
        gallery: [mario1, mario3, mario2, mario4],
        isPopular: true,
        amenality: [
          "Breakfast",
          "Internet",
          "Bar",
          "Terrace",
          "Family rooms",
          "Sauna",
          "Air Conditioner (Free)",
          "Garden",
          "Terrace",
          "Non-smoking rooms",
          "Family rooms",
          "Swimming pool",
          "Pool table",
          "Sauna (Free)",
          "Hot tub/Jacuzzi (Free)",
        ],
        houseRules: [
          {
            title: "Check-in",
            details: "From 15:00 to 00:00",
          },
          {
            title: "Check-out",
            details: "From 12:00 to 13:00",
          },
          {
            title: "Cancellation/Prepayment",
            details:
              "Cancellation and prepayment policies vary according to accommodation type. Please enter the dates of your stay and check the conditions of your required option.",
          },
          {
            title: "No Age Restriction",
            details: "There is no age requirement for check-in.",
          },
          {
            title: "Pets",
            details: "Pets are not allowed.",
          },
          {
            title: "Accepted Payment Methods",
            details: ["arcticons:mymtn-ng", "logos:mastercard", "logos:visa", "mdi:cash-100"],
          },
        ],

       rooms : [
          {
            type: "Double / Deluxe Double Room",
            size: "72 m2",
            capacity: "1 adult and 1 child per Room",
            rate: "900 USD",
            availability: "100 room(s) left",
          },
          {
            type: "Double / Deluxe Double Room (2 Adults + 1 Child)",
            size: "36 m2",
            capacity: "2 adults and 1 child per Room",
            rate: "950 USD",
            availability: "30 room(s) left",
          },
          {
            type: "Deluxe Room / Single Occupancy Deluxe King Room",
            
            size: "45 m2",
            capacity: "1 adult and 1 child per Room",
            rate: "180 USD",
            availability: "Not available",
          },
          {
            type: "Deluxe Room / Single Occupancy Deluxe Twin Room",
            
            size: "45 m2",
            capacity: "2 adults and 2 children per Room",
            rate: "210 USD",
            availability: "80 room(s) left",
          },
          {
            type: "Club Room / Single Occupancy Club King Room",
           
            size: "45 m2",
            capacity: "1 adult and 1 child per Room",
            rate: "240 USD",
            availability: "Not available",
          },
          {
            type: "Club Room / Single Occupancy Club Twin Room",
            
            size: "50 m2",
            capacity: "1 adult and 1 child per Room",
            rate: "270 USD",
            availability: "15 room(s) left",
          },
          {
            type: "Junior Suite / Junior Suite Single Occupancy Junior Suite",
            
            size: "10 m2",
            capacity: "1 adult and 1 child per Room",
            rate: "350 USD",
            availability: "Not available",
          },
          {
            type: "Junior Suite / Junior Suite Double Occupancy Junior Suite",
            
            size: "10 m2",
            capacity: "1 adult and 1 child per Room",
            rate: "380 USD",
            availability: "5 room(s) left",
          },
        ]
        
      },
      {
        name: "Hôtel des Mille Collines",
        rating: 4.5,
        reviews: 100,
        location: "Kigali, Rwanda",
        address: "KN 3 Avenue",
        description:
          "Iconic hotel with a rich history and modern luxury in the heart of Kigali. ",

        price: "$20",
        gallery: [mille1, mille2, mille3, mille4],
        amenality: [
          "Breakfast",
          "Internet",
          "Bar",
          "Terrace",
          "Family rooms",
          "Sauna",
        ],
        isPopular: true,
      },
      {
        name: "The Retreat by Heaven",
        rating: 4.3,
        reviews: 120,
        location: "Kigali, Rwanda",
        description:
          "Boutique hotel offering eco-friendly luxury and exquisite dining.",
        price: "$30",
        gallery: [ret1, ret2, ret3, ret4],
        amenality: [
          "Breakfast",
          "Internet",
          "Bar",
          "Terrace",
          "Family rooms",
          "Sauna",
        ],
        isPopular: true,
      },
    ],
  },
  {
    category: "Resorts",
    details: [
      {
        name: "Lake Kivu Serena Resort",
        rating: 4.8,
        reviews: 12,
        location: "Gisenyi, Rwanda",
        description:
          "Relax by the serene Lake Kivu with luxurious amenities and breathtaking views.",
        price: "$20",
        gallery: [accom3, accom2, accom1],
        amenality: [
          "Breakfast",
          "Internet",
          "Bar",
          "Terrace",
          "Family rooms",
          "Sauna",
        ],
        isPopular: false,
      },
      {
        name: "Nyungwe House",
        rating: 4.9,
        reviews: 9,
        location: "Nyungwe Forest, Rwanda",
        description:
          "A luxury resort in the heart of the rainforest, perfect for nature lovers.",
        price: "$35",
        gallery: [accom1, accom3, accom2],
        amenality: [
          "Breakfast",
          "Internet",
          "Bar",
          "Terrace",
          "Family rooms",
          "Sauna",
        ],
        isPopular: false,
      },
      {
        name: "Akagera Game Lodge",
        rating: 4.7,
        reviews: 8,
        location: "Akagera National Park, Rwanda",
        description: "Enjoy stunning wildlife views and comfortable stays.",
        price: "$25",
        gallery: [accom2, accom1, accom3],
        amenality: [
          "Breakfast",
          "Internet",
          "Bar",
          "Terrace",
          "Family rooms",
          "Sauna",
        ],
        isPopular: false,
      },
    ],
  },
  {
    category: "Motels",
    details: [
      {
        name: "Sunset Motel",
        rating: 4.5,
        reviews: 9,
        location: "Kigali, Rwanda",
        description:
          "Affordable and cozy stays with easy access to the city center.",
        price: "$10",
        gallery: [accom3, accom1, accom2],
        amenality: [
          "Breakfast",
          "Internet",
          "Bar",
          "Terrace",
          "Family rooms",
          "Sauna",
        ],
        isPopular: true,
      },
      {
        name: "Rainbow Motel",
        rating: 4.3,
        reviews: 6,
        location: "Huye, Rwanda",
        description:
          "A simple and clean option for budget-conscious travelers.",
        price: "$8",
        gallery: [accom1, accom2, accom1],
        amenality: [
          "Breakfast",
          "Internet",
          "Bar",
          "Terrace",
          "Family rooms",
          "Sauna",
        ],
        isPopular: false,
      },
    ],
  },
  {
    category: "Hostels",
    details: [
      {
        name: "Backpackers Hostel",
        rating: 4.7,
        reviews: 15,
        location: "Kigali, Rwanda",
        description:
          "Perfect for solo travelers and groups, offering budget-friendly stays.",
        price: "$5",
        gallery: [accom1, accom2, accom1],
        amenality: [
          "Breakfast",
          "Internet",
          "Bar",
          "Terrace",
          "Family rooms",
          "Sauna",
        ],
        isPopular: true,
      },
      {
        name: "Explore Rwanda Hostel",
        rating: 4.5,
        reviews: 10,
        location: "Musanze, Rwanda",
        description: "A welcoming and social place for adventurers.",
        price: "$7",
        gallery: [accom1, accom2, accom1],
        amenality: [
          "Breakfast",
          "Internet",
          "Bar",
          "Terrace",
          "Family rooms",
          "Sauna",
        ],
        isPopular: false,
      },
    ],
  },
  {
    category: "Bed and Breakfasts",
    details: [
      {
        name: "Rwanda Charm B&B",
        rating: 4.6,
        reviews: 8,
        location: "Musanze, Rwanda",
        description:
          "Wake up to stunning mountain views and delicious local breakfasts.",
        price: "$12",
        gallery: [accom2, accom3, accom1],
        amenality: [
          "Breakfast",
          "Internet",
          "Bar",
          "Terrace",
          "Family rooms",
          "Sauna",
        ],
        isPopular: true,
      },
      {
        name: "Hilltop B&B",
        rating: 4.8,
        reviews: 11,
        location: "Kigali, Rwanda",
        description: "Charming accommodations with personalized service.",
        price: "$14",
        gallery: [accom1, accom2, accom1],
        isPopular: false,
        amenality: [
          "Breakfast",
          "Internet",
          "Bar",
          "Terrace",
          "Family rooms",
          "Sauna",
        ],
      },
    ],
  },
];
