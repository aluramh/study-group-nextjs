"use client";

import TeamMemberCard from "@/app/components/team-member-card";
import React, { useEffect, useState } from "react";

const baseUrl = "http://localhost:3000";

async function getTeam() {
  const res = fetch("http://localhost:3000/api/team");

  return (await res).json();
}

export default function Example(props) {
  const [team, setTeam] = useState([]);

  const fetchTeam = async () => {
    const { teamMembers } = await getTeam();
    setTeam(teamMembers);
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  return (
    <main>
      <h1>Example page for group</h1>

      <pre>{JSON.stringify(team, null, 2)}</pre>

      <ul>
        {(team || [])?.map((member) => {
          return (
            <li key={member.id}>
              <TeamMemberCard {...member}></TeamMemberCard>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
