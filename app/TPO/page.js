"use client";

import React, { useState } from "react";
import { Container, Draggable } from "react-drag-and-drop";
import { Card, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

const columnTitles = {
  screening: "Not Applied",
  approved: "Applied",
  technical: "Selected",
  hr: "Schduled",
};

const initialData = {
  screening: [
    { id: "1", name: "Liala Benson", position: "Hire", refId: "REC-34", date: "07-02-2018" },
    { id: "2", name: "Steve Banks", position: "Hire", refId: "REC-35", date: "07-02-2018" },
    { id: "3", name: "Pamela", position: "Hire", refId: "REC-45", date: "07-19-2018", image: "/placeholder.svg?height=40&width=40" },
  ],
  approved: [
    { id: "4", name: "Martin Smith", position: "Hire", refId: "REC-25", date: "07-02-2018" },
    { id: "5", name: "Charlotte", position: "Hire", refId: "REC-26", date: "07-02-2018" },
    { id: "6", name: "Evelyn", position: "Hire", refId: "REC-28", date: "07-02-2018" },
  ],
  technical: [
    { id: "7", name: "David Jones", position: "Hire", refId: "REC-13", date: "07-02-2018" },
    { id: "8", name: "James Cartner", position: "Hire", refId: "REC-59", date: "07-03-2018" },
    { id: "9", name: "John Smith", position: "Hire", refId: "REC-60", date: "07-03-2018" },
  ],
  hr: [
    { id: "10", name: "UE tech writer", refId: "REC-76", date: "09-21-2018", image: "/placeholder.svg?height=40&width=40" },
    { id: "11", name: "writer UE-Blog", refId: "REC-77", date: "10-07-2018", image: "/placeholder.svg?height=40&width=40" },
    { id: "12", name: "Technical blog writer", refId: "REC-80", date: "10-08-2018", image: "/placeholder.svg?height=40&width=40" },
  ],
};

export default function HiringBoard() {
  const [data, setData] = useState(initialData);

  const handleDrop = (item, targetColumn) => {
    const sourceColumn = Object.keys(data).find((col) =>
      data[col].some((candidate) => candidate.id === item.id)
    );

    if (sourceColumn && sourceColumn !== targetColumn) {
      const newData = { ...data };
      newData[sourceColumn] = newData[sourceColumn].filter(
        (candidate) => candidate.id !== item.id
      );
      newData[targetColumn].push(item);
      setData(newData);
    }
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(data).map(([columnId, candidates]) => (
          <div
            key={columnId}
            className="bg-gray-50/50 rounded-lg p-4"
            onDrop={(e) => {
              e.preventDefault();
              const item = JSON.parse(e.dataTransfer.getData("candidate"));
              handleDrop(item, columnId);
            }}
            onDragOver={(e) => e.preventDefault()}
          >
            <h3 className="text-sm font-medium text-gray-700 mb-4 flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${
                  columnId === "screening"
                    ? "bg-gray-400"
                    : columnId === "approved"
                    ? "bg-emerald-400"
                    : columnId === "technical"
                    ? "bg-blue-400"
                    : "bg-purple-400"
                }`}
              />
              {columnTitles[columnId]}
            </h3>
            <div className="space-y-3">
              {candidates.map((candidate) => (
               <Draggable
               key={candidate.id}
               type="candidate"
               data={JSON.stringify(candidate)} // Ensure the candidate data is serialized to JSON
               onDragStart={(e) => {
                 e.dataTransfer.setData("candidate", JSON.stringify(candidate)); // Serialize candidate data to JSON
               }}
             >
             
                  <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="p-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            {candidate.image ? (
                              <AvatarImage
                                src={candidate.image}
                                alt={candidate.name}
                              />
                            ) : (
                              <AvatarFallback>
                                <User className="w-4 h-4" />
                              </AvatarFallback>
                            )}
                          </Avatar>
                          <div>
                            <div className="font-medium text-sm">
                              {candidate.position} - {candidate.name}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <span>{candidate.refId}</span>
                              <span>•</span>
                              <span>{candidate.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </Draggable>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
