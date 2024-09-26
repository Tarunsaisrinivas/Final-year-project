"use client";
import React, { useState } from "react";
import { Card, Button } from "antd";
import Image from "next/image";

const Hod = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex justify-center items-center py-2">
      <Card className="w-full max-w-6xl shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 relative">
            <Image
              src="/hod.jpeg"
              alt="HOD"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Basic details section */}
          <div className="p-6 md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-700">
              HEAD OF THE DEPARTMENT
            </h2>
            <h3 className="text-xl font-semibold text-gray-600 mt-2">
              Dr. V. Chandra Sekhar
            </h3>
            <p className="mt-2 text-gray-600">Contact: +91 9440351652</p>
            <p className="text-gray-600">Email ID: dr.vcs@srkrec.ac.in</p>
            <p className="text-gray-600">
              Address: SRKR Engineering College, Bhimavaram, West Godavari,
              Andhra Pradesh.
            </p>
            <Button
              type="primary"
              onClick={() => setShowDetails(!showDetails)}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              {showDetails ? "Show Less" : "Show More"}
            </Button>
          </div>
        </div>

        {/* "Show More" Button and Details below both sections */}
        <div className="p-6">
          {/* Show Details Section */}
          {showDetails && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-700">Education:</h4>
                <ul className="list-disc ml-6 text-gray-600">
                  <li>
                    Ph.D., Computer Science and Systems Engineering from Andhra
                    University, Visakhapatnam
                  </li>
                  <li>
                    M.Tech., Computer Science and Technology from Andhra
                    University, Visakhapatnam
                  </li>
                </ul>
                <h4 className="font-semibold text-gray-700 mt-2">
                  Teaching Experience:
                </h4>
                <p className="text-gray-600">
                  Teaching Experience Within College: 13 Years
                </p>
                <p className="text-gray-600">
                  Total Teaching Experience: 23 Years
                </p>
                {/*  */}
                <h4 className="font-semibold text-gray-700 mt-2">Projects::</h4>
                <ul className="list-disc ml-6 text-gray-600">
                  <li>AICTE funded MODROBS(Worth for 9 Lakhs) - Ongoing</li>
                  <li>Books Published : 01</li>
                  <li>Patents Published : 01</li>
                  <li>Workshops/STTP Attended : 21</li>
                  <li>Workshops Organized / Conducted : 13</li>
                  
                </ul>
                {/*  */}
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">
                  Members of Professional Bodies:
                </h4>
                <ul className="list-disc ml-6 text-gray-600">
                  <li>
                    Vice chair of IEEE Computer Society - Vizag Bay Section
                  </li>
                  <li>Member of ACM</li>
                  <li>Life member of IACSIT</li>
                  <li>Life member of ISTE</li>
                </ul>
                <h4 className="font-semibold text-gray-700 mt-2">
                  Subjects Taught:
                </h4>
                <ul className="list-disc ml-6 text-gray-600">
                  <li>Machine Learning</li>
                  <li>Software Engineering</li>
                  <li>Object Oriented Software Engineering</li>
                  <li>Data Communications</li>
                  <li>Computer Networks</li>
                  <li>Operating Systems</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Hod;
