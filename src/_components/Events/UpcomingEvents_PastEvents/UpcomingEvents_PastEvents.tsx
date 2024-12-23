import Link from "next/link";
import "./UpcomingEvents_PastEvents.css";
import Image from "next/image";

const UpcomingEvents_PastEvents = () => {
  const events = [
    {
      id: 1,
      title: "Multi-Destination Education Expo - Dhaka",
      date: "18th May, 2024",
      time: "10:00 am - 05:00 pm",
      location: "The Peninsula Chittagong",
      image: "https://i.ibb.co.com/sqtJYff/pastevent1.png",
    },
    {
      id: 2,
      title: "Multi-Destination Education Expo - Dhaka",
      date: "18th May, 2024",
      time: "10:00 am - 05:00 pm",
      location: "The Peninsula Chittagong",
      image: "https://i.ibb.co.com/DRyQPG6/pastevent2.png",
    },
    {
      id: 3,
      title: "Multi-Destination Education Expo - Dhaka",
      date: "18th May, 2024",
      time: "10:00 am - 05:00 pm",
      location: "The Peninsula Chittagong",
      image: "https://i.ibb.co.com/x5bLtjZ/pastevent3.png",
    },
    {
      id: 4,
      title: "Multi-Destination Education Expo - Dhaka",
      date: "18th May, 2024",
      time: "10:00 am - 05:00 pm",
      location: "The Peninsula Chittagong",
      image: "https://i.ibb.co.com/vYPg7ZT/pastevent4.png",
    },
    {
      id: 5,
      title: "Multi-Destination Education Expo - Dhaka",
      date: "18th May, 2024",
      time: "10:00 am - 05:00 pm",
      location: "The Peninsula Chittagong",
      image: "https://i.ibb.co.com/R0ry8gP/pastevent5.png",
    },
    {
      id: 6,
      title: "Multi-Destination Education Expo - Dhaka",
      date: "18th May, 2024",
      time: "10:00 am - 05:00 pm",
      location: "The Peninsula Chittagong",
      image: "https://i.ibb.co.com/DRyQPG6/pastevent2.png",
    },
    {
      id: 7,
      title: "Higher Education Fair - Abuja",
      date: "TBA",
      time: "TBA",
      location: "Abuja, Nigeria",
      image: "https://i.ibb.co.com/cwm2767/Higher-Education-Fair-Abuja-Square.png",
    },
    {
      id: 8,
      title: "Higher Education Fair - Ghana",
      date: "TBA",
      time: "TBA",
      location: "Accra, Ghana",
      image: "https://i.ibb.co.com/MZ5f6dH/Higher-Education-Fair-Ghana-Square.png",
    },
    {
      id: 9,
      title: "Indian Multi-Destination Expo",
      date: "TBA",
      time: "TBA",
      location: "India",
      image: "https://i.ibb.co.com/k2W9Tc9/Indian-Multi-destination-expo-event-Banner-Square.png",
    },
    {
      id: 10,
      title: "Rajshahi Expo - 6 June 2024",
      date: "6th June, 2024",
      time: "10:00 am - 05:00 pm",
      location: "Rajshahi, Bangladesh",
      image: "https://i.ibb.co.com/Y87zkWH/Rajshahi-Expo-6-June-2024-Square.png",
    },
    {
      id: 11,
      title: "Rangpur Expo - 5 June 2024",
      date: "5th June, 2024",
      time: "10:00 am - 05:00 pm",
      location: "Rangpur, Bangladesh",
      image: "https://i.ibb.co.com/r43MBfB/Rangpur-Expo-5-June-2024-Square.png",
    }
  ];

  return (
    <div className="bg-[#FAFAFA]">
      <div className="max-w-[1152px] mx-auto pt-[78px] pb-10">
        <div className="mx-auto text-center lg:w-[875px] px-8">
          <h2 className="poppins-semibold text-[56px] text-[#000000] leading-[72.8px] -tracking-[0.01em]">
            Past Events
          </h2>
          <p className="poppins-regular text-base pb-[71px] text-[#000000]">
            Our core belief is to ensure that our students receive comprehensive
            education and guidance at every stage of their study abroad journey.
            Presented below are a few of our previous international educational
            events.
          </p>
        </div>
        <div className="px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-[71px] ">
            {events?.map((event, index) => (
              <div key={index} className="bg-[#FFFFFF] hover:bg-[#2563EB] card transition-all pastevents-shadow rounded-lg">
                <div>
                  <Image width={100} height={100}
                    src={event?.image}
                    alt={event?.title}
                    className="rounded-lg w-full"
                  />
                </div>
                <div className="p-5">
                  <h2 className="poppins-medium text-[18px] text-[#000000] pt-[18px]">
                    {event?.title}
                  </h2>
                  <div className="flex items-center gap-[10px] pt-[16px]">
                    <svg
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.6481 15.5681C13.7115 16.5047 11.7528 18.4634 10.405 19.8112C9.62396 20.5922 8.35889 20.5926 7.57784 19.8116C6.25355 18.4873 4.3328 16.5666 3.33436 15.5681C0.210162 12.4439 0.210162 7.3786 3.33436 4.2544C6.45855 1.13021 11.5239 1.13021 14.6481 4.2544C17.7723 7.3786 17.7723 12.4439 14.6481 15.5681Z"
                        stroke="#F25025"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.9912 9.91125C11.9912 11.5681 10.6481 12.9113 8.99121 12.9113C7.33436 12.9113 5.99121 11.5681 5.99121 9.91125C5.99121 8.2544 7.33436 6.91125 8.99121 6.91125C10.6481 6.91125 11.9912 8.2544 11.9912 9.91125Z"
                        stroke="#F25025"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-[#F25025] poppins-regular text-[14px]">
                      {event?.location}
                    </p>
                  </div>
                  <div className="flex items-center pt-1 pb-4  gap-1 flex-wrap">
                    <div className="flex items-center gap-1">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.9912 5.66125H6.99121C4.78207 5.66125 2.99121 7.45212 2.99121 9.66125V18.9113C2.99121 21.1204 4.78207 22.9113 6.99121 22.9113H16.9912C19.2003 22.9113 20.9912 21.1204 20.9912 18.9113V9.66125C20.9912 7.45212 19.2003 5.66125 16.9912 5.66125Z"
                          stroke="#F25025"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.99121 4.16125V7.16125"
                          stroke="#F25025"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.9912 4.16125V7.16125"
                          stroke="#F25025"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.99121 10.6613H20.9912"
                          stroke="#F25025"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.99121 14.9012V14.9112"
                          stroke="#F25025"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.9912 14.9012V14.9112"
                          stroke="#F25025"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.9912 14.9012V14.9112"
                          stroke="#F25025"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.9912 18.9012V18.9112"
                          stroke="#F25025"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.9912 18.9012V18.9112"
                          stroke="#F25025"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.99121 18.9012V18.9112"
                          stroke="#F25025"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-[#F25025] poppins-regular text-[14px] pl-[5px] pr-[5px]">
                        {event?.date}
                      </p>
                    </div>

                    <div className="flex items-center gap-1">
                      <svg
                        width="5"
                        height="6"
                        viewBox="0 0 5 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="2.47293"
                          cy="2.91129"
                          r="2.48172"
                          fill="#F25025"
                        />
                      </svg>
                      <p className="text-[#F25025] poppins-regular text-[14px] pl-[5px]">
                        {event?.time}
                      </p>
                    </div>
                  </div>
                  <Link href={"/comingSoon"}>
                    <button className="w-full poppins-semibold lg:text-[14px] text-[12px] text-[#4B4B4B] hover:text-[#2563EB] py-[7px] px-8 bg-[#FFFFFF] border border-[#E1E1E1]">
                      View Event Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="my-10 flex items-center justify-center">
          {/* <button className="text-[#3560FF] font-semibold">See more</button> */}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents_PastEvents;
