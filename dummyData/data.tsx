import { BASE_IMG_URL } from "@/utils/constansts";

type LocationType = {
    city: string;
    address: string;
  };
  
type AmenitiesType = {
    swimmingPool: boolean;
    gym: boolean;
    cinema: boolean;
    smartHome: boolean;
    airCondition: boolean;
    balcony: boolean;
    washer: boolean;
    dryer: boolean;
    refrigerator: boolean;
    tvCable: boolean;
    wifi: boolean;
    gamingConsole: boolean;
    sauna: boolean;
    football: boolean;
    basketball: boolean;
    tennis: boolean;
    golf: boolean;
    playground: boolean;
};
  
type PropertyType = "House" | "Flat/Apartment" | "Commercial Property" | "Land" | "Event Center/Venue";
  
type ServicingType = "Fully" | "Partially" | "Not Serviced";
  
type FurnishingType = "Furnished" | "Unfurnished";
  
export type PropertyData = {
    id: number;
    createdAt: number;
    title: string;
    location: LocationType;
    description: string;
    propertyType: PropertyType;
    propertySubType: string;
    type: "Buy" | "Rent" | "Short let";
    price: number;
    coverPhoto: string;
    photos: string[];
    yearBuilt: number,
    beds: number;
    baths: number;
    cars: number;
    size: number;
    amenities: AmenitiesType;
    servicing: ServicingType;
    furnishing: FurnishingType;
};
export const data : PropertyData = {
    id: 123,
    createdAt: 1671710699,
    title: "Villa la gress",
    location:{
        city: "New York",
        address: "12A Main street",
    },
    description: "Discover unparalleled luxury in this 4-bedroom villa. Elegant and modern, this residence boasts a grand foyer, spacious living room with panoramic views, and a gourmet kitchen with top-tier appliances. The master suite is a true retreat, complemented by three additional bedrooms. Enjoy entertainment in the dedicated media room or relax in the landscaped backyard with a sparkling pool. Meticulous attention to detail and high-quality finishes define this dream home. Experience the epitome of luxury living.",
    propertyType: "House",
    propertySubType: "Semi-detached Duplex",
    type: "Buy",
    price: 1200000,
    coverPhoto: `${BASE_IMG_URL}/vrvgdu96dcc8wetibzyh.jpg`,
    photos:[],
    yearBuilt: 2018,
    beds: 3,
    baths: 3.5,
    cars: 5,
    size: 1200,
    amenities:{
        swimmingPool: true,
        gym: true,
        cinema: false,
        smartHome: true,
        airCondition: true,
        balcony: true,
        washer: true,
        dryer: true,
        refrigerator: true,
        tvCable:true,
        wifi: true,
        gamingConsole: true,
        sauna: true,
        football: false,
        basketball: true,
        tennis: true,
        golf: false,
        playground: true,
    },
    servicing: "Fully",
    furnishing: "Unfurnished",
}

export const dataList: PropertyData[] = [

    {
        id: 1,
        createdAt: 1671710699,
        title: "Luxury Villa",
        location: {
            city: "Los Angeles",
            address: "123 Main Street",
        },
        description: "Discover unparalleled luxury in this 4-bedroom villa. Elegant and modern, this residence boasts a grand foyer, spacious living room with panoramic views, and a gourmet kitchen with top-tier appliances. The master suite is a true retreat, complemented by three additional bedrooms. Enjoy entertainment in the dedicated media room or relax in the landscaped backyard with a sparkling pool. Meticulous attention to detail and high-quality finishes define this dream home. Experience the epitome of luxury living.",
        propertyType: "House",
        propertySubType: "Mansion",
        type: "Buy",
        price: 2500000,
        coverPhoto: `${BASE_IMG_URL}/qo20zwdzzqdfrjpun6zb.jpg`,
        photos: [],
        yearBuilt: 2020,
        beds: 5,
        baths: 5.5,
        cars: 3,
        size: 4000,
        amenities: {
            swimmingPool: true,
            gym: true,
            cinema: true,
            smartHome: true,
            airCondition: true,
            balcony: true,
            washer: true,
            dryer: true,
            refrigerator: true,
            tvCable: true,
            wifi: true,
            gamingConsole: true,
            sauna: true,
            football: false,
            basketball: true,
            tennis: true,
            golf: false,
            playground: true,
        },
        servicing: "Fully",
        furnishing: "Furnished",
    },

    {
        id: 2,
        createdAt: 1671710700,
        title: "17 Puólton Square",
        location: {
          city: "New York",
          address: "456 Broadway",
        },
        description:`Embark on a refined urban living experience with this exceptional 2-bedroom modern apartment situated in the heart of the bustling metropolis of New York. 
        A testament to contemporary elegance and urban sophistication, this residence stands as a beacon of modernity within the vibrant cityscape. Nestled at 456 Broadway, 
        this apartment seamlessly blends into the dynamic energy of New York while offering a sanctuary of comfort and style. From the moment you step through the door, you are greeted by the chic ambiance of a space meticulously crafted to meet the demands of a discerning urban dweller.
        The description of this apartment merely scratches the surface of its allure. As you explore its interiors, discover a seamless fusion of functionality and aesthetics, creating an atmosphere that is both inviting and visually striking. The contemporary design elements resonate with the pulse of the city outside, offering a retreat that complements the vibrant surroundings.With two well-appointed bedrooms, this apartment provides an ideal canvas for personalization and relaxation.`,
        propertyType: "Flat/Apartment",
        propertySubType: "Modern",
        type: "Buy",
        price: 3500000,
        coverPhoto: `${BASE_IMG_URL}/zpvaqhivb76lxxbjcqur.jpg`,
        photos: [],
        yearBuilt: 2019,
        beds: 4,
        baths: 4,
        cars: 4,
        size: 3200,
        amenities: {
          swimmingPool: false,
          gym: true,
          cinema: false,
          smartHome: false,
          airCondition: true,
          balcony: true,
          washer: true,
          dryer: true,
          refrigerator: true,
          tvCable: true,
          wifi: true,
          gamingConsole: false,
          sauna: false,
          football: false,
          basketball: false,
          tennis: false,
          golf: false,
          playground: false,
        },
        servicing: "Partially",
        furnishing: "Furnished",
    },
    {
        id: 3,
        createdAt: 1671710701,
        title: "Cozy Townhouse",
        location: {
          city: "Chicago",
          address: "789 Oak Street",
        },
        description: "Charming 3-bedroom townhouse with a lovely garden.",
        propertyType: "House",
        propertySubType: "Townhouse",
        type: "Buy",
        price: 800000,
        coverPhoto: `${BASE_IMG_URL}/vrvgdu96dcc8wetibzyh.jpg`,
        photos: [],
        yearBuilt: 2015,
        beds: 3,
        baths: 2.5,
        cars: 2,
        size: 2000,
        amenities: {
          swimmingPool: false,
          gym: false,
          cinema: false,
          smartHome: true,
          airCondition: true,
          balcony: true,
          washer: true,
          dryer: true,
          refrigerator: true,
          tvCable: true,
          wifi: true,
          gamingConsole: false,
          sauna: false,
          football: false,
          basketball: false,
          tennis: false,
          golf: false,
          playground: true,
        },
        servicing: "Fully",
        furnishing: "Unfurnished",
    },
    {
        id: 4,
        createdAt: 1671710702,
        title: "Beachfront Condo",
        location: {
          city: "Miami",
          address: "123 Ocean Drive",
        },
        description:`Nestled in the heart of Chicago, discover the charm of this inviting 3-bedroom townhouse at 789 Oak Street. A true haven of comfort, this residence exudes warmth and character, offering a perfect blend of sophistication and coziness. The exterior welcomes you with a quaint facade, while inside, the well-designed spaces create an atmosphere that feels like home.
        Boasting a delightful garden, this townhouse adds a touch of nature to urban living. The smart home features enhance convenience, while the ample windows flood the interiors with natural light. With three well-appointed bedrooms, envision personalizing each space to suit your lifestyle. Embrace the joy of indoor-outdoor living with a balcony overlooking the surroundings, creating an ideal spot for relaxation.
        As a fully serviced property, this townhouse caters to your every need. From the convenience of in-unit amenities to the nearby playground, every aspect of daily life is carefully considered. Immerse yourself in the tranquility of this cozy retreat, where the combination of thoughtful design, urban convenience, and natural beauty makes this townhouse a captivating choice for those seeking a harmonious blend of comfort and style.`,
        propertyType: "Flat/Apartment",
        propertySubType: "Beachfront",
        type: "Rent",
        price: 5000,
        coverPhoto: `${BASE_IMG_URL}/mogecfdfab4tm3fupz9u.jpg`,
        photos: [],
        yearBuilt: 2022,
        beds: 2,
        baths: 2,
        cars: 1,
        size: 1500,
        amenities: {
          swimmingPool: true,
          gym: true,
          cinema: false,
          smartHome: false,
          airCondition: true,
          balcony: true,
          washer: true,
          dryer: true,
          refrigerator: true,
          tvCable: true,
          wifi: true,
          gamingConsole: false,
          sauna: true,
          football: false,
          basketball: false,
          tennis: false,
          golf: false,
          playground: false,
        },
        servicing: "Partially",
        furnishing: "Furnished",
    },
    {
        id: 5,
        createdAt: 1671710703,
        title: "Mountain View Cabin",
        location: {
          city: "Aspen",
          address: "456 Pine Lane",
        },
        description: `Nestled in Aspen at 456 Pine Lane, this 2-bedroom mountain view cabin invites you to escape the ordinary and immerse yourself in the tranquility of its breathtaking surroundings. The cabin's rustic charm harmonizes with the natural beauty that unfolds outside, offering a serene retreat for those seeking a simpler, more intimate living experience. Step inside to discover a cozy interior where the minimalist design and large windows frame panoramic mountain vistas, seamlessly blending the comfort of home with the awe-inspiring landscapes of Aspen.
        With an open floor plan that connects living spaces effortlessly, this cabin provides a unique opportunity to embrace a lifestyle that values the simplicity of mountain living. Though modest in amenities, the fully equipped kitchen and the absence of some traditional conveniences enhance the connection with nature, inviting you to savor the unencumbered beauty of Aspen. Whether you're in search of a weekend getaway or a permanent residence, this mountain view cabin stands as a testament to the allure of mountain living, offering a genuine escape into the heart of Aspen's serene landscape.`,
        propertyType: "House",
        propertySubType: "Mountain View",
        type: "Buy",
        price: 600000,
        coverPhoto: `${BASE_IMG_URL}/bbkhjh8lcnkjaovkvn3v.jpg`,
        photos: [],
        yearBuilt: 2010,
        beds: 2,
        baths: 1,
        cars: 1,
        size: 1000,
        amenities: {
          swimmingPool: false,
          gym: false,
          cinema: false,
          smartHome: false,
          airCondition: false,
          balcony: false,
          washer: false,
          dryer: false,
          refrigerator: true,
          tvCable: true,
          wifi: false,
          gamingConsole: false,
          sauna: false,
          football: false,
          basketball: false,
          tennis: false,
          golf: false,
          playground: false,
        },
        servicing: "Not Serviced",
        furnishing: "Unfurnished",
    },
    {
        id: 6,
        createdAt: 1671710704,
        title: "Downtown Loft",
        location: {
          city: "San Francisco",
          address: "789 Main Street",
        },
        description: `Embrace the vibrant essence of San Francisco living with this 1-bedroom downtown loft at 789 Main Street. This modern retreat, nestled in the heart of the city, offers a unique blend of urban sophistication and contemporary design. As you step into the loft, the cityscape views unfold before you, creating a dynamic backdrop that captures the energy of San Francisco's bustling streets.
        The loft, built in 2017, boasts an open and airy design, with large windows inviting abundant natural light. The 1.5 bathrooms and well-appointed bedroom provide a cozy sanctuary within the urban landscape. Modern amenities such as a fully equipped kitchen, smart home features, and in-unit laundry seamlessly integrate convenience into daily life.
        Beyond the confines of the loft, explore the partial servicing that enhances your lifestyle with access to amenities like a gym, cinema, and a balcony for moments of relaxation. The furnished interiors reflect a commitment to quality living, offering a turnkey solution for those eager to immerse themselves in the excitement of downtown San Francisco.`,
        propertyType: "House",
        propertySubType: "Downtown Loft",
        type: "Buy",
        price: 4500000,
        coverPhoto: `${BASE_IMG_URL}/sh0ynibjrtd6j1mir1ni.jpg`,
        photos: [],
        yearBuilt: 2017,
        beds: 1,
        baths: 1.5,
        cars: 1,
        size: 800,
        amenities: {
          swimmingPool: false,
          gym: true,
          cinema: true,
          smartHome: true,
          airCondition: true,
          balcony: true,
          washer: true,
          dryer: true,
          refrigerator: true,
          tvCable: true,
          wifi: true,
          gamingConsole: false,
          sauna: false,
          football: false,
          basketball: false,
          tennis: false,
          golf: false,
          playground: false,
        },
        servicing: "Partially",
        furnishing: "Furnished",
    },
    {
        id: 7,
        createdAt: 1671710705,
        title: "Seaside Villa",
        location: {
          city: "Malibu",
          address: "123 Coastal Drive",
        },
        description: `Discover the epitome of coastal luxury with this exquisite 3-bedroom seaside villa in the idyllic town of Malibu. Nestled along the pristine shores of Coastal Drive, this modern retreat offers a seamless blend of sophistication and coastal charm. As you enter the villa, panoramic ocean views unfold, providing a captivating backdrop that captures the essence of coastal living.
        Built in 2020, this villa showcases a contemporary design with expansive windows that bathe the interiors in natural light. The three well-appointed bedrooms and spacious living areas create an inviting space for relaxation and entertainment. Modern amenities such as a gourmet kitchen, smart home features, and private access to the beach elevate the living experience.
        Step outside to the partially serviced grounds, where a private swimming pool, a cinema for entertainment, and a balcony overlooking the Pacific Ocean await. The furnished interiors exude a sense of coastal elegance, offering a turnkey solution for those seeking a luxurious retreat by the sea.`,
        propertyType: "House",
        propertySubType: "Seaside Villa",
        type: "Buy",
        price: 6500000,
        coverPhoto: `${BASE_IMG_URL}/fw3aqk5qsrzmlmlsk9ju.jpg`,
        photos: [],
        yearBuilt: 2020,
        beds: 3,
        baths: 3,
        cars: 2,
        size: 2500,
        amenities: {
          swimmingPool: true,
          gym: true,
          cinema: true,
          smartHome: true,
          airCondition: true,
          balcony: true,
          washer: true,
          dryer: true,
          refrigerator: true,
          tvCable: true,
          wifi: true,
          gamingConsole: false,
          sauna: false,
          football: false,
          basketball: false,
          tennis: false,
          golf: false,
          playground: false,
        },
        servicing: "Partially",
        furnishing: "Furnished",
      }
      
            
]

/*
Compare Features
1. price
2. proptype
3. status (type buy or rent or whatever)
4. year built
5. beds
6. baths
7. Car parking
8. size
9. swimmingPool: true,
10. gym: true.
11. cinema: false,
12. smartHome: true,
13. airCondition: true,
14. balcony: true,
15. washer: true,
16. dryer: true,
17. refrigerator: true,
18. tvCable:true,
19. wifi: true,
20. gamingConsole: true,
21. sauna: true,
22. football: false,
23. basketball: true,
24. tennis: true,
25. golf: false,
26. playground: true,
27. Servicing
28. Furnishing.
*/