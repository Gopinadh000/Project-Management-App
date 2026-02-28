import { Box } from "@mui/material";
import React, { useState } from "react";
import SwimLane from "./SwimLane";

  const lanes = [
    {
      id: "new",
      displayName: "New",
      order: 0,
      collapsed: false,
      totalTasks: 6,
      tasks: [
        {
          id: "TASK-001",
          taskname: "User Registration UI",
          taskdesc:
            "Design and implement registration page. Design and implement registration page. Design and implement registration page.",
          priority: { level: "HIGH", color: "error" },
          category: ["Design"],
          duedate: "2026-04-10",
          progress: 10,
          attachmentsCount: 1,
          commentsCount: 3,
          assignee: {
            userid: "USER-001",
            username: "Gopinadh V",
            userimg: "https://i.pravatar.cc/40?img=3",
          },
          projectinfo: {
            projectid: "PROJECT-001",
            projectname: "PM App",
          },
          issuedata: { type: "Feature", color: "primary" },
          created_by: {
            userid: "USER-002",
            username: "Admin",
            userimg: "https://i.pravatar.cc/40?img=5",
          },
          created_at: "2026-04-01",
          updated_at: "2026-04-02",
        },
        {
          id: "TASK-002",
          taskname: "Fix Navbar Alignment",
          taskdesc: "Resolve spacing issues in header.",
          priority: { level: "MEDIUM", color: "warning" },
          category: ["UI"],
          duedate: "2026-04-12",
          progress: 30,
          attachmentsCount: 0,
          commentsCount: 2,
          assignee: {
            userid: "USER-003",
            username: "Ravi Kumar",
            userimg: "https://i.pravatar.cc/40?img=8",
          },
          projectinfo: {
            projectid: "PROJECT-001",
            projectname: "PM App",
          },
          issuedata: { type: "Bug", color: "error" },
          created_by: {
            userid: "USER-002",
            username: "Admin",
            userimg: "https://i.pravatar.cc/40?img=5",
          },
          created_at: "2026-04-02",
          updated_at: "2026-04-03",
        },
        {
          id: "TASK-003",
          taskname: "Implement Auth Middleware",
          taskdesc: "Protect routes with JWT verification.",
          priority: { level: "HIGH", color: "error" },
          category: ["Backend"],
          duedate: "2026-04-15",
          progress: 5,
          attachmentsCount: 2,
          commentsCount: 4,
          assignee: {
            userid: "USER-004",
            username: "Sneha Reddy",
            userimg: "https://i.pravatar.cc/40?img=9",
          },
          projectinfo: {
            projectid: "PROJECT-002",
            projectname: "Backend Revamp",
          },
          issuedata: { type: "Story", color: "secondary" },
          created_by: {
            userid: "USER-001",
            username: "Gopinadh V",
            userimg: "https://i.pravatar.cc/40?img=3",
          },
          created_at: "2026-04-03",
          updated_at: "2026-04-03",
        },
        {
          id: "TASK-004",
          taskname: "Database Schema Review",
          taskdesc: "Review table relations and indexing.",
          priority: { level: "LOW", color: "success" },
          category: ["DB"],
          duedate: "2026-04-18",
          progress: 0,
          attachmentsCount: 1,
          commentsCount: 1,
          assignee: {
            userid: "USER-002",
            username: "Abid Ali",
            userimg: "https://i.pravatar.cc/40?img=5",
          },
          projectinfo: {
            projectid: "PROJECT-002",
            projectname: "Backend Revamp",
          },
          issuedata: { type: "Task", color: "default" },
          created_by: {
            userid: "USER-001",
            username: "Gopinadh V",
            userimg: "https://i.pravatar.cc/40?img=3",
          },
          created_at: "2026-04-04",
          updated_at: "2026-04-04",
        },
      ],
    },

    {
      id: "in-progress",
      displayName: "In Progress",
      order: 1,
      collapsed: false,
      totalTasks: 5,
      tasks: [
        {
          id: "TASK-005",
          taskname: "Kanban Drag Logic",
          taskdesc: "Implement drag and drop logic.",
          priority: { level: "HIGH", color: "error" },
          category: ["Frontend"],
          duedate: "2026-04-20",
          progress: 45,
          attachmentsCount: 3,
          commentsCount: 8,
          assignee: {
            userid: "USER-003",
            username: "Ravi Kumar",
            userimg: "https://i.pravatar.cc/40?img=8",
          },
          projectinfo: {
            projectid: "PROJECT-003",
            projectname: "Kanban Module",
          },
          issuedata: { type: "Feature", color: "primary" },
          created_by: {
            userid: "USER-001",
            username: "Gopinadh V",
            userimg: "https://i.pravatar.cc/40?img=3",
          },
          created_at: "2026-04-05",
          updated_at: "2026-04-06",
        },
        {
          id: "TASK-006",
          taskname: "Task Edit Modal",
          taskdesc: "Build task update side modal.",
          priority: { level: "MEDIUM", color: "warning" },
          category: ["Frontend"],
          duedate: "2026-04-21",
          progress: 60,
          attachmentsCount: 2,
          commentsCount: 6,
          assignee: {
            userid: "USER-004",
            username: "Sneha Reddy",
            userimg: "https://i.pravatar.cc/40?img=9",
          },
          projectinfo: {
            projectid: "PROJECT-003",
            projectname: "Kanban Module",
          },
          issuedata: { type: "Story", color: "secondary" },
          created_by: {
            userid: "USER-002",
            username: "Abid Ali",
            userimg: "https://i.pravatar.cc/40?img=5",
          },
          created_at: "2026-04-06",
          updated_at: "2026-04-07",
        },
      ],
    },

    {
      id: "on-hold",
      displayName: "On Hold",
      order: 2,
      collapsed: false,
      totalTasks: 4,
      tasks: [],
    },

    {
      id: "functional-review",
      displayName: "Functional Review",
      order: 3,
      collapsed: false,
      totalTasks: 4,
      tasks: [],
    },

    {
      id: "pending-review",
      displayName: "Pending Review",
      order: 4,
      collapsed: false,
      totalTasks: 4,
      tasks: [],
    },

    {
      id: "resolved",
      displayName: "Resolved",
      order: 5,
      collapsed: false,
      totalTasks: 4,
      tasks: [],
    },

    {
      id: "dev-verified",
      displayName: "Dev Verified",
      order: 6,
      collapsed: false,
      totalTasks: 4,
      tasks: [],
    },

    {
      id: "qa-verified",
      displayName: "QA Verified",
      order: 7,
      collapsed: false,
      totalTasks: 4,
      tasks: [],
    },

    {
      id: "closed",
      displayName: "Closed",
      order: 8,
      collapsed: false,
      totalTasks: 4,
      tasks: [],
    },
  ];

  const SwimLanesBoardContainer = () => {
    const [boardData, setBoardData] = useState(lanes);

    const handleLaneCollapsed = (laneId: string) => {
      const updatedBoardData = boardData.map((lane) => {
        if (lane.id === laneId) {
          return { ...lane, collapsed: !lane.collapsed };
        }
        return lane;
      });

      setBoardData(updatedBoardData);
    };

    return (
      <Box
        className="flex gap-5 overflow-x-auto overflow-y-hidden h-full px-4 py-3"
        sx={{
          backgroundColor: "var(--app-bg-primary)",

          /* smoother horizontal scrolling */
          scrollBehavior: "smooth",

          /* thin scrollbar */
          scrollbarWidth: "thin",

          "&::-webkit-scrollbar": {
            height: 8,
          },

          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },

          "&::-webkit-scrollbar-thumb": {
            background: "#d1d5db",
            borderRadius: 10,
          },

          "&::-webkit-scrollbar-thumb:hover": {
            background: "#9ca3af",
          },
        }}
      >
        {boardData.map((eachlane) => (
          <SwimLane
            key={eachlane.id}
            laneData={eachlane}
            handleLaneCollapsed={handleLaneCollapsed}
          />
        ))}
      </Box>
    );
  };

export default SwimLanesBoardContainer;
