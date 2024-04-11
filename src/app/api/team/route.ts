import { NextApiRequest, NextApiResponse } from "next";

interface TeamMember {
  id: number;
  name: string;
  role: string;
}

export async function GET(request: Request, response: Response) {
  const teamMembers: TeamMember[] = [
    { id: 1, name: "Alex R", role: "Software engineer" },
    { id: 2, name: "Alex C", role: "Project manager" },
    { id: 3, name: "Alex W", role: "Software engineer" },
  ];

  return Response.json({ teamMembers });
}
