import React, { FC } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
}

const TeamMemberCard: FC<TeamMember> = ({ id, name, role }) => {
  return (
    <div className="border-2 border-slate-200 bg-blue-500">
      <h5 className="text-md">{name}</h5>
      <h6 className="text-sm">{role}</h6>
    </div>
  );
};

export default TeamMemberCard;
