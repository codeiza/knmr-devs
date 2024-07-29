// Home.js
import React from "react";
import homeImage from "../assets/home.png";


function Certificates() {
  return (
    <section id="certificates" className="bg-tertiary h-screen flex justify-center items-center">
       <div className="grid grid-cols-3 gap-4 m-48">
        <div>
          <span className="text-5xl font-extrabold text-secondary">
            CERTIFICATES
          </span>
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-3 mb-10">
          <span className="text-justify text-white text-lg">
            Share your services or product offerings here.
            Present them as simple headers that can lead out to their pages where you
            can expound on them further. You can also use this space for other purposes where
            the information is best presented as mere teasers to other individualised pages.
          </span>
        </div>

        <div className="flex flex-col rounded-3xl bg-darkblue p-6">
          <span className="text-secondary text-xl">
            INFORMATION TECHNOLOGY SPECIALIST
          </span>
          <div className="flex items-center justify-between mt-10">
            <span className="text-white">
              Network Security
            </span>
            <span className="italic text-sm text-gray-500">
              July 12, 2023
            </span>
          </div>
          <span className="text-justify text-white mt-6">
            It covers secure communication protocols, intrusion detection systems,
            and risk mitigation strategies tailored to modern transportation networks,
            preparing professionals to tackle cybersecurity threats effectively.
          </span>
        </div>

        <div className="flex flex-col rounded-3xl bg-darkblue p-6">
          <span className="text-red-500 text-xl">
            INFORMATION TECHNOLOGY SPECIALIST
          </span>
          <div className="flex items-center justify-between mt-10">
            <span className="text-white">
              Networking
            </span>
            <span className="italic text-sm text-gray-500">
              July 13, 2023
            </span>
          </div>
          <span className="text-justify text-white mt-6">
            It covers areas such as network architecture, protocols,
            security measures, and troubleshooting techniques. This
            certification enables individuals to excel in roles related
            to network administration, cybersecurity, and infrastructure management.
          </span>
        </div>

        <div className="flex flex-col rounded-3xl bg-darkblue p-6">
          <span className="text-yellow-400 text-xl">
            TESDA CSS NC II
          </span>
          <div className="flex items-center justify-between mt-10">
            <span className="text-white">
              Computer System Servicing
            </span>
            <span className="italic text-sm text-gray-500">
              March 05, 2020
            </span>
          </div>
          <span className="text-justify text-white mt-6">
            It's a vocational course that equips individuals with skills
            in installing, configuring, and maintaining computer systems
            and networks. This certification program covers a range of
            topics including hardware and software troubleshooting,
            network setup, and basic programming.
          </span>
        </div>

        <div className="flex flex-col rounded-3xl bg-darkblue p-6">
          <span className="text-green-600 text-xl">
            STACKTREK CODE YOUR FUTURE
          </span>
          <div className="flex items-center justify-between mt-10">
            <span className="text-white">
              Workshop using Python
            </span>
            <span className="italic text-sm text-gray-500">
              March 22, 2023
            </span>
          </div>
          <span className="text-justify text-white mt-6">
            Hands-on sessions and tutorials focused on learning and
            applying Python programming language concepts. Participants
            engage in practical exercises, coding challenges, and
            projects to reinforce their understanding of Python syntax,
            data structures, algorithms, and libraries.
          </span>
        </div>

        <div className="flex flex-col rounded-3xl bg-darkblue p-6">
          <span className="text-purple-500 text-xl">
            1ST DAVAO STUDENT STARTUP SUMMIT
          </span>
          <div className="flex items-center justify-between mt-10">
            <span className="text-white">
              Sparking insights and ideas
            </span>
            <span className="italic text-sm text-gray-500">
              September 13, 2023
            </span>
          </div>
          <span className="text-justify text-white mt-6">
            This event is designed to ignite creativity and entrepreneurial
            spirit among students in Davao. Through interactive workshops,
            inspiring talks, and networking opportunities, participants will
            gain valuable insights and generate innovative ideas to kickstart
            their startup journey.
          </span>
        </div>

        <div className="flex flex-col rounded-3xl bg-darkblue p-6">
          <span className="text-secondary text-xl">
            ACADEMIC PERFORMANCE IN 4TH LEVEL
          </span>
          <div className="flex items-center justify-between mt-10">
            <span className="text-white">
              3rd Honor
            </span>
            <span className="italic text-sm text-gray-500">
              May 16, 2024
            </span>
          </div>
          <span className="text-justify text-white mt-6">
            Academic performance in the 4th level at the University of Mindanao
            has been outstanding, achieving 3rd Honors. This accomplishment
            reflects dedication, hard work, and a commitment to excellence in studies.
          </span>
        </div>

      </div>
    </section>
  );
}

export default Certificates;
